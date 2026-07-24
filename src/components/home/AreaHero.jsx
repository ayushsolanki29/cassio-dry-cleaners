"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function AreaHero({ areaName }) {
  return (
    <section className="relative overflow-hidden bg-white text-foreground pb-16 pt-32 md:pb-24 md:pt-40">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[oklch(0.97_0.02_250)] to-[oklch(0.95_0.03_85)]" />
      
      {/* Blobs */}
      <div className="pointer-events-none absolute -left-32 -top-16 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-5 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary md:text-sm mb-6"
        >
          <span className="whitespace-nowrap">Premium Local Service</span>
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-4xl font-semibold leading-tight text-navy md:text-6xl lg:text-7xl mb-6"
        >
          Best Dry Cleaners & Laundry in <span className="text-primary capitalize">{areaName}</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto max-w-2xl text-lg text-foreground/70 mb-10"
        >
          Fast, eco-friendly garment care with free pickup & delivery in 24 hours across {areaName}. Loved by thousands of happy customers.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-white shadow-pop transition hover:scale-105">
            Schedule Pickup
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="/services" className="rounded-full border border-border bg-white px-7 py-4 text-base font-semibold text-navy shadow-soft transition hover:bg-secondary">
            Explore Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}
