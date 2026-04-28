"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Clock, Shield, Leaf, Sparkles } from "lucide-react";
import Link from "next/link";

export function ServiceDetailHero({ service }) {
  return (
    <section className="relative flex h-screen items-center overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 text-white">
      <div className="pointer-events-none absolute -right-20 top-20 h-96 w-96 rounded-full bg-brand/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-20 h-96 w-96 rounded-full bg-sun/30 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-8">
        <Link 
          href="/services" 
          className="inline-flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Services
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-6 grid items-center gap-8 lg:grid-cols-2"
        >
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur">
              <Sparkles className="h-4 w-4 text-sun" />
              Cassio Dry Cleaners
            </div>
            <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="mt-4 text-lg text-white/85">{service.description}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 backdrop-blur">
                <Clock className="h-4 w-4 text-cream" />
                <span className="text-sm font-medium">24-48h turnaround</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 backdrop-blur">
                <Shield className="h-4 w-4 text-cream" />
                <span className="text-sm font-medium">Fully insured</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 backdrop-blur">
                <Leaf className="h-4 w-4 text-cream" />
                <span className="text-sm font-medium">Eco-friendly</span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 font-semibold text-white shadow-pop transition hover:scale-105"
              >
                Get in touch
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="blob absolute inset-0 bg-cream/20" />
            <img
              src={service.image}
              alt={service.title}
              className="relative z-10 h-96 w-full rounded-3xl object-cover shadow-card"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
