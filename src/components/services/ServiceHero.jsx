"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const services = [
  { name: "Dry Cleaning",    slug: "dry-cleaning",  image: "/assets/service-drycleaning.jpg" },
  { name: "Wash & Fold",     slug: "wash-fold",     image: "/assets/service-washfold.jpg" },
  { name: "Ironing",         slug: "ironing",       image: "/assets/service-ironing.jpg" },
  { name: "Premium Care",    slug: "premium-care",  image: "/assets/service-premium.jpg" },
  { name: "Wedding Dresses", slug: "wedding-dress", image: "/assets/service-premium.jpg" },
  { name: "Home Textiles",   slug: "curtains-home", image: "/assets/section-towels.jpg" },
];

const INTERVAL = 3500;
const FADE_DUR  = 0.85;

export function ServiceHero() {
  const [current,  setCurrent]  = useState(0);
  const [previous, setPrevious] = useState(null);
  const timerRef = useRef(null);

  const advance = () => {
    setCurrent((prev) => {
      const next = (prev + 1) % services.length;
      setPrevious(prev);
      return next;
    });
  };

  useEffect(() => {
    timerRef.current = setInterval(advance, INTERVAL);
    return () => clearInterval(timerRef.current);
  }, []);

  const goTo = (i) => {
    clearInterval(timerRef.current);
    setPrevious(current);
    setCurrent(i);
    timerRef.current = setInterval(advance, INTERVAL);
  };

  return (
    <section className="relative overflow-hidden bg-white text-foreground">

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[oklch(0.97_0.02_250)] to-[oklch(0.95_0.03_85)]" />
      <div className="pointer-events-none absolute -left-32 -top-16 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0  h-96 w-96 rounded-full bg-brand/8  blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-sun/15 blur-3xl" />

      {/* ── Centered text block ── */}
      <div className="relative mx-auto max-w-4xl px-5 pb-8 pt-28 text-center md:pb-10 md:pt-36">

        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary md:text-sm"
        >
          <svg className="h-3 w-3 shrink-0 fill-primary" viewBox="0 0 24 24">
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
          </svg>
          <span className="whitespace-nowrap">Our Services</span>
        </motion.span>

        {/* Headline */}
        <h1 className="mt-5 font-display font-semibold leading-tight text-[2.2rem] md:text-6xl lg:text-7xl">
          {/* Line 1 */}
          <span className="block overflow-hidden">
            <motion.span className="block text-navy"
              initial={{ y: "100%" }} animate={{ y: 0 }}
              transition={{ duration: 0.65, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
            >
              Expert care for
            </motion.span>
          </span>

          {/* Line 2 — animated service name */}
          <span className="block overflow-hidden">
            <motion.span className="relative block h-[1.25em]"
              initial={{ y: "100%" }} animate={{ y: 0 }}
              transition={{ duration: 0.65, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={services[current].name}
                  className="absolute inset-0 text-primary"
                  initial={{ y: "40%", opacity: 0, filter: "blur(6px)" }}
                  animate={{ y: 0,     opacity: 1, filter: "blur(0px)" }}
                  exit={{   y: "-40%", opacity: 0, filter: "blur(6px)" }}
                  transition={{ duration: FADE_DUR, ease: "easeInOut" }}
                >
                  {services[current].name}
                </motion.span>
              </AnimatePresence>
            </motion.span>
          </span>
        </h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-5 max-w-xl text-sm text-foreground/65 md:text-lg md:text-foreground/70"
        >
          From everyday laundry to luxury couture — eco-friendly care with free pickup &amp; delivery across Watford.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.84, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#services-grid"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-pop transition hover:scale-105 md:px-8 md:py-4 md:text-base"
          >
            View all services
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="/contact"
            className="rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-navy shadow-soft transition hover:bg-secondary md:px-8 md:py-4 md:text-base"
          >
            Contact us
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.96, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {[
            { value: "8+",   label: "Services" },
            { value: "5K+",  label: "Happy customers" },
            { value: "4.9★", label: "Google rating" },
            { value: "24h",  label: "Turnaround" },
          ].map((s, i) => (
            <div key={s.label} className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 shadow-soft">
              <span className="font-display text-base font-bold text-primary">{s.value}</span>
              <span className="text-xs text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Image strip — auto-scroll marquee ── */}
      <motion.div
        initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
        className="relative py-4 pb-14"
      >
        {/* Fade left/right only */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent md:w-24" />

        {/* Marquee track */}
        <div className="overflow-visible">
          <div
            className="flex gap-3 md:gap-4"
            style={{
              width: "max-content",
              animation: "services-scroll 22s linear infinite",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
            onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
          >
            {[...services, ...services].map((s, i) => (
              <Link
                href={`/services/${s.slug}`}
                key={i}
                onMouseEnter={() => goTo(i % services.length)}
                className={`group relative h-40 w-48 shrink-0 overflow-hidden rounded-2xl shadow-soft transition-all duration-300 md:h-52 md:w-64 ${
                  (i % services.length) === current
                    ? "scale-[1.04] shadow-card"
                    : "opacity-65 hover:opacity-100 hover:scale-[1.02] hover:shadow-card"
                }`}
              >
                <img
                  src={s.image} alt={s.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/75 to-transparent px-3 pb-3 pt-8">
                  <p className="font-display text-xs font-semibold text-white md:text-sm">{s.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  );
}
