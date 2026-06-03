"use client";

import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { FadeUp } from "@/components/common/Animate";
import { googleReviews } from "@/data/reviewsData";

// Duplicate for seamless loop
const allTestimonials = [...googleReviews, ...googleReviews, ...googleReviews];

export function ServiceTestimonials() {
  const [paused, setPaused] = useState(false);
  const trackRef = useRef(null);

  const nudge = (dir) => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: dir * 260, behavior: "smooth" });
  };

  return (
    <section className="bg-cream py-12 md:py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <FadeUp className="mb-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Testimonials</span>
          <h2 className="mt-3 font-display text-2xl font-semibold text-navy md:text-5xl">
            Loved by 5000+ Watforders
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground md:text-lg">
            Don't just take our word for it — hear what our customers say about Cassio Dry Cleaners.
          </p>
        </FadeUp>
      </div>

      {/* Full-width slider — outside the padded container so cards bleed to edges */}
      <div className="relative mt-2">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-cream to-transparent md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-cream to-transparent md:w-24" />

        {/* Arrow buttons — desktop only */}
        <button
          onClick={() => nudge(-1)}
          className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white p-2.5 shadow-card transition hover:scale-110 hover:bg-brand hover:text-white md:flex"
          aria-label="Previous"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => nudge(1)}
          className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white p-2.5 shadow-card transition hover:scale-110 hover:bg-brand hover:text-white md:flex"
          aria-label="Next"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Scrolling track — pause via animation-play-state, NOT class toggle */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            ref={trackRef}
            className="flex gap-4 px-6"
            style={{
              width: "max-content",
              animation: "testimonials-scroll 90s linear infinite",
              animationPlayState: paused ? "paused" : "running",
            }}
          >
            {allTestimonials.map((t, i) => (
              <div
                key={i}
                className="w-[260px] shrink-0 rounded-2xl border border-border bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-card"
              >
                <div className="flex items-center gap-3">
                  {t.image ? (
                    <img
                      src={t.image}
                      alt={t.name}
                      className="h-9 w-9 rounded-full object-cover"
                    />
                  ) : (
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand/10 text-brand font-semibold shadow-soft">
                      {t.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="font-display text-sm font-semibold text-navy truncate">{t.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{t.role || t.location}</p>
                  </div>
                </div>

                <div className="mt-3 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-sun text-sun" />
                  ))}
                </div>

                <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground line-clamp-4">
                  {t.quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
