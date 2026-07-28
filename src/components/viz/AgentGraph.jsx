// src/components/viz/AgentGraph.jsx
//
// Foundation models & AI agents (AgentMRI).
//
// The pipeline as a running graph: a vision-language router inspects the input,
// classifies which degradation is present, dispatches the matching specialist
// model, and a quality gate decides whether to accept or send it back. Packets
// travel the edges; the branch actually taken changes each cycle, which is the
// whole point — the routing is data-dependent, not a fixed pipeline.

import React from "react";
import useCanvasAnimation from "../../lib/useCanvasAnimation";
import { C } from "../../theme";

// normalised layout (0..1); scaled to the canvas at draw time
const NODES = [
  { id: "in",     x: 0.07, y: 0.50, label: "k-space", kind: "io" },
  { id: "vlm",    x: 0.29, y: 0.50, label: "VLM router", kind: "core" },
  { id: "noise",  x: 0.55, y: 0.17, label: "denoise", kind: "expert" },
  { id: "motion", x: 0.55, y: 0.50, label: "de-motion", kind: "expert" },
  { id: "recon",  x: 0.55, y: 0.83, label: "reconstruct", kind: "expert" },
  { id: "gate",   x: 0.78, y: 0.50, label: "QC gate", kind: "core" },
  { id: "out",    x: 0.94, y: 0.50, label: "image", kind: "io" },
];

const EDGES = [
  ["in", "vlm"],
  ["vlm", "noise"],
  ["vlm", "motion"],
  ["vlm", "recon"],
  ["noise", "gate"],
  ["motion", "gate"],
  ["recon", "gate"],
  ["gate", "out"],
];

const BRANCHES = ["noise", "motion", "recon"];
const CYCLE = 4.2;

const nodeAt = (id) => NODES.find((n) => n.id === id);

/** ctx.roundRect is missing on older Safari/Firefox — fall back to a plain rect
 *  rather than throwing and killing the whole animation loop. */
function roundedRect(ctx, x, y, w, h, r) {
  if (typeof ctx.roundRect === "function") ctx.roundRect(x, y, w, h, r);
  else ctx.rect(x, y, w, h);
}

