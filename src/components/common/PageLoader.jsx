"use client";

import { useEffect, useState } from "react";

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 900);
    const removeTimer = setTimeout(() => setVisible(false), 1300);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
      style={{
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.4s ease-in-out",
        pointerEvents: fadeOut ? "none" : "all",
      }}
    >
      {/* White base with soft colour blobs bleeding through */}
      <div className="absolute inset-0 bg-white" />

      {/* Soft colour blobs */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-brand/15 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sun/20 blur-3xl" />

      {/* Subtle noise / grain overlay for texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
        }}
      />

      {/* Glass card */}
      <div className="relative z-10 flex flex-col items-center gap-6 rounded-3xl border border-white/80 bg-white/60 px-12 py-10 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.12)] backdrop-blur-2xl">

        {/* Spinning ring + logo */}
        <div className="relative flex items-center justify-center">
          <svg
            className="absolute h-24 w-24 animate-spin"
            style={{ animationDuration: "1.4s" }}
            viewBox="0 0 96 96"
            fill="none"
          >
            <circle cx="48" cy="48" r="44" stroke="oklch(0.62 0.21 252)" strokeOpacity="0.15" strokeWidth="3.5" />
            <path
              d="M48 4 A44 44 0 0 1 92 48"
              stroke="oklch(0.62 0.21 252)"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </svg>
          <img
            src="/assets/cassio-logo.jpg"
            alt="Cassio Dry Cleaners"
            className="h-16 w-16 rounded-full shadow-soft ring-4 ring-white"
          />
        </div>

        {/* Brand name */}
        <div className="text-center">
          <p className="font-display text-2xl font-bold tracking-tight text-navy">
            Cassio Dry Cleaners
          </p>
          <p className="mt-1 text-sm text-muted-foreground">Premium garment care</p>
        </div>

        {/* Progress bar */}
        <div className="h-1 w-44 overflow-hidden rounded-full bg-black/8">
          <div
            className="h-full rounded-full bg-primary"
            style={{ animation: "loader-progress 1s ease-out forwards" }}
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
