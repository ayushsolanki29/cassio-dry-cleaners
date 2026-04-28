"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function ServiceHero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/assets/service-drycleaning.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/90" />

      {/* Floating decorative blobs */}
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-brand/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-10 h-80 w-80 rounded-full bg-sun/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 text-center lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-4xl space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur">
            <Sparkles className="h-4 w-4 text-sun" />
            Cassio Dry Cleaners — Premium garment care
          </span>

          <h1 className="font-display text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
            Professional garment care
            <br />
            for <span className="text-cream">every fabric</span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-white/85">
            From everyday laundry to luxury couture, Cassio Dry Cleaners delivers expert cleaning with eco-friendly care. Free pickup & delivery across London in 24-48 hours.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#services-grid"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-semibold text-brand-foreground shadow-pop transition hover:scale-105"
            >
              View all services
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/contact"
              className="rounded-full bg-white/15 px-7 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white/25"
            >
              Contact us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