export default function AgentGraph({ accent = C.green, height = 200 }) {
  const draw = (ctx, w, h, t) => {
    ctx.clearRect(0, 0, w, h);

    const padX = 26;
    const padY = 26;
    const px = (n) => padX + n.x * (w - padX * 2);
    const py = (n) => padY + n.y * (h - padY * 2);

    const cycleIndex = Math.floor(t / CYCLE);
    const p = (t % CYCLE) / CYCLE; // 0..1 progress through one dispatch
    // which expert this pass routes to — deterministic, varies per cycle
    const branch = BRANCHES[cycleIndex % BRANCHES.length];
    // occasionally the QC gate rejects and loops back
    const rejected = cycleIndex % 4 === 3;

    const activePath = ["in", "vlm", branch, "gate", "out"];
    // segment progress: 0-0.2 in→vlm, 0.2-0.4 vlm→expert, 0.4-0.7 expert→gate,
    // 0.7-1.0 gate→out (or gate→vlm when rejected)
    const seg = (lo, hi) => Math.max(0, Math.min(1, (p - lo) / (hi - lo)));

    // ── edges ──────────────────────────────────────────────────────────
    for (const [a, b] of EDGES) {
      const na = nodeAt(a);
      const nb = nodeAt(b);
      const isActive =
        activePath.includes(a) &&
        activePath.includes(b) &&
        activePath.indexOf(b) === activePath.indexOf(a) + 1;

      ctx.beginPath();
      ctx.moveTo(px(na), py(na));
      // gentle curve for the fan-out so the three branches read as distinct
      if (na.y !== nb.y) {
        const mx = (px(na) + px(nb)) / 2;
        ctx.bezierCurveTo(mx, py(na), mx, py(nb), px(nb), py(nb));
      } else {
        ctx.lineTo(px(nb), py(nb));
      }
      ctx.strokeStyle = isActive ? `${accent}88` : `${C.border}`;
      ctx.lineWidth = isActive ? 1.6 : 1;
      ctx.stroke();
    }

    // ── rejection feedback edge (gate → vlm), only while rejecting ──────
    if (rejected && p > 0.7) {
      const g = nodeAt("gate");
      const v = nodeAt("vlm");
      const topY = padY * 0.55;
      ctx.beginPath();
      ctx.moveTo(px(g), py(g) - 13);
      ctx.bezierCurveTo(px(g), topY, px(v), topY, px(v), py(v) - 13);
      ctx.strokeStyle = `${C.keyword}aa`;
      ctx.lineWidth = 1.4;
      ctx.setLineDash([3, 3]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = C.keyword;
      ctx.font = `600 8px ${"JetBrains Mono, ui-monospace, monospace"}`;
      ctx.fillText("retry", (px(g) + px(v)) / 2 - 11, topY + 9);
    }

    // ── travelling packet ──────────────────────────────────────────────
    const drawPacket = (a, b, prog) => {
      if (prog <= 0 || prog >= 1) return;
      const na = nodeAt(a);
      const nb = nodeAt(b);
      let x;
      let y;
      if (na.y !== nb.y) {
        // sample the same bezier used for the edge
        const mx = (px(na) + px(nb)) / 2;
        const u = 1 - prog;
        x = u * u * u * px(na) + 3 * u * u * prog * mx + 3 * u * prog * prog * mx + prog ** 3 * px(nb);
        y = u * u * u * py(na) + 3 * u * u * prog * py(na) + 3 * u * prog * prog * py(nb) + prog ** 3 * py(nb);
      } else {
        x = px(na) + (px(nb) - px(na)) * prog;
        y = py(na) + (py(nb) - py(na)) * prog;
      }
      ctx.fillStyle = accent;
      ctx.shadowColor = accent;
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(x, y, 3.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    drawPacket("in", "vlm", seg(0.0, 0.2));
    drawPacket("vlm", branch, seg(0.2, 0.42));
    drawPacket(branch, "gate", seg(0.42, 0.7));
    if (!rejected) drawPacket("gate", "out", seg(0.7, 1.0));

    // ── nodes ──────────────────────────────────────────────────────────
    ctx.textBaseline = "middle";
    for (const n of NODES) {
      const x = px(n);
      const y = py(n);
      const idx = activePath.indexOf(n.id);
      // a node is "lit" while the packet is at or just past it
      const arrival = [0, 0.2, 0.42, 0.7, 1.0][idx] ?? -1;
      const lit = idx >= 0 && p >= arrival - 0.02 && p < arrival + 0.28;
      const isGateFail = n.id === "gate" && rejected && p > 0.7;
      const colour = isGateFail ? C.keyword : lit ? accent : C.comment;

      const rx = n.kind === "io" ? 9 : n.kind === "core" ? 13 : 11;

      if (lit || isGateFail) {
        ctx.globalAlpha = 0.18;
        ctx.fillStyle = colour;
        ctx.beginPath();
        ctx.arc(x, y, rx + 7, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      ctx.beginPath();
      if (n.kind === "expert") {
        // rounded square for specialist models
        const s = rx;
        roundedRect(ctx, x - s, y - s * 0.78, s * 2, s * 1.56, 4);
      } else if (n.kind === "core") {
        ctx.arc(x, y, rx, 0, Math.PI * 2);
      } else {
        roundedRect(ctx, x - rx, y - rx * 0.7, rx * 2, rx * 1.4, 3);
      }
      ctx.fillStyle = C.surface;
      ctx.fill();
      ctx.strokeStyle = colour;
      ctx.lineWidth = lit || isGateFail ? 1.8 : 1;
      ctx.stroke();

      // core nodes get an inner mark
      if (n.kind === "core") {
        ctx.fillStyle = colour;
        ctx.globalAlpha = lit || isGateFail ? 0.95 : 0.4;
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      ctx.font = `${lit ? 600 : 500} 8.5px ${"JetBrains Mono, ui-monospace, monospace"}`;
      ctx.fillStyle = lit || isGateFail ? C.textPrimary : C.textMuted;
      const tw = ctx.measureText(n.label).width;
      const ly = n.kind === "expert" ? y - rx - 7 : y + rx + 9;
      ctx.fillText(n.label, x - tw / 2, ly);
    }
    ctx.textBaseline = "alphabetic";

    // ── status line ────────────────────────────────────────────────────
    const detected = { noise: "noise", motion: "rigid motion", recon: "undersampling" }[branch];
    ctx.font = `600 9px ${"JetBrains Mono, ui-monospace, monospace"}`;
    ctx.fillStyle = p < 0.2 ? C.comment : accent;
    ctx.fillText(
      p < 0.2 ? "analysing degradation…" : `detected: ${detected} → dispatch`,
      4,
      11
    );
    if (p > 0.7) {
      ctx.fillStyle = rejected ? C.keyword : C.green;
      const msg = rejected ? "QC: below threshold — retry" : "QC: pass";
      ctx.fillText(msg, 4, h - 3);
    }
  };

  // open and settle mid-dispatch, so a packet and a lit branch are visible
  const ref = useCanvasAnimation(draw, { fps: 30, staticTime: 2.1, startAt: 1.2 });

  return (
    <canvas
      ref={ref}
      role="img"
      aria-label="Animated diagram of the AgentMRI pipeline: a vision-language router classifies the degradation in the input k-space, dispatches it to a denoising, motion-correction or reconstruction specialist model, and a quality-control gate either accepts the result or sends it back for another pass."
      style={{ width: "100%", height, display: "block" }}
    />
  );
}
