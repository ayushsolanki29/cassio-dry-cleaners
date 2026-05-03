"use client";

import { useEffect, useState } from "react";

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade-out after page is ready
    const fadeTimer = setTimeout(() => setFadeOut(true), 800);
    // Remove from DOM after fade completes
    const removeTimer = setTimeout(() => setVisible(false), 1200);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-primary"
      style={{
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.4s ease-in-out",
        pointerEvents: fadeOut ? "none" : "all",
      }}
    >
      {/* Logo + brand */}
      <div className="flex flex-col items-center gap-5">
        {/* Spinning ring around logo */}
        <div className="relative flex items-center justify-center">
          {/* Outer spinning ring */}
          <svg
            className="absolute h-24 w-24 animate-spin"
            style={{ animationDuration: "1.4s" }}
            viewBox="0 0 96 96"
            fill="none"
          >
            <circle
              cx="48" cy="48" r="44"
              stroke="white"
              strokeOpacity="0.15"
              strokeWidth="4"
            />
            <path
              d="M48 4 A44 44 0 0 1 92 48"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>

          {/* Logo */}
          <img
            src="/assets/cassio-logo.jpg"
            alt="Cassio Dry Cleaners"
            className="h-16 w-16 rounded-full ring-2 ring-white/30"
          />
        </div>

        {/* Brand name */}
        <div className="text-center">
          <p className="font-display text-2xl font-bold tracking-tight text-white">
            Cassio Dry Cleaners
          </p>
          <p className="mt-1 text-sm text-white/60">Premium garment care</p>
        </div>

        {/* Progress bar */}
        <div className="mt-2 h-1 w-48 overflow-hidden rounded-full bg-white/20">
          <div
            className="h-full rounded-full bg-brand"
            style={{
              animation: "loader-progress 0.9s ease-out forwards",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes loader-progress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
}
