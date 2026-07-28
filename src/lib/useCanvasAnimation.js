// src/lib/useCanvasAnimation.js
//
// One animation harness shared by every canvas visualisation on the site so
// they all behave identically with respect to performance and accessibility:
//
//   • device-pixel-ratio aware  — crisp on Retina, capped at 2x so a 3x phone
//                                 doesn't pay for 9x the fill rate
//   • IntersectionObserver      — the loop only runs while the canvas is on
//                                 screen; scrolled-away visualisations cost 0%
//   • Page Visibility           — pauses in a background tab
//   • frame-rate cap            — these are ambient, 30fps is plenty
//   • prefers-reduced-motion    — renders ONE settled frame and never loops.
//                                 The CSS rule in index.css cannot do this;
//                                 requestAnimationFrame ignores CSS entirely.
//
// `draw` is called as draw(ctx, width, height, timeSeconds) with the context
// already scaled to CSS pixels — draw in CSS px and ignore DPR.

import { useEffect, useRef } from "react";

export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export default function useCanvasAnimation(draw, options = {}) {
  // `startAt` seeds the clock so a visualisation opens on a meaningful frame
  // instead of an empty one (e.g. k-space with no lines acquired yet).
  // `staticTime` is the single frame drawn under prefers-reduced-motion.
  const { fps = 30, staticTime = 8, startAt = 0, active = true } = options;

  const canvasRef = useRef(null);
  // Keep the newest draw callback without restarting the loop when a parent
  // re-renders with a fresh closure.
  const drawRef = useRef(draw);
  drawRef.current = draw;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return undefined;

    const reduce = prefersReducedMotion();
    const interval = 1000 / fps;

    let width = 0;
    let height = 0;
    let raf = null;
    let prevTs = null;
    let elapsed = reduce ? staticTime : startAt;
    let inView = false;

    const render = () => {
      if (width > 0 && height > 0) drawRef.current(ctx, width, height, elapsed);
    };

    const measure = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      const nextW = Math.max(1, Math.round(rect.width));
      const nextH = Math.max(1, Math.round(rect.height));
      if (nextW === width && nextH === height) return;
      width = nextW;
      height = nextH;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      render(); // keep the picture correct even while paused
    };

    const loop = (ts) => {
      raf = requestAnimationFrame(loop);
      if (prevTs === null) prevTs = ts;
      const dt = ts - prevTs;
      if (dt < interval) return;
      prevTs = ts;
      elapsed += dt / 1000;
      render();
    };

    const start = () => {
      if (reduce || !active || raf !== null) return;
      prevTs = null; // resume without a time jump
      raf = requestAnimationFrame(loop);
    };

    const stop = () => {
      if (raf !== null) {
        cancelAnimationFrame(raf);
        raf = null;
      }
      prevTs = null;
    };

    const sync = () => {
      if (inView && !document.hidden) start();
      else stop();
    };

    const ro = new ResizeObserver(measure);
    ro.observe(canvas);
    measure();

    const io = new IntersectionObserver(
      (entries) => {
        inView = entries.some((e) => e.isIntersecting);
        sync();
      },
      { rootMargin: "120px" }
    );
    io.observe(canvas);

    document.addEventListener("visibilitychange", sync);

    // Reduced motion: paint the settled frame once and stop there.
    if (reduce) render();

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, [fps, staticTime, startAt, active]);

  return canvasRef;
}
