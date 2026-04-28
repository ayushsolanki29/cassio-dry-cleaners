"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";

export function ServiceHero() {
  return (
    <section className="relative flex h-screen items-center overflow-hidden bg-navy text-white">
      {/* Background Image with Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/service-drycleaning.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-primary/90 to-navy/95" />

      {/* Decorative Elements */}
      <div className="pointer-events-none absolute -left-20 top-20 h-96 w-96 rounded-full bg-brand/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-sun/20 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-8">
        <div className="grid h-full items-center gap-8 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-md">
                <Sparkles className="h-4 w-4 text-sun" />
                Cassio Dry Cleaners
              </span>
            </div>

            <h1 className="font-display text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
              Professional garment care
              <br />
              for <span className="text-sun">every fabric</span>
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-white/85">
              From everyday laundry to luxury couture, Cassio delivers expert cleaning with eco-friendly care. Free pickup & delivery across London.
            </p>

            {/* Quick Features */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-mint" />
                <span>24-48h delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-mint" />
                <span>Eco-friendly</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-mint" />
                <span>Expert care</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#services-grid"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-semibold text-white shadow-pop transition hover:scale-105"
              >
                View all services
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-7 py-4 text-base font-semibold backdrop-blur-md transition hover:bg-white/20"
              >
                Contact us
              </a>
            </div>
          </motion.div>

          {/* Right Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Glassmorphism Card */}
              <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl shadow-2xl">
                <img
                  src="/assets/service-premium.jpg"
                  alt="Premium garment care"
                  className="h-80 w-full rounded-2xl object-cover shadow-lg"
                />
                
                {/* Floating Stats */}
                <div className="mt-4 grid grid-cols-3 gap-3">
                  <div className="rounded-xl bg-white/10 p-3 text-center backdrop-blur-md">
                    <p className="font-display text-xl font-semibold text-sun">8+</p>
                    <p className="text-xs text-white/80">Services</p>
                  </div>
                  <div className="rounded-xl bg-white/10 p-3 text-center backdrop-blur-md">
                    <p className="font-display text-xl font-semibold text-mint">50K+</p>
                    <p className="text-xs text-white/80">Customers</p>
                  </div>
                  <div className="rounded-xl bg-white/10 p-3 text-center backdrop-blur-md">
                    <p className="font-display text-xl font-semibold text-lilac">4.9★</p>
                    <p className="text-xs text-white/80">Rating</p>
                  </div>
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -right-8 -top-8 -z-10 h-48 w-48 rounded-full bg-brand/30 blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
