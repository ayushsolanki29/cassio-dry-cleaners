"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, Clock, HeadphonesIcon } from "lucide-react";

export function ContactHero() {
  return (
    <section className="relative flex h-screen items-center overflow-hidden bg-navy text-white">
      {/* Background Image with Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/testimonial-1.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-primary/90 to-navy/95" />

      {/* Decorative Elements */}
      <div className="pointer-events-none absolute -left-20 top-20 h-96 w-96 rounded-full bg-mint/20 blur-3xl" />
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
                <MessageCircle className="h-4 w-4 text-sun" />
                Contact Cassio
              </span>
            </div>

            <h1 className="font-display text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
              Get in touch —
              <br />
              <span className="text-sun">we reply in under 2 hours</span>
            </h1>

            <p className="max-w-xl text-lg text-white/85">
              Have questions about our services? Need help with an order? The Cassio team is here to help you every step of the way.
            </p>

            {/* Contact Methods Preview */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-white/10 p-3 backdrop-blur-md">
                <div className="mb-2 inline-grid h-8 w-8 place-items-center rounded-full bg-mint text-navy">
                  <Phone className="h-4 w-4" />
                </div>
                <p className="text-sm font-medium">Call us</p>
                <p className="text-xs text-white/70">Mon-Sat, 8am-8pm</p>
              </div>
              <div className="rounded-xl bg-white/10 p-3 backdrop-blur-md">
                <div className="mb-2 inline-grid h-8 w-8 place-items-center rounded-full bg-sun text-navy">
                  <Mail className="h-4 w-4" />
                </div>
                <p className="text-sm font-medium">Email us</p>
                <p className="text-xs text-white/70">2 hour response</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-semibold text-white shadow-pop transition hover:scale-105"
              >
                Send us a message
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
                  {/* Support Hours */}
                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-md">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-mint text-navy">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-semibold">Support Hours</h3>
                        <p className="text-xs text-white/70">We're here when you need us</p>
                      </div>
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Mon - Fri</span>
                        <span className="text-white/70">8:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span className="text-white/70">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="text-white/70">10:00 AM - 4:00 PM</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-md">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sun text-navy">
                        <HeadphonesIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-semibold">Multiple Channels</h3>
                        <p className="text-xs text-white/70">Choose your preferred method</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-white/20 px-2 py-1 text-xs">Phone</span>
                      <span className="rounded-full bg-white/20 px-2 py-1 text-xs">Email</span>
                      <span className="rounded-full bg-white/20 px-2 py-1 text-xs">WhatsApp</span>
                      <span className="rounded-full bg-white/20 px-2 py-1 text-xs">Live Chat</span>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="rounded-xl bg-gradient-to-r from-brand/20 to-sun/20 p-3 text-center backdrop-blur-md">
                    <p className="font-display text-2xl font-semibold text-sun">&lt; 2hrs</p>
                    <p className="mt-1 text-xs text-white/80">Average response time</p>
                  </div>
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -right-8 -top-8 -z-10 h-48 w-48 rounded-full bg-mint/30 blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
