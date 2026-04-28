"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Clock, MapPin, Shield } from "lucide-react";

export function HowItWorksHero() {
  return (
    <section className="relative flex h-screen items-center overflow-hidden bg-navy text-white">
      {/* Background Image with Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/delivery.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-navy/90 to-primary/95" />

      {/* Decorative Elements */}
      <div className="pointer-events-none absolute -left-20 top-20 h-96 w-96 rounded-full bg-sun/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-mint/20 blur-3xl" />

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
                Cassio Process
              </span>
            </div>

            <h1 className="font-display text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
              Laundry day,
              <br />
              <span className="text-mint">simplified</span>
            </h1>

            <p className="max-w-xl text-lg text-white/85">
              From pickup to delivery, Cassio makes professional garment care effortless. Transform your laundry experience in just 24-48 hours.
            </p>

            {/* Quick Process Steps */}
            <div className="space-y-2">
              <div className="flex items-center gap-3 rounded-xl bg-white/10 p-2 backdrop-blur-md">
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-mint text-navy">
                  <span className="font-display text-sm font-semibold">1</span>
                </div>
                <span className="text-sm font-medium">Schedule pickup online</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-white/10 p-2 backdrop-blur-md">
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sun text-navy">
                  <span className="font-display text-sm font-semibold">2</span>
                </div>
                <span className="text-sm font-medium">We collect & clean</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-white/10 p-2 backdrop-blur-md">
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-lilac text-navy">
                  <span className="font-display text-sm font-semibold">3</span>
                </div>
                <span className="text-sm font-medium">Delivered fresh to your door</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#overview"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-semibold text-white shadow-pop transition hover:scale-105"
              >
                See how it works
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
                <div className="space-y-4">
                  {/* Feature Cards */}
                  <div className="flex items-start gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur-md">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-mint text-navy">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold">24-48 Hour Service</h3>
                      <p className="mt-1 text-xs text-white/80">Fast turnaround guaranteed</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur-md">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sun text-navy">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold">Free Pickup & Delivery</h3>
                      <p className="mt-1 text-xs text-white/80">Across all London boroughs</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur-md">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-lilac text-navy">
                      <Shield className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold">Quality Guarantee</h3>
                      <p className="mt-1 text-xs text-white/80">100% satisfaction promise</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -left-8 -bottom-8 -z-10 h-48 w-48 rounded-full bg-mint/30 blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
