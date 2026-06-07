"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Clock, ShieldCheck } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const services = [
  { name: "Dry Cleaning", image: "https://server.speedylaundry.co.uk/cdn/uploads/images/6a21c99d32de3.jpeg" },
  { name: "Wash & Fold",  image: "https://server.speedylaundry.co.uk/cdn/uploads/images/6a21c9b0d8c84.jpeg" },
  { name: "Ironing",      image: "https://server.speedylaundry.co.uk/cdn/uploads/images/6a21c9bc5bbcd.jpeg" },
  { name: "Premium Care", image: "https://server.speedylaundry.co.uk/cdn/uploads/images/6a21c9cf831ab.jpeg" },
];

const INTERVAL = 4000;
const FADE_DURATION = 0.9;

// Shared fade-up variant — each element just sets its own delay
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: 0.35 + delay, ease: [0.22, 1, 0.36, 1] },
});

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState(null);
  const [fading, setFading] = useState(false);
  const timerRef = useRef(null);

  const advance = () => {
    setCurrent((prev) => {
      const next = (prev + 1) % services.length;
      setPrevious(prev);
      setFading(true);
      return next;
    });
  };

  useEffect(() => {
    timerRef.current = setInterval(advance, INTERVAL);
    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (!fading) return;
    const t = setTimeout(() => { setPrevious(null); setFading(false); }, FADE_DURATION * 1000 + 100);
    return () => clearTimeout(t);
  }, [fading, current]);

  return (
    <section className="relative overflow-hidden bg-white text-foreground">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[oklch(0.97_0.02_250)] to-[oklch(0.95_0.03_85)]" />
        {services.map((s, i) => (
          <div key={s.image} className="absolute inset-0 bg-cover bg-center transition-opacity"
            style={{ backgroundImage: `url('${s.image}')`, opacity: i === current ? 0.04 : 0, transitionDuration: `${FADE_DURATION}s` }} />
        ))}
      </div>

      {/* Blobs */}
      <div className="pointer-events-none absolute -left-32 -top-16 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-sun/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-6 px-5 pb-10 pt-28 md:grid-cols-[1.08fr_0.92fr] md:gap-10 md:pb-14 md:pt-28 lg:gap-12 lg:pb-16 lg:pt-32">

        {/* ── Left: text ── */}
        <div className="space-y-4 md:space-y-6">

          {/* Badge */}
          <motion.span
            {...fadeUp(0.05)}
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary md:text-sm"
          >
            <svg className="h-3 w-3 shrink-0 fill-primary md:h-3.5 md:w-3.5" viewBox="0 0 24 24">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
            </svg>
            <span className="whitespace-nowrap">Best Dry Cleaners in Watford</span>
          </motion.span>

          {/* Heading */}
          <h1 className="font-display font-semibold leading-tight text-[2.4rem] md:text-6xl lg:text-7xl">
            {/* Line 1 — clips up from below */}
            <span className="block overflow-hidden">
              <motion.span
                className="block text-navy"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.65, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="md:hidden">Expert Laundry &amp;</span>
                <span className="hidden md:inline">Professional Laundry &amp;</span>
              </motion.span>
            </span>

            {/* Line 2 — animated service name */}
            <span className="block overflow-hidden">
              <motion.span
                className="relative block h-[1.2em]"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.65, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={services[current].name}
                    className="absolute inset-0 text-primary"
                    initial={{ y: "40%", opacity: 0, filter: "blur(6px)" }}
                    animate={{ y: 0,     opacity: 1, filter: "blur(0px)" }}
                    exit={{   y: "-40%", opacity: 0, filter: "blur(6px)" }}
                    transition={{ duration: FADE_DURATION, ease: "easeInOut" }}
                  >
                    {services[current].name}
                  </motion.span>
                </AnimatePresence>
              </motion.span>
            </span>
          </h1>

          {/* Subheading */}
          <motion.p {...fadeUp(0.42)} className="max-w-xl text-sm text-foreground/65 md:hidden">
            Free pickup &amp; delivery in 24h across Watford. Trusted by 5K+ happy customers.
          </motion.p>
          <motion.p {...fadeUp(0.42)} className="hidden max-w-xl text-lg text-foreground/70 md:block">
            Fast, eco-friendly garment care with free pickup &amp; delivery in 24 hours across Watford. Loved by 5K+ happy customers.
          </motion.p>

          {/* Buttons */}
          <motion.div {...fadeUp(0.54)} className="flex flex-wrap items-center gap-3">
            <a href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-pop transition hover:scale-105 md:px-7 md:py-4 md:text-base"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="/services"
              className="rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold text-navy shadow-soft transition hover:bg-secondary md:px-7 md:py-4 md:text-base"
            >
              Explore services
            </a>
          </motion.div>

          {/* Google rating */}
          <motion.div
            {...fadeUp(0.66)}
            className="inline-flex items-center gap-2.5 rounded-full border border-border bg-white px-4 py-2 shadow-soft md:px-5 md:py-2.5"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-soft md:h-7 md:w-7">
              <svg viewBox="0 0 48 48" className="h-3.5 w-3.5 md:h-4 md:w-4">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
              </svg>
            </div>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-3.5 w-3.5 md:h-4 md:w-4" viewBox="0 0 24 24" fill="#FFC107">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-bold text-navy md:text-base">4.9/5</span>
          </motion.div>
        </div>

        {/* ── Right: image ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm md:max-w-none"
        >
          <div className="relative z-10 h-[260px] w-full overflow-hidden rounded-2xl md:h-[500px] md:rounded-3xl">
            {services.map((s, i) => (
              <img key={s.image} src={s.image} alt={s.name}
                className="absolute inset-0 h-full w-full object-cover transition-opacity"
                style={{
                  opacity: i === current ? 1 : 0,
                  transitionDuration: `${FADE_DURATION}s`,
                  transitionTimingFunction: "ease-in-out",
                  zIndex: i === current ? 2 : i === previous ? 1 : 0,
                }}
              />
            ))}
            <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl shadow-[inset_0_0_40px_rgba(0,0,0,0.18)] md:rounded-3xl" />
          </div>

          {/* Chip — top left */}
          <motion.div
            initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -left-3 top-6 z-20 hidden rounded-2xl bg-white p-3 shadow-pop sm:flex md:-left-4 md:p-4"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-mint text-brand md:h-10 md:w-10">
                <Clock className="h-4 w-4 md:h-5 md:w-5" />
              </div>
              <div className="text-foreground">
                <p className="text-xs text-muted-foreground">Best in Watford</p>
                <p className="font-display text-sm font-semibold md:text-base">24h Express Service</p>
              </div>
            </div>
          </motion.div>

          {/* Chip — bottom right */}
          <motion.div
            initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -right-3 bottom-8 z-20 hidden rounded-2xl bg-white p-3 shadow-pop sm:flex md:-right-4 md:p-4"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-sun text-brand md:h-10 md:w-10">
                <ShieldCheck className="h-4 w-4 md:h-5 md:w-5" />
              </div>
              <div className="text-foreground">
                <p className="text-xs text-muted-foreground">Premium Quality</p>
                <p className="font-display text-sm font-semibold md:text-base">Eco-Friendly Care</p>
              </div>
            </div>
          </motion.div>

          {/* Progress dots */}
          <div className="absolute -bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-1.5 md:-bottom-6 md:gap-2">
            {services.map((_, i) => (
              <button key={i}
                onClick={() => {
                  clearInterval(timerRef.current);
                  setPrevious(current); setFading(true); setCurrent(i);
                  timerRef.current = setInterval(advance, INTERVAL);
                }}
                className="h-1.5 rounded-full bg-primary transition-all duration-300"
                style={{ width: i === current ? "1.5rem" : "0.375rem", opacity: i === current ? 1 : 0.35 }}
                aria-label={`Go to ${services[i].name}`}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
