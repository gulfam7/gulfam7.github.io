// src/components/viz/SpikeRaster.jsx
//
// Spiking neural networks.
//
// Top    : leaky integrate-and-fire membrane potentials. Each trace charges
//          toward the threshold, fires, and resets to zero — the discontinuity
//          IS the computation.
// Bottom : the resulting spike raster accumulating over time, scrolling left.
//
// The adaptive-timestep idea from STEG-AIW shows up as the gating band: when
// the population is confident, the network spends fewer timesteps.

import React, { useRef } from "react";
import useCanvasAnimation from "../../lib/useCanvasAnimation";
import { C } from "../../theme";

const NEURONS = 5;      // traces drawn in the top panel
const RASTER_ROWS = 14; // rows in the spike raster
const HISTORY = 150;    // raster columns retained
const V_TH = 1.0;       // firing threshold
const DT = 1 / 30;

export default function SpikeRaster({ accent = C.variable, height = 200 }) {
  // Simulation state persists across frames but is owned by this component.
  const sim = useRef(null);
  if (sim.current === null) {
    sim.current = {
      v: new Float64Array(NEURONS),
      trail: Array.from({ length: NEURONS }, () => []),
      raster: [],               // array of Uint8Array(RASTER_ROWS)
      rv: new Float64Array(RASTER_ROWS),
      lastT: 0,
      flash: new Float64Array(NEURONS),
    };
    // stagger initial potentials so the traces don't fire in lockstep
    for (let i = 0; i < NEURONS; i++) sim.current.v[i] = (i * 0.19) % 0.9;
    for (let i = 0; i < RASTER_ROWS; i++) sim.current.rv[i] = (i * 0.37) % 0.95;

    // Warm the simulation up by a full history window so the very first frame
    // already shows traces and a populated raster. Without this the canvas
    // starts empty — and under prefers-reduced-motion, where only ONE frame is
    // ever drawn, an empty canvas would be all the user ever sees.
    const s = sim.current;
    for (let k = 0; k < HISTORY; k++) {
      const tt = k * DT;
      const drive = 0.55 + (0.5 + 0.5 * Math.sin(tt * 0.55)) * 1.5;
      for (let i = 0; i < NEURONS; i++) {
        const bias = 0.72 + 0.26 * Math.sin(i * 2.1 + 1.3);
        s.v[i] += (-s.v[i] * 0.55 + drive * bias) * DT;
        let fired = 0;
        if (s.v[i] >= V_TH) { s.v[i] = 0; fired = 1; }
        s.trail[i].push({ v: s.v[i], fired });
      }
      const col = new Uint8Array(RASTER_ROWS);
      for (let i = 0; i < RASTER_ROWS; i++) {
        const bias = 0.6 + 0.55 * Math.sin(i * 1.7 + 0.4);
        s.rv[i] += (-s.rv[i] * 0.5 + drive * bias * 0.85) * DT;
        if (s.rv[i] >= V_TH) { s.rv[i] = 0; col[i] = 1; }
      }
      s.raster.push(col);
    }
    s.lastT = HISTORY * DT;
  }

  const draw = (ctx, w, h, t) => {
    const s = sim.current;
    // advance the simulation by real elapsed time, clamped so a long pause
    // (tab hidden) doesn't cause a huge catch-up burst
    let step = t - s.lastT;
    s.lastT = t;
    if (step < 0 || step > 0.5) step = DT;

    // input drive is modulated so the network visibly goes through
    // high-activity and quiescent (gated) periods
    const gate = 0.5 + 0.5 * Math.sin(t * 0.55);
    const drive = 0.55 + gate * 1.5;

    // ── advance neurons ────────────────────────────────────────────────
    for (let i = 0; i < NEURONS; i++) {
      const bias = 0.72 + 0.26 * Math.sin(i * 2.1 + 1.3);
      s.v[i] += (-s.v[i] * 0.55 + drive * bias) * step; // leaky integration
      let fired = 0;
      if (s.v[i] >= V_TH) {
        s.v[i] = 0;
        fired = 1;
        s.flash[i] = 1;
      }
      s.flash[i] = Math.max(0, s.flash[i] - step * 3.2);
      s.trail[i].push({ v: s.v[i], fired });
      if (s.trail[i].length > HISTORY) s.trail[i].shift();
    }

    // ── advance raster population ──────────────────────────────────────
    const col = new Uint8Array(RASTER_ROWS);
    for (let i = 0; i < RASTER_ROWS; i++) {
      const bias = 0.6 + 0.55 * Math.sin(i * 1.7 + 0.4);
      s.rv[i] += (-s.rv[i] * 0.5 + drive * bias * 0.85) * step;
      if (s.rv[i] >= V_TH) { s.rv[i] = 0; col[i] = 1; }
    }
    s.raster.push(col);
    if (s.raster.length > HISTORY) s.raster.shift();

    // ── layout ─────────────────────────────────────────────────────────
    ctx.clearRect(0, 0, w, h);
    const padL = 22;
    const padR = 6;
    const plotW = w - padL - padR;
    if (plotW <= 10) return;
    const topH = (h - 26) * 0.54;
    const topY = 14;
    const rasterY = topY + topH + 10;
    const rasterH = h - rasterY - 12;

    ctx.font = `500 8.5px ${"JetBrains Mono, ui-monospace, monospace"}`;

    // ── membrane potential traces ──────────────────────────────────────
    // threshold line
    ctx.strokeStyle = `${C.keyword}66`;
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(padL, topY);
    ctx.lineTo(padL + plotW, topY);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = `${C.keyword}cc`;
    ctx.fillText("V_th", 1, topY + 3);

    const laneH = topH / NEURONS;
    for (let i = 0; i < NEURONS; i++) {
      const trail = s.trail[i];
      const baseY = topY + laneH * (i + 1) - 2;
      const amp = laneH * 0.82;

      ctx.beginPath();
      let started = false;
      for (let k = 0; k < trail.length; k++) {
        const x = padL + (k / (HISTORY - 1)) * plotW;
        const y = baseY - trail[k].v * amp;
        if (trail[k].fired) {
          // vertical spike stroke, then break the path at the reset
          ctx.stroke();
          ctx.strokeStyle = accent;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(x, baseY);
          ctx.lineTo(x, baseY - amp * 1.12);
          ctx.stroke();
          ctx.beginPath();
          started = false;
          continue;
        }
        ctx.strokeStyle = `${accent}99`;
        ctx.lineWidth = 1;
        if (!started) { ctx.moveTo(x, y); started = true; }
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // leading-edge dot, brightening on fire
      const last = trail[trail.length - 1];
      if (last) {
        const x = padL + plotW;
        const y = baseY - last.v * amp;
        ctx.fillStyle = s.flash[i] > 0.05 ? C.textPrimary : accent;
        ctx.beginPath();
        ctx.arc(x - 1, y, s.flash[i] > 0.05 ? 2.6 : 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // ── spike raster ───────────────────────────────────────────────────
    ctx.strokeStyle = C.border;
    ctx.lineWidth = 1;
    ctx.strokeRect(padL + 0.5, rasterY + 0.5, plotW - 1, rasterH - 1);

    const rowH = rasterH / RASTER_ROWS;
    const colW = plotW / HISTORY;
    for (let k = 0; k < s.raster.length; k++) {
      const x = padL + (k / (HISTORY - 1)) * plotW;
      // older spikes fade
      const age = k / Math.max(1, s.raster.length - 1);
      const c = s.raster[k];
      for (let i = 0; i < RASTER_ROWS; i++) {
        if (!c[i]) continue;
        ctx.fillStyle = `${accent}${Math.round((0.25 + age * 0.75) * 255)
          .toString(16)
          .padStart(2, "0")}`;
        ctx.fillRect(x, rasterY + i * rowH + rowH * 0.18, Math.max(1.1, colW * 0.9), rowH * 0.64);
      }
    }

    ctx.fillStyle = C.textMuted;
    ctx.fillText("raster", 1, rasterY + 8);

    // ── gating / timestep readout ──────────────────────────────────────
    const gated = gate < 0.34;
    ctx.font = `700 9px ${"JetBrains Mono, ui-monospace, monospace"}`;
    ctx.fillStyle = gated ? C.green : accent;
    const label = gated ? "gated · T=2 steps" : `active · T=${4 + Math.round(gate * 4)} steps`;
    ctx.fillText(label, padL, h - 2);

    // spike-rate meter
    let spikes = 0;
    const window = Math.min(30, s.raster.length);
    for (let k = s.raster.length - window; k < s.raster.length; k++) {
      if (k < 0) continue;
      for (let i = 0; i < RASTER_ROWS; i++) spikes += s.raster[k][i];
    }
    const rate = spikes / Math.max(1, window * RASTER_ROWS);
    ctx.fillStyle = C.textMuted;
    ctx.font = `500 9px ${"JetBrains Mono, ui-monospace, monospace"}`;
    const rt = `rate ${(rate * 100).toFixed(0)}%`;
    ctx.fillText(rt, w - padR - ctx.measureText(rt).width, h - 2);
  };

  const ref = useCanvasAnimation(draw, { fps: 30, staticTime: 6 });

  return (
    <canvas
      ref={ref}
      role="img"
      aria-label="Animation of a spiking neural network: membrane potentials integrate toward a firing threshold, emit a spike and reset, while a spike raster below accumulates the population activity and an adaptive timestep readout shows the network gating down during quiet periods."
      style={{ width: "100%", height, display: "block" }}
    />
  );
}
