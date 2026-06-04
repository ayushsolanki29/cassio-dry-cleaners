"use client";

import { useEffect } from "react";

export function PageLoader() {
  useEffect(() => {
    const el = document.getElementById("inline-loader");
    if (!el) return;

    // Fade out and remove the inline loader once React has hydrated
    el.style.transition = "opacity 0.35s ease";
    el.style.opacity = "0";
    const t = setTimeout(() => el.remove(), 380);
    return () => clearTimeout(t);
  }, []);

  return null;
}
