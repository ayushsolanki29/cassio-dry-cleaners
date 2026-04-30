"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight, Navigation, CheckCircle } from "lucide-react";

export function AreasHero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white py-16 md:py-20 lg:py-24">
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

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="grid items-center gap-8 lg:grid-cols-2">
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

          {/* Right Visual Element - Google Maps Satellite View */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2476.8!2d-0.3947!3d51.6556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766a6c0c0c0c0d%3A0x0!2s166%20Cassiobury%20Dr%2C%20Watford%20WD17%203AJ%2C%20UK!5e1!3m2!1sen!2suk!4v1234567890!5m2!1sen!2suk&maptype=satellite&zoom=17"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cassio Service Area - Satellite View"
                className="h-full w-full"
              />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 rounded-2xl border border-white/20 bg-white/95 p-3 md:p-4 shadow-pop backdrop-blur-md">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="grid h-8 w-8 md:h-10 md:w-10 place-items-center rounded-full bg-brand text-white">
                    <MapPin className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Service Center</p>
                    <p className="font-display text-sm font-semibold text-navy">Watford, London</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Circle */}
            <div className="absolute -right-8 -top-8 -z-10 h-48 w-48 rounded-full bg-sun/30 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
