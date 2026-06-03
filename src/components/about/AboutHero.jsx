"use client";

import { motion } from "framer-motion";
import { Users, Target, Leaf, MapPin, TrendingUp, Heart } from "lucide-react";

export function AboutHero() {
  return (
    <section className="bg-white pt-32 pb-20 md:pt-40 md:pb-32 selection:bg-brand/20">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Minimal Centered Hero */}
        <div className="mx-auto max-w-3xl text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-brand">
              About Cassio
            </span>
            <h1 className="font-display text-5xl font-semibold leading-[1.1] tracking-tight text-navy sm:text-6xl md:text-7xl">
              The Cassio story.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              From a single shop in East Watford to serving 5K+ customers across the city, Cassio has been redefining garment care since 2018.
            </p>
          </motion.div>
        </div>

        {/* Two Column Layout: Journey & Values */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          
          {/* Left: Journey / Milestones */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col justify-between rounded-3xl bg-cream/40 p-8 border border-border/40 md:p-12"
          >
            <div>
              <h3 className="mb-8 font-display text-2xl font-semibold text-navy">Our Journey</h3>
              <div className="space-y-6">
                
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white shadow-sm text-brand">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span className="text-base font-medium text-navy">Founded in Shoreditch</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white shadow-sm text-brand">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <span className="text-base font-medium text-navy">Expanded across Watford</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white shadow-sm text-brand">
                    <Heart className="h-5 w-5" />
                  </div>
                  <span className="text-base font-medium text-navy">5K+ happy customers</span>
                </div>

              </div>
            </div>

            <div className="mt-12">
              <a
                href="#story"
                className="inline-flex items-center justify-center rounded-full bg-navy px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-navy/90 hover:shadow-md"
              >
                Read our story
              </a>
            </div>
          </motion.div>

          {/* Right: Values */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col justify-center space-y-4"
          >
            <h3 className="mb-2 px-2 font-display text-2xl font-semibold text-navy">Our Values</h3>

            <div className="flex items-start gap-5 rounded-2xl border border-border/50 bg-white p-5 shadow-sm transition-shadow hover:shadow-md md:p-6">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-mint/30 text-emerald-700">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold text-navy">Customer First</h4>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">Your satisfaction is our priority</p>
              </div>
            </div>

            <div className="flex items-start gap-5 rounded-2xl border border-border/50 bg-white p-5 shadow-sm transition-shadow hover:shadow-md md:p-6">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-sun/30 text-amber-700">
                <Target className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold text-navy">Quality Excellence</h4>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">Expert care for every garment</p>
              </div>
            </div>

            <div className="flex items-start gap-5 rounded-2xl border border-border/50 bg-white p-5 shadow-sm transition-shadow hover:shadow-md md:p-6">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-lilac/30 text-purple-700">
                <Leaf className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold text-navy">Eco-Conscious</h4>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">Sustainable cleaning methods</p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
