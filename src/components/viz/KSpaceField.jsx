// src/components/viz/KSpaceField.jsx
//
// Ambient hero background: a slowly-breathing k-space sampling lattice.
// Replaces the previous generic "code rain" with something that belongs to a
// medical-imaging researcher. Deliberately low-contrast — it sits behind text
// and must never compete with it.

import React from "react";
import useCanvasAnimation from "../../lib/useCanvasAnimation";
import { C } from "../../theme";

const LINE_GAP = 26;   // px between phase-encode lines
const SWEEP_PERIOD = 9; // seconds for one acquisition sweep

export default function KSpaceField({ height = "100%" }) {
  const draw = (ctx, w, h, t) => {
    ctx.clearRect(0, 0, w, h);
    if (w < 8 || h < 8) return;

    const cx = w * 0.74;
    const cy = h * 0.42;
    const maxR = Math.hypot(Math.max(cx, w - cx), Math.max(cy, h - cy));

    // ── phase-encode lattice ───────────────────────────────────────────
    const rows = Math.ceil(h / LINE_GAP) + 1;
    const sweepY = ((t % SWEEP_PERIOD) / SWEEP_PERIOD) * (h + 200) - 100;

    for (let i = 0; i < rows; i++) {
      const y = i * LINE_GAP;
      const dist = Math.abs(y - sweepY);
      const near = Math.max(0, 1 - dist / 130);          // proximity to sweep
      const breathe = 0.5 + 0.5 * Math.sin(t * 0.5 + i * 0.32);
      const alpha = 0.035 + near * 0.2 + breathe * 0.022;

      ctx.strokeStyle = `rgba(88,166,255,${alpha.toFixed(3)})`;
      ctx.lineWidth = near > 0.55 ? 1.3 : 0.7;
      ctx.beginPath();
      ctx.moveTo(0, y + 0.5);
      ctx.lineTo(w, y + 0.5);
      ctx.stroke();
    }

    // ── concentric k-space contours ────────────────────────────────────
    const rings = 7;
    for (let i = 1; i <= rings; i++) {
      const base = (i / rings) * maxR * 0.8;
      const r = base + Math.sin(t * 0.42 + i * 0.8) * 6;
      const alpha = 0.05 * (1 - i / (rings + 2));
      ctx.strokeStyle = `rgba(126,231,135,${alpha.toFixed(3)})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.stroke();
    }

    // ── centre of k-space ──────────────────────────────────────────────
    const pulse = 0.5 + 0.5 * Math.sin(t * 1.1);
    const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, 90 + pulse * 20);
    g.addColorStop(0, `rgba(88,166,255,${(0.16 + pulse * 0.07).toFixed(3)})`);
    g.addColorStop(1, "rgba(88,166,255,0)");
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(cx, cy, 110, 0, Math.PI * 2);
    ctx.fill();

    // ── sampled-point sparkle along the sweep ──────────────────────────
    const cols = Math.floor(w / 42);
    for (let i = 0; i <= cols; i++) {
      const x = i * 42 + ((t * 9) % 42);
      const y = Math.round(sweepY / LINE_GAP) * LINE_GAP + 0.5;
      if (y < 0 || y > h) continue;
      const tw = 0.5 + 0.5 * Math.sin(t * 3 + i * 1.4);
      ctx.fillStyle = `rgba(165,214,255,${(0.1 + tw * 0.28).toFixed(3)})`;
      ctx.fillRect(x, y - 1, 2, 2);
    }
  };

  const ref = useCanvasAnimation(draw, { fps: 24, staticTime: 3.2 });

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height,
        pointerEvents: "none",
        opacity: 0.9,
      }}
    />
  );
}
