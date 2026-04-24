"use client";

import { motion } from "framer-motion";
import { ArrowRight, Leaf, Star, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: "url('/assets/hero-woman.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-primary/85" />

      {/* Floating decorative blobs */}
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-brand/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-10 h-80 w-80 rounded-full bg-sun/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-6 pb-12 pt-10 md:grid-cols-[1.08fr_0.92fr] md:gap-10 lg:gap-12 lg:pb-16 lg:pt-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-sun" />
            Now serving London | 24h delivery
          </span>

          <h1 className="font-display text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
            Premium dry cleaning,
            <br />
            picked up at your{" "}
            <span className="text-cream">door.</span>
          </h1>

          <p className="max-w-xl text-lg text-white/85">
            Fast, eco-friendly garment care with free pickup &amp; delivery in 24 hours across London. Loved by 50,000+ happy customers.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#book"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-semibold text-brand-foreground shadow-pop transition hover:scale-105"
            >
              Book pickup
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="rounded-full bg-white/15 px-7 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white/25"
            >
              Explore services
            </a>
          </div>

          <div className="flex items-center gap-5 pt-2 text-sm text-white/90">
            <div className="flex -space-x-2">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="h-9 w-9 rounded-full border-2 border-primary bg-gradient-to-br from-cream to-brand" />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-sun">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p>Rated <strong>4.9/5</strong> | 12,400 reviews</p>
            </div>
          </div>
        </motion.div>

        {/* Right: image, unified with the hero, no card/box feel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="blob absolute inset-0 -z-0 bg-cream/90" />
          <img
            src="/assets/hero-woman.jpg"
            alt="Happy London customer with freshly cleaned laundry"
            width={1280}
            height={1280}
            className="relative z-10 mx-auto w-full object-contain"
          />

          {/* Floating booking chip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute -left-2 top-8 z-20 rounded-2xl bg-white p-3 shadow-pop sm:-left-4 sm:p-4"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-mint text-brand">
                <Zap className="h-5 w-5" />
              </div>
              <div className="text-foreground">
                <p className="text-xs text-muted-foreground">Earliest pickup</p>
                <p className="font-display font-semibold">Today, 12:00 - 15:00</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute -right-2 bottom-10 z-20 rounded-2xl bg-white p-3 shadow-pop sm:-right-4 sm:p-4"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-sun text-brand">
                <Leaf className="h-5 w-5" />
              </div>
              <div className="text-foreground">
                <p className="text-xs text-muted-foreground">100% eco-friendly</p>
                <p className="font-display font-semibold">Safe for delicate fabrics</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


