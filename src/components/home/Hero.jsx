"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, ShieldCheck } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const services = [
  { name: "Dry Cleaning",  image: "/assets/service-drycleaning.jpg" },
  { name: "Laundry",       image: "/assets/service-washfold.jpg"    },
  { name: "Ironing",       image: "/assets/service-ironing.jpg"     },
  { name: "Premium Care",  image: "/assets/service-premium.jpg"     },
];

const INTERVAL = 4000;
const FADE_DURATION = 1.0; // seconds — crossfade length

export function Hero() {
  const [current, setCurrent]   = useState(0);
  const [previous, setPrevious] = useState(null);
  const [fading, setFading]     = useState(false);
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

  // Once crossfade finishes, clear the previous layer
  useEffect(() => {
    if (!fading) return;
    const t = setTimeout(() => {
      setPrevious(null);
      setFading(false);
    }, FADE_DURATION * 1000 + 100);
    return () => clearTimeout(t);
  }, [fading, current]);

  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">

      {/* ── Background image layer (very subtle, always the current) ── */}
      <div className="absolute inset-0">
        {services.map((s, i) => (
          <div
            key={s.image}
            className="absolute inset-0 bg-cover bg-center transition-opacity"
            style={{
              backgroundImage: `url('${s.image}')`,
              opacity: i === current ? 0.18 : 0,
              transitionDuration: `${FADE_DURATION}s`,
              transitionTimingFunction: "ease-in-out",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/75 to-primary/90" />
      </div>

      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-brand/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-10 h-80 w-80 rounded-full bg-sun/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-6 pb-12 pt-24 md:grid-cols-[1.08fr_0.92fr] md:gap-10 lg:gap-12 lg:pb-16 lg:pt-28">

        {/* ── Left: text ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur">
            <img src="/assets/cassio-logo.jpg" alt="Cassio" className="h-5 w-5 rounded-full object-cover" />
            Best Laundry Service in London | Trusted by 50k+
          </span>

          <h1 className="font-display text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
            <span className="block">Professional Laundry &amp;</span>

            {/* Animated service name — smooth blur + slide up */}
            <span className="relative block h-[1.1em] overflow-hidden">
              {services.map((s, i) => (
                <span
                  key={s.name}
                  className="absolute inset-0 text-brand transition-all"
                  style={{
                    opacity:    i === current ? 1 : 0,
                    transform:  i === current ? "translateY(0)   blur(0px)"
                              : i === previous ? "translateY(-40%) blur(0px)"
                              : "translateY(40%)  blur(0px)",
                    filter:     i === current ? "blur(0px)"
                              : i === previous ? "blur(6px)"
                              : "blur(6px)",
                    transitionDuration:       `${FADE_DURATION}s`,
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  {s.name}
                </span>
              ))}
            </span>
          </h1>

          <p className="max-w-xl text-lg text-white/85">
            Fast, eco-friendly garment care with free pickup &amp; delivery in 24 hours
            across London. Loved by 50,000+ happy customers.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-semibold text-white shadow-pop transition hover:scale-105"
            >
              Schedule pickup
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/services"
              className="rounded-full bg-white/15 px-7 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white/25"
            >
              Explore services
            </a>
          </div>

          {/* Google rating */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-3 rounded-full bg-white/15 px-5 py-2.5 backdrop-blur"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
              <svg viewBox="0 0 48 48" className="h-4 w-4">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-4 w-4" viewBox="0 0 24 24" fill="#FFC107">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              ))}
            </div>
            <span className="text-base font-bold text-white">4.9/5</span>
          </motion.div>
        </motion.div>

        {/* ── Right: image crossfade ── */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative z-10 mx-auto h-[500px] w-full overflow-hidden rounded-3xl">

            {/* All images stacked; CSS transition handles the crossfade */}
            {services.map((s, i) => (
              <img
                key={s.image}
                src={s.image}
                alt={s.name}
                className="absolute inset-0 h-full w-full object-cover transition-opacity"
                style={{
                  opacity:                  i === current ? 1 : 0,
                  transitionDuration:       `${FADE_DURATION}s`,
                  transitionTimingFunction: "ease-in-out",
                  zIndex:                   i === current ? 2 : i === previous ? 1 : 0,
                }}
              />
            ))}

            {/* Subtle inner vignette */}
            <div className="pointer-events-none absolute inset-0 z-10 rounded-3xl shadow-[inset_0_0_60px_rgba(0,0,0,0.25)]" />
          </div>

          {/* Floating chip — top left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute -left-2 top-8 z-20 rounded-2xl bg-white p-3 shadow-pop sm:-left-4 sm:p-4"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-mint text-brand">
                <Clock className="h-5 w-5" />
              </div>
              <div className="text-foreground">
                <p className="text-xs text-muted-foreground">Best in London</p>
                <p className="font-display font-semibold">24h Express Service</p>
              </div>
            </div>
          </motion.div>

          {/* Floating chip — bottom right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute -right-2 bottom-10 z-20 rounded-2xl bg-white p-3 shadow-pop sm:-right-4 sm:p-4"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-sun text-brand">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="text-foreground">
                <p className="text-xs text-muted-foreground">Premium Quality</p>
                <p className="font-display font-semibold">Eco-Friendly Care</p>
              </div>
            </div>
          </motion.div>

          {/* Progress dots */}
          <div className="absolute -bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  clearInterval(timerRef.current);
                  setPrevious(current);
                  setFading(true);
                  setCurrent(i);
                  timerRef.current = setInterval(advance, INTERVAL);
                }}
                className="h-1.5 rounded-full bg-white transition-all duration-300"
                style={{ width: i === current ? "2rem" : "0.375rem", opacity: i === current ? 1 : 0.4 }}
                aria-label={`Go to ${services[i].name}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
