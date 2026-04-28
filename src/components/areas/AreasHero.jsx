"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight, Navigation, CheckCircle } from "lucide-react";

export function AreasHero() {
  return (
    <section className="relative flex h-screen items-center overflow-hidden bg-navy text-white">
      {/* Background Image with Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/hero-woman.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-primary/90 to-navy/95" />

      {/* Decorative Elements */}
      <div className="pointer-events-none absolute -left-20 top-20 h-96 w-96 rounded-full bg-lilac/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-brand/20 blur-3xl" />

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
                <MapPin className="h-4 w-4 text-sun" />
                Cassio Coverage
              </span>
            </div>

            <h1 className="font-display text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
              Now serving
              <br />
              <span className="text-sun">across London</span>
            </h1>

            <p className="max-w-xl text-lg text-white/85">
              Free pickup & delivery in 24-48 hours across Greater London. Cassio brings professional garment care to your neighborhood.
            </p>

            {/* Coverage Highlights */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 shrink-0 text-mint" />
                <span className="text-sm">32 London boroughs covered</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 shrink-0 text-mint" />
                <span className="text-sm">Same-day pickup available</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 shrink-0 text-mint" />
                <span className="text-sm">Expanding to new areas monthly</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#coverage"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-semibold text-white shadow-pop transition hover:scale-105"
              >
                Check your area
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
              {/* Glassmorphism Card with Map Visual */}
              <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl shadow-2xl">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-mint/20 to-lilac/20 p-8">
                  <div className="relative z-10 text-center">
                    <div className="mb-4 inline-grid h-16 w-16 place-items-center rounded-full bg-brand text-white shadow-pop">
                      <Navigation className="h-8 w-8" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold">32+</h3>
                    <p className="mt-1 text-sm text-white/80">London Boroughs</p>
                  </div>
                  
                  {/* Decorative Map Pins */}
                  <div className="absolute left-6 top-6 h-2 w-2 rounded-full bg-brand shadow-lg" />
                  <div className="absolute right-8 top-12 h-2 w-2 rounded-full bg-sun shadow-lg" />
                  <div className="absolute bottom-8 left-12 h-2 w-2 rounded-full bg-mint shadow-lg" />
                  <div className="absolute bottom-6 right-6 h-2 w-2 rounded-full bg-lilac shadow-lg" />
                </div>

                {/* Popular Areas */}
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="rounded-xl bg-white/10 p-2 text-center backdrop-blur-md">
                    <p className="text-xs text-white/70">East London</p>
                    <p className="mt-1 font-display text-sm font-semibold">Shoreditch</p>
                  </div>
                  <div className="rounded-xl bg-white/10 p-2 text-center backdrop-blur-md">
                    <p className="text-xs text-white/70">West London</p>
                    <p className="mt-1 font-display text-sm font-semibold">Notting Hill</p>
                  </div>
                  <div className="rounded-xl bg-white/10 p-2 text-center backdrop-blur-md">
                    <p className="text-xs text-white/70">Central</p>
                    <p className="mt-1 font-display text-sm font-semibold">Westminster</p>
                  </div>
                  <div className="rounded-xl bg-white/10 p-2 text-center backdrop-blur-md">
                    <p className="text-xs text-white/70">South London</p>
                    <p className="mt-1 font-display text-sm font-semibold">Clapham</p>
                  </div>
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -right-8 -top-8 -z-10 h-48 w-48 rounded-full bg-sun/30 blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
