"use client";

import { useEffect, useRef, useState } from "react";
import { Clock3, Leaf, ShieldCheck, Shirt } from "lucide-react";

const guarantees = [
  { Icon: ShieldCheck, title: "100% Satisfaction", desc: "Not happy? We'll re-clean it free.", bg: "bg-mint" },
  { Icon: Clock3, title: "On-time Promise", desc: "Late delivery? Get 20% off your next order.", bg: "bg-sun" },
  { Icon: Leaf, title: "Eco Guarantee", desc: "Non-toxic detergents, safe for skin.", bg: "bg-cream" },
  { Icon: Shirt, title: "Premium Care", desc: "Expert stain treatment and hand-finished pressing.", bg: "bg-lilac" },
];

const AUTO_INTERVAL = 3000;

export function Guarantee() {
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);
  const timerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  // ── auto-advance ──
  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % guarantees.length;
        scrollToIndex(next);
        return next;
      });
    }, AUTO_INTERVAL);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const scrollToIndex = (i) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[i];
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
  };

  const goTo = (i) => {
    setActive(i);
    scrollToIndex(i);
    startTimer(); // reset timer on manual interaction
  };

  // ── drag / swipe ──
  const onPointerDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
    scrollStart.current = trackRef.current.scrollLeft;
    trackRef.current.setPointerCapture(e.pointerId);
    clearInterval(timerRef.current);
  };

  const onPointerMove = (e) => {
    if (!isDragging.current) return;
    const dx = startX.current - e.clientX;
    trackRef.current.scrollLeft = scrollStart.current + dx;
  };

  const onPointerUp = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const dx = startX.current - e.clientX;
    if (Math.abs(dx) > 40) {
      const next = dx > 0
        ? Math.min(active + 1, guarantees.length - 1)
        : Math.max(active - 1, 0);
      goTo(next);
    } else {
      scrollToIndex(active);
      startTimer();
    }
  };

  // sync active dot on native scroll (touch)
  const onScroll = () => {
    const track = trackRef.current;
    if (!track || isDragging.current) return;
    const cardWidth = track.children[0]?.offsetWidth ?? 0;
    if (cardWidth === 0) return;
    const i = Math.round(track.scrollLeft / cardWidth);
    setActive(Math.min(i, guarantees.length - 1));
  };

  return (
    <section className="bg-secondary py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Our promise</span>
          <h2 className="mt-3 font-display text-2xl font-semibold text-navy md:text-5xl">
            Backed by guarantees you can trust
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
            Every order is covered by our quality promise, so you can relax.
          </p>
        </div>

        {/* ── Mobile slider — shows ~2 cards at once ── */}
        <div className="md:hidden">
          <div
            ref={trackRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onScroll={onScroll}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
          >
            {guarantees.map((g) => (
              <div
                key={g.title}
                className="snap-start shrink-0 w-[72vw] rounded-3xl bg-white p-6 shadow-soft select-none"
              >
                <div className={`mb-4 grid h-12 w-12 place-items-center rounded-2xl ${g.bg} text-brand`}>
                  <g.Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-navy">{g.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{g.desc}</p>
              </div>
            ))}
          </div>

          {/* dot indicators */}
          <div className="mt-4 flex justify-center gap-2">
            {guarantees.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="h-1.5 rounded-full bg-navy transition-all duration-300"
                style={{ width: i === active ? "1.5rem" : "0.375rem", opacity: i === active ? 1 : 0.25 }}
                aria-label={`Go to ${guarantees[i].title}`}
              />
            ))}
          </div>
        </div>

        {/* ── Desktop grid ── */}
        <div className="hidden md:grid mx-auto max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {guarantees.map((g) => (
            <div key={g.title} className="group rounded-3xl bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-card">
              <div className={`mb-5 grid h-14 w-14 place-items-center rounded-2xl ${g.bg} text-brand transition group-hover:scale-110`}>
                <g.Icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-semibold text-navy">{g.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{g.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
