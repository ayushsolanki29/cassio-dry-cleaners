"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Sparkles, Package } from "lucide-react";

export function HowItWorksHero() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden bg-cream text-navy pt-24 pb-[22rem] md:pb-40">
      
      {/* Ultra-minimal ambient blurs */}
      <div className="pointer-events-none absolute left-0 top-0 h-[50vh] w-[50vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-mint/20 blur-[100px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[50vh] w-[50vh] translate-x-1/2 translate-y-1/2 rounded-full bg-sun/20 blur-[100px]" />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 text-center">
        
        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-4"
        >
          <span className="h-[1px] w-8 bg-brand/50 md:w-12"></span>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">The Cassio Process</span>
          <span className="h-[1px] w-8 bg-brand/50 md:w-12"></span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 font-display text-5xl font-medium tracking-tight md:text-7xl lg:text-[6.5rem] leading-[1.05]"
        >
          Laundry day, <br />
          <span className="italic text-brand font-light">simplified.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-8 max-w-2xl text-base text-muted-foreground md:text-xl leading-relaxed"
        >
          From pickup to delivery, we make professional garment care completely effortless. Transform your routine in just 24 hours.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="/contact"
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-navy px-8 py-4 text-sm font-semibold text-white shadow-soft transition-all hover:scale-105 hover:bg-brand sm:w-auto md:text-base"
          >
            Schedule a pickup
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

      </div>

      {/* Sleek Bottom Process Bar (Mobile First) */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 w-full border-t border-border/60 bg-white/40 backdrop-blur-xl"
      >
        <div className="mx-auto max-w-7xl px-6 py-6 md:py-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:divide-x sm:divide-border/60">
            
            {/* Step 01 */}
            <div className="flex items-center sm:items-start gap-4 sm:px-6">
              <Calendar className="h-7 w-7 text-brand/70 stroke-[1.5]" />
              <div>
                <h3 className="font-display text-base font-bold text-navy">Book</h3>
                <p className="mt-1 text-sm text-muted-foreground">Arrange your free collection</p>
              </div>
            </div>

            {/* Step 02 */}
            <div className="flex items-center sm:items-start gap-4 border-t border-border/60 pt-6 sm:border-t-0 sm:pt-0 sm:px-6">
              <Sparkles className="h-7 w-7 text-brand/70 stroke-[1.5]" />
              <div>
                <h3 className="font-display text-base font-bold text-navy">Clean</h3>
                <p className="mt-1 text-sm text-muted-foreground">Expert eco-friendly care</p>
              </div>
            </div>

            {/* Step 03 */}
            <div className="flex items-center sm:items-start gap-4 border-t border-border/60 pt-6 sm:border-t-0 sm:pt-0 sm:px-6">
              <Package className="h-7 w-7 text-brand/70 stroke-[1.5]" />
              <div>
                <h3 className="font-display text-base font-bold text-navy">Deliver</h3>
                <p className="mt-1 text-sm text-muted-foreground">Fresh to your door in 24h</p>
              </div>
            </div>

          </div>
        </div>
      </motion.div>

    </section>
  );
}
