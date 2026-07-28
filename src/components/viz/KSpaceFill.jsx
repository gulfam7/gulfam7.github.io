// src/components/viz/KSpaceFill.jsx
//
// Accelerated MRI reconstruction.
//
// Left panel  : Cartesian k-space. Phase-encode lines light up as they are
//               acquired, starting from the fully-sampled centre (the
//               auto-calibration region) and filling outward.
// Right panel : the image reconstructed from EXACTLY those lines, via a real
//               inverse 2D FFT. The wrap-around aliasing you see at R=8 is
//               genuine undersampling aliasing, not a stylised blur.
//
// Cycle: R=8 -> R=4 -> R=2 -> R=1, hold, restart.

import React, { useMemo, useRef } from "react";
import useCanvasAnimation from "../../lib/useCanvasAnimation";
import { brainPhantom, toKSpace, reconstruct } from "../../lib/mri";
import { C } from "../../theme";

const N = 64;               // grid size
const ACS = 8;              // fully-sampled centre lines (auto-calibration)
const STAGES = [8, 4, 2, 1];
const STAGE_SECONDS = 2.6;

/** Sampling mask for acceleration R: keep centre lines + every Rth line. */
function maskFor(R) {
  const m = new Float64Array(N);
  const lo = (N - ACS) / 2;
  const hi = lo + ACS;
  for (let y = 0; y < N; y++) {
    if ((y >= lo && y < hi) || y % R === 0) m[y] = 1;
  }
  return m;
}

