// src/components/Reveal.jsx
//
// Scroll-triggered fade/rise. Pure CSS transition driven by one
// IntersectionObserver — no animation library, and it degrades to "just
// visible" under prefers-reduced-motion rather than animating.
//
// Safety principle: this is a progressive enhancement, so content must never
// end up permanently invisible because the observer didn't fire. Both the
// missing-API case and the never-fired case fall back to showing the content.

import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import { prefersReducedMotion } from "../lib/useCanvasAnimation";

const FAILSAFE_MS = 1200;

export default function Reveal({ children, delay = 0, y = 14, sx = {} }) {
  const reduce = prefersReducedMotion();
  const supported =
    typeof window !== "undefined" && typeof window.IntersectionObserver === "function";

  // Start visible when we cannot (or should not) animate, so the content is
  // never gated behind an observer that may never run.
  const [shown, setShown] = useState(reduce || !supported);
  const ref = useRef(null);

  useEffect(() => {
    if (reduce || !supported) return undefined;
    const el = ref.current;
    if (!el) return undefined;

    let done = false;
    const show = () => {
      if (done) return;
      done = true;
      setShown(true);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          show();
          io.disconnect(); // reveal once; don't re-hide on scroll back
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);

    // Failsafe: if the observer has not reported anything by now (very old
    // engines, odd embedding contexts, headless renderers), show regardless.
    const timer = window.setTimeout(() => {
      show();
      io.disconnect();
    }, FAILSAFE_MS);

    return () => {
      io.disconnect();
      window.clearTimeout(timer);
    };
  }, [reduce, supported]);

  return (
    <Box
      ref={ref}
      sx={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : `translateY(${y}px)`,
        transition: reduce
          ? "none"
          : `opacity 520ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 520ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        willChange: shown ? "auto" : "opacity, transform",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
