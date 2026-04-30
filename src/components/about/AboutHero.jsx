"use client";

import { motion } from "framer-motion";
import { Users, Target, Leaf, CheckCircle, TrendingUp, Award } from "lucide-react";

export function AboutHero() {
  return (
    <section className="relative flex h-screen items-center overflow-hidden bg-navy text-white">
      {/* Background Image with Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/service-premium.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-primary/90 to-navy/95" />

      {/* Decorative Elements */}
      <div className="pointer-events-none absolute -left-20 top-20 h-96 w-96 rounded-full bg-cream/20 blur-3xl" />
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
                <img src="/assets/cassio-logo.jpg" alt="Cassio" className="h-5 w-5 rounded-full object-cover mix-blend-lighten" />
                About Cassio
              </span>
            </div>

            <h1 className="font-display text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
              The <span className="text-cream">Cassio</span> story
            </h1>

            <p className="max-w-xl text-lg text-white/85">
              From a single shop in East London to serving 50,000+ customers across the city, Cassio has been redefining garment care since 2018.
            </p>

            {/* Timeline Highlights */}
            <div className="space-y-2">
              <div className="flex items-center gap-3 rounded-xl bg-white/10 p-2 backdrop-blur-md">
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-mint text-brand">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium">Founded in Shoreditch</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-white/10 p-2 backdrop-blur-md">
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sun text-brand">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium">Expanded across London</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-white/10 p-2 backdrop-blur-md">
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-lilac text-brand">
                  <Award className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium">50,000+ happy customers</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="#story"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-semibold text-white shadow-pop transition hover:scale-105"
              >
                Read our story
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
                  {/* Values Cards */}
                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-md">
                    <div className="mb-3 inline-grid h-10 w-10 place-items-center rounded-xl bg-mint text-white">
                      <Users className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-base font-semibold">Customer First</h3>
                    <p className="mt-1 text-sm text-white/80">Your satisfaction is our priority</p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-md">
                    <div className="mb-3 inline-grid h-10 w-10 place-items-center rounded-xl bg-sun text-white">
                      <Target className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-base font-semibold">Quality Excellence</h3>
                    <p className="mt-1 text-sm text-white/80">Expert care for every garment</p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-md">
                    <div className="mb-3 inline-grid h-10 w-10 place-items-center rounded-xl bg-lilac text-white">
                      <Leaf className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-base font-semibold">Eco-Conscious</h3>
                    <p className="mt-1 text-sm text-white/80">Sustainable cleaning methods</p>
                  </div>
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -right-8 -top-8 -z-10 h-48 w-48 rounded-full bg-cream/30 blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