export default function KSpaceFill({ accent = C.number, height = 200 }) {
  // Phantom and its k-space are fixed — compute once, never per frame.
  const model = useMemo(() => {
    const img = brainPhantom(N);
    const { re, im } = toKSpace(img, N);
    const masks = STAGES.map(maskFor);
    // log-magnitude of k-space, normalised, for display
    const logMag = new Float64Array(N * N);
    let maxLog = 0;
    for (let i = 0; i < N * N; i++) {
      const v = Math.log1p(Math.hypot(re[i], im[i]));
      logMag[i] = v;
      if (v > maxLog) maxLog = v;
    }
    for (let i = 0; i < N * N; i++) logMag[i] /= maxLog || 1;
    return { re, im, masks, logMag };
  }, []);

  // Reconstruction is recomputed only when the visible line set changes.
  const cache = useRef({ key: -1, mag: null, peak: 1 });

  const draw = (ctx, w, h, t) => {
    const cycle = STAGES.length * STAGE_SECONDS;
    const local = t % cycle;
    const stage = Math.min(STAGES.length - 1, Math.floor(local / STAGE_SECONDS));
    const within = (local % STAGE_SECONDS) / STAGE_SECONDS;
    const R = STAGES[stage];
    const targetMask = model.masks[stage];

    // Lines stream in over the first 65% of each stage, then hold.
    const reveal = Math.min(1, within / 0.65);
    const revealRow = reveal * N;

    // Build the currently-acquired mask, ordered centre-outward.
    const live = new Float64Array(N);
    const mid = (N - 1) / 2;
    let acquired = 0;
    for (let y = 0; y < N; y++) {
      if (targetMask[y] && Math.abs(y - mid) <= revealRow / 2) {
        live[y] = 1;
        acquired++;
      }
    }

    // Recompute the reconstruction only when the line set actually changed.
    const key = stage * 1000 + acquired;
    if (cache.current.key !== key) {
      const mag = reconstruct(model.re, model.im, N, live);
      let peak = 0;
      for (let i = 0; i < mag.length; i++) if (mag[i] > peak) peak = mag[i];
      cache.current = { key, mag, peak: peak || 1 };
    }
    const { mag, peak } = cache.current;

    // ── layout ──────────────────────────────────────────────────────────
    // Reserve a label row above AND below the panels; the readouts used to be
    // drawn into the same corner as the panel titles and overlapped them.
    ctx.clearRect(0, 0, w, h);
    const pad = 8;
    const gap = 14;
    const topLabelH = 14;
    const botLabelH = 13;
    const side = Math.min(
      (w - pad * 2 - gap) / 2,
      h - pad * 2 - topLabelH - botLabelH
    );
    if (side <= 4) return;
    const top = pad + topLabelH;
    const leftX = pad + Math.max(0, (w - pad * 2 - gap - side * 2) / 2);
    const rightX = leftX + side + gap;
    const cell = side / N;

    ctx.font = `600 9px ${"JetBrains Mono, ui-monospace, monospace"}`;
    ctx.textBaseline = "alphabetic";

    // ── left: k-space ───────────────────────────────────────────────────
    ctx.fillStyle = "rgba(1,4,9,0.85)";
    ctx.fillRect(leftX, top, side, side);

    for (let y = 0; y < N; y++) {
      if (!live[y]) continue;
      for (let x = 0; x < N; x++) {
        const v = model.logMag[y * N + x];
        if (v < 0.04) continue;
        ctx.fillStyle = `rgba(88,166,255,${(v * 0.95).toFixed(3)})`;
        ctx.fillRect(leftX + x * cell, top + y * cell, cell + 0.6, cell + 0.6);
      }
    }
    // acquired-line tick marks down the phase-encode axis
    for (let y = 0; y < N; y++) {
      if (!live[y]) continue;
      ctx.fillStyle = `${accent}cc`;
      ctx.fillRect(leftX - 3.5, top + y * cell, 2.5, Math.max(1, cell));
    }
    // the ACS band
    const acsLo = top + ((N - ACS) / 2) * cell;
    ctx.strokeStyle = `${C.green}66`;
    ctx.lineWidth = 1;
    ctx.strokeRect(leftX + 0.5, acsLo + 0.5, side - 1, ACS * cell - 1);

    ctx.strokeStyle = C.border;
    ctx.strokeRect(leftX + 0.5, top + 0.5, side - 1, side - 1);
    ctx.fillStyle = C.comment;
    ctx.fillText("k-space", leftX, top - 5);

    // ── right: reconstruction ───────────────────────────────────────────
    ctx.fillStyle = "rgba(1,4,9,0.85)";
    ctx.fillRect(rightX, top, side, side);

    for (let y = 0; y < N; y++) {
      for (let x = 0; x < N; x++) {
        const v = Math.min(1, mag[y * N + x] / peak);
        if (v < 0.02) continue;
        const g = Math.round(255 * Math.pow(v, 0.85));
        ctx.fillStyle = `rgb(${Math.round(g * 0.86)},${Math.round(g * 0.93)},${g})`;
        ctx.fillRect(rightX + x * cell, top + y * cell, cell + 0.6, cell + 0.6);
      }
    }
    ctx.strokeStyle = C.border;
    ctx.strokeRect(rightX + 0.5, top + 0.5, side - 1, side - 1);
    ctx.fillStyle = C.comment;
    ctx.fillText("reconstruction", rightX, top - 5);

    // ── readouts, on the row BELOW the panels ───────────────────────────
    const baseline = top + side + 10;
    const pct = Math.round((acquired / N) * 100);

    ctx.fillStyle = C.textMuted;
    ctx.font = `500 9px ${"JetBrains Mono, ui-monospace, monospace"}`;
    ctx.fillText(`${acquired}/${N} lines · ${pct}%`, leftX, baseline);

    ctx.fillStyle = accent;
    ctx.font = `700 10px ${"JetBrains Mono, ui-monospace, monospace"}`;
    const label = `R = ${R}x`;
    ctx.fillText(label, rightX + side - ctx.measureText(label).width, baseline);
  };

  // open partway into the R=8 stage so lines are already on screen, and settle
  // the reduced-motion frame on the fully-sampled R=1 reconstruction
  const ref = useCanvasAnimation(draw, { fps: 24, staticTime: 9.6, startAt: 2.0 });

  return (
    <canvas
      ref={ref}
      role="img"
      aria-label="Animation of Cartesian k-space filling with phase-encode lines while the reconstructed brain image resolves from aliased to sharp as the acceleration factor decreases."
      style={{ width: "100%", height, display: "block" }}
    />
  );
}
