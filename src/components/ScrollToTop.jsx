// src/components/ScrollToTop.jsx
//
// Route changes previously kept the old scroll position, so navigating from
// the bottom of Publications to Research landed you mid-page. Reset on every
// pathname change — but honour reduced-motion by jumping rather than smoothing.

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { prefersReducedMotion } from "../lib/useCanvasAnimation";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  }, [pathname]);

  return null;
}
