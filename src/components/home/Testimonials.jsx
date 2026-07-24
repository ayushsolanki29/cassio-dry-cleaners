"use client";

import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

const defaultTestimonials = [
  { name: "Emma Walker",      location: "Nascot Wood",      image: "https://randomuser.me/api/portraits/women/1.jpg",  quote: "Cassio has completely changed my weekends. My silk dresses come back perfect!", rating: 5 },
  { name: "James Bennett",    location: "Cassiobury",        image: "https://randomuser.me/api/portraits/men/1.jpg",    quote: "Used Cassio for my wedding suits - the attention to detail was incredible.", rating: 5 },
  { name: "Sophie Clarke",    location: "Croxley Green",     image: "https://randomuser.me/api/portraits/women/2.jpg",  quote: "The 24-hour turnaround is unreal. Contacted at 8pm, clothes back next evening!", rating: 5 },
  { name: "Michael Chen",     location: "Central Watford",   image: "https://randomuser.me/api/portraits/men/2.jpg",    quote: "Perfect for busy professionals. Getting in touch is so easy!", rating: 5 },
  { name: "Sarah Johnson",    location: "Oxhey",             image: "https://randomuser.me/api/portraits/women/3.jpg",  quote: "Cassio handles my designer pieces with such care. Outstanding service!", rating: 5 },
  { name: "David Wilson",     location: "Garston",           image: "https://randomuser.me/api/portraits/men/3.jpg",    quote: "Tried many dry cleaners in Watford, but Cassio is in a league of its own.", rating: 5 },
  { name: "Rachel Green",     location: "Leavesden",         image: "https://randomuser.me/api/portraits/women/4.jpg",  quote: "The eco-friendly approach is amazing. Quality and sustainability together!", rating: 5 },
  { name: "Tom Harris",       location: "Bushey",            image: "https://randomuser.me/api/portraits/men/4.jpg",    quote: "Reliable and trustworthy. Been using them for 3 years now.", rating: 5 },
  { name: "Lisa Anderson",    location: "North Watford",     image: "https://randomuser.me/api/portraits/women/5.jpg",  quote: "Free pickup and delivery is so convenient. Life-changing service!", rating: 5 },
  { name: "Oliver Smith",     location: "West Watford",      image: "https://randomuser.me/api/portraits/men/5.jpg",    quote: "Premium quality at reasonable prices. Worth every penny!", rating: 5 },
  { name: "Emily Brown",      location: "South Watford",     image: "https://randomuser.me/api/portraits/women/6.jpg",  quote: "They saved my vintage coat! The stain removal is incredible.", rating: 5 },
  { name: "Daniel Lee",       location: "East Watford",      image: "https://randomuser.me/api/portraits/men/6.jpg",    quote: "Fast, efficient, and professional. Exactly what I needed!", rating: 5 },
  { name: "Grace Taylor",     location: "Bushey Heath",      image: "https://randomuser.me/api/portraits/women/7.jpg",  quote: "The customer service is exceptional. Always helpful and friendly!", rating: 5 },
  { name: "Henry White",      location: "Rickmansworth",     image: "https://randomuser.me/api/portraits/men/7.jpg",    quote: "Best investment for my wardrobe. Clothes last longer with proper care!", rating: 5 },
  { name: "Olivia Martin",    location: "Abbots Langley",    image: "https://randomuser.me/api/portraits/women/8.jpg",  quote: "Convenient, reliable, and high quality. What more could you ask for?", rating: 5 },
];

export function Testimonials({ targetArea }) {
  const [paused, setPaused] = useState(false);
  const trackRef = useRef(null);

  // If a targetArea is provided, generate a specific testimonial for it and put it first
  const displayTestimonials = targetArea ? [
    { name: "Local Customer", location: targetArea, image: "https://randomuser.me/api/portraits/men/9.jpg", quote: `Finding a reliable dry cleaner in ${targetArea} was tough until I found Cassio. The free pickup is a lifesaver!`, rating: 5 },
    { name: "Happy Resident", location: targetArea, image: "https://randomuser.me/api/portraits/women/9.jpg", quote: `Cassio handles my delicate items perfectly. So glad they serve the ${targetArea} area.`, rating: 5 },
    ...defaultTestimonials.filter(t => !t.location.toLowerCase().includes(targetArea.toLowerCase()))
  ] : defaultTestimonials;

  // Duplicate for seamless loop
  const allTestimonials = [...displayTestimonials, ...displayTestimonials];

  const nudge = (dir) => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: dir * 260, behavior: "smooth" });
  };

  return (
    <section className="bg-cream py-12 md:py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Testimonials</span>
          <h2 className="mt-3 font-display text-2xl font-semibold text-navy md:text-5xl">
            What our customers say
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground md:text-lg">
            Join 5000+ satisfied customers who trust Cassio with their precious garments.
          </p>
        </div>

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

                <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground line-clamp-3">
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
