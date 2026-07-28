// src/components/viz/PropellerBlades.jsx
//
// Motion & artifact correction.
//
// PROPELLER acquires k-space as a set of rotating rectangular "blades", each
// covering the low-frequency centre. Because every blade re-samples the centre,
// blades can be compared against each other to detect inter-blade motion — that
// self-navigating property is what makes the correction possible.
//
// Three phases, looping:
//   1. ACQUIRE  — blades sweep out at incrementing angles
//   2. CORRUPT  — motion perturbs blade rotation/translation; ghosting appears
//   3. CORRECT  — blades re-register onto the centre; the ghosts collapse

import React from "react";
import useCanvasAnimation from "../../lib/useCanvasAnimation";
import { C } from "../../theme";

const BLADES = 9;
const PHASE = [3.4, 3.0, 3.4]; // acquire, corrupt, correct (seconds)
const TOTAL = PHASE.reduce((a, b) => a + b, 0);

// deterministic per-blade motion perturbation (no Math.random — the animation
// must look identical every cycle, and identical in the reduced-motion frame)
const jitter = (i) => {
  const s = Math.sin(i * 12.9898) * 43758.5453;
  return s - Math.floor(s) - 0.5; // -0.5 .. 0.5
};

export default function PropellerBlades({ accent = C.func, height = 200 }) {
  const draw = (ctx, w, h, t) => {
    ctx.clearRect(0, 0, w, h);

    const local = t % TOTAL;
    let phase = 0;
    let acc = 0;
    for (let i = 0; i < PHASE.length; i++) {
      if (local >= acc && local < acc + PHASE[i]) { phase = i; break; }
      acc += PHASE[i];
    }
    const within = (local - acc) / PHASE[phase];

    const cx = w / 2;
    const cy = h / 2 + 6;
    const R = Math.min(w, h - 26) / 2 - 8;
    if (R <= 8) return;

    // how corrupted are we right now (0 = clean, 1 = fully corrupted)
    let corruption = 0;
    if (phase === 1) corruption = Math.min(1, within / 0.45);
    else if (phase === 2) corruption = Math.max(0, 1 - within / 0.7);

    const bladeCount =
      phase === 0 ? Math.min(BLADES, Math.floor(within * BLADES) + 1) : BLADES;

    // ── ghosting halo (the visible artifact) ────────────────────────────
    if (corruption > 0.01) {
      const rings = 4;
      for (let g = 1; g <= rings; g++) {
        const off = corruption * 11 * g;
        ctx.globalAlpha = corruption * 0.16 * (1 - g / (rings + 1));
        ctx.strokeStyle = C.keyword;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.ellipse(cx, cy + off, R * 0.62, R * 0.74, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.ellipse(cx, cy - off, R * 0.62, R * 0.74, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    }

    // ── k-space envelope ───────────────────────────────────────────────
    ctx.strokeStyle = C.border;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.stroke();

    // ── blades ─────────────────────────────────────────────────────────
    const bladeW = R * 1.72;
    const bladeH = R * 0.3;
    const spin = phase === 0 ? 0 : (t - PHASE[0]) * 0.09;

    for (let i = 0; i < bladeCount; i++) {
      const baseAngle = (i / BLADES) * Math.PI + spin;
      const angle = baseAngle + corruption * jitter(i) * 0.5;
      const shiftX = corruption * jitter(i + 40) * R * 0.3;
      const shiftY = corruption * jitter(i + 80) * R * 0.3;

      // freshly-acquired blade flashes brighter
      const age = phase === 0 ? within * BLADES - i : 3;
      const fresh = Math.max(0, 1 - age);

      ctx.save();
      ctx.translate(cx + shiftX, cy + shiftY);
      ctx.rotate(angle);

      const grad = ctx.createLinearGradient(-bladeW / 2, 0, bladeW / 2, 0);
      const a = 0.1 + fresh * 0.3;
      grad.addColorStop(0, `${accent}00`);
      grad.addColorStop(0.5, `${accent}${Math.round((a + 0.28) * 255).toString(16).padStart(2, "0")}`);
      grad.addColorStop(1, `${accent}00`);
      ctx.fillStyle = grad;
      ctx.fillRect(-bladeW / 2, -bladeH / 2, bladeW, bladeH);

      ctx.strokeStyle = fresh > 0.05 ? C.textPrimary : `${accent}${corruption > 0.4 ? "55" : "88"}`;
      ctx.lineWidth = fresh > 0.05 ? 1.3 : 0.8;
      ctx.strokeRect(-bladeW / 2, -bladeH / 2, bladeW, bladeH);

      // readout lines within the blade
      ctx.strokeStyle = `${accent}33`;
      ctx.lineWidth = 0.5;
      for (let k = 1; k < 4; k++) {
        const y = -bladeH / 2 + (bladeH * k) / 4;
        ctx.beginPath();
        ctx.moveTo(-bladeW / 2, y);
        ctx.lineTo(bladeW / 2, y);
        ctx.stroke();
      }
      ctx.restore();
    }

    // ── shared centre: every blade samples it, which is what enables
    //    self-navigated motion detection ───────────────────────────────
    const pulse = 0.5 + 0.5 * Math.sin(t * 2.4);
    ctx.fillStyle = corruption > 0.5 ? C.keyword : C.green;
    ctx.globalAlpha = 0.22 + pulse * 0.18;
    ctx.beginPath();
    ctx.arc(cx, cy, R * 0.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.beginPath();
    ctx.arc(cx, cy, R * 0.075, 0, Math.PI * 2);
    ctx.fill();

    // ── status readout ─────────────────────────────────────────────────
    const labels = [
      ["ACQUIRE", C.comment, `blade ${bladeCount}/${BLADES}`],
      ["MOTION DETECTED", C.keyword, "inter-blade misregistration"],
      ["CORRECTED", C.green, "blades re-registered"],
    ];
    const [text, colour, sub] = labels[phase];
    ctx.font = `700 10px ${"JetBrains Mono, ui-monospace, monospace"}`;
    ctx.fillStyle = colour;
    ctx.fillText(text, 4, 12);
    ctx.font = `500 9px ${"JetBrains Mono, ui-monospace, monospace"}`;
    ctx.fillStyle = C.textMuted;
    ctx.fillText(sub, 4, h - 4);
  };

  // open with most blades already acquired rather than a single bar, and settle
  // the reduced-motion frame on the corrected result
  const ref = useCanvasAnimation(draw, { fps: 30, staticTime: 9.2, startAt: 3.0 });

  return (
    <canvas
      ref={ref}
      role="img"
      aria-label="Animation of rotating PROPELLER k-space blades: blades are acquired at incrementing angles, patient motion misregisters them and produces ghosting, then correction re-registers the blades and the ghosting disappears."
      style={{ width: "100%", height, display: "block" }}
    />
  );
}
