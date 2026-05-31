"use client";

import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { FadeUp } from "@/components/common/Animate";

const testimonials = [
  { 
    name: "Emma Walker", 
    location: "Nascot Wood, Watford", 
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    quote: "Cassio Dry Cleaners has been a lifesaver! My silk dresses always come back perfect. The pickup service is so convenient and the team is incredibly professional.",
    rating: 5
  },
  { 
    name: "James Bennett", 
    location: "Cassiobury, Watford", 
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    quote: "I trust Cassio with all my suits and formal wear. The attention to detail is incredible, and the eco-friendly approach is a bonus. Highly recommend!",
    rating: 5
  },
  { 
    name: "Sophie Clarke", 
    location: "Croxley Green, Watford", 
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    quote: "Best dry cleaning service in Watford! Fast turnaround, excellent quality, and the team is always professional. They've never let me down.",
    rating: 5
  },
  { 
    name: "Michael Chen", 
    location: "Central Watford, Watford", 
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    quote: "As a busy professional, Cassio's pickup and delivery service is perfect. My shirts are always crisp and ready for important meetings.",
    rating: 5
  },
  { 
    name: "Sarah Johnson", 
    location: "Oxhey, Watford", 
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    quote: "Exceptional service for my designer pieces. They handle delicate fabrics with such care. The quality is consistently outstanding.",
    rating: 5
  },
  { 
    name: "David Wilson", 
    location: "Garston, Watford", 
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    quote: "Cassio saved my wedding suit! They removed a stubborn stain that other cleaners couldn't handle. True professionals with amazing results.",
    rating: 5
  }
];

// Duplicate for seamless loop
const allTestimonials = [...testimonials, ...testimonials, ...testimonials];

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
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-9 w-9 rounded-full object-cover"
                  />
                  <div className="min-w-0">
                    <p className="font-display text-sm font-semibold text-navy truncate">{t.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{t.location}</p>
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
