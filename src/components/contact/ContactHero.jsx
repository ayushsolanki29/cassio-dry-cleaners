"use client";

import { motion } from "framer-motion";
import { FadeUp } from "@/components/common/Animate";
import { Phone, Mail, Clock, HeadphonesIcon } from "lucide-react";

export function ContactHero() {
  return (
    <section className="bg-cream/40 pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden selection:bg-brand/20">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <FadeUp className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-brand shadow-sm border border-border/50">
              Contact Cassio
            </span>
            
            <h1 className="font-display text-4xl font-semibold leading-[1.1] text-navy sm:text-5xl lg:text-6xl">
              Get in touch — <br/>
              <span className="text-brand">we reply in under 2 hours.</span>
            </h1>

            <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
              Have questions about our services? Need help with an order? The Cassio team is here to help you every step of the way.
            </p>

            {/* Quick Contact Buttons */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
               <a href="tel:+441923256212" className="group flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm border border-border/40 transition-all hover:shadow-card hover:-translate-y-1">
                 <div className="grid h-12 w-12 place-items-center rounded-xl bg-mint/40 text-emerald-800 transition-colors group-hover:bg-mint/60">
                   <Phone className="h-5 w-5" />
                 </div>
                 <div>
                   <p className="font-display font-semibold text-navy">Call us</p>
                   <p className="text-sm text-muted-foreground">Mon-Sat, 9am-5:30pm</p>
                 </div>
               </a>

               <a href="mailto:info@cassiodrycleaners.co.uk" className="group flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm border border-border/40 transition-all hover:shadow-card hover:-translate-y-1">
                 <div className="grid h-12 w-12 place-items-center rounded-xl bg-sun/40 text-amber-800 transition-colors group-hover:bg-sun/60">
                   <Mail className="h-5 w-5" />
                 </div>
                 <div>
                   <p className="font-display font-semibold text-navy">Email us</p>
                   <p className="text-sm text-muted-foreground">2 hour response</p>
                 </div>
               </a>
            </div>

            <div className="pt-6">
              <a href="#contact-form" className="inline-flex items-center justify-center rounded-full bg-navy px-8 py-4 font-semibold text-white transition-all hover:scale-105 shadow-sm">
                Send us a message
              </a>
            </div>
          </FadeUp>

          <FadeUp delay={0.2} className="relative hidden lg:block">
            <div className="relative rounded-3xl bg-white p-8 shadow-card border border-border/50 z-10">
              
              <div className="space-y-8">
                {/* Support Hours */}
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-lilac/40 text-purple-800">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-navy">Support Hours</h3>
                      <p className="text-sm text-muted-foreground">We're here when you need us</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 rounded-2xl bg-cream/30 p-5 text-sm text-navy font-medium border border-border/30">
                    <div className="flex justify-between items-center pb-3 border-b border-border/50">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span>8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-border/50">
                      <span className="text-muted-foreground">Saturday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Sunday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                  </div>
                </div>

                {/* Multiple Channels */}
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
                      <HeadphonesIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-navy">Multiple Channels</h3>
                      <p className="text-sm text-muted-foreground">Choose your preferred method</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Phone", "Email", "WhatsApp"].map((c) => (
                      <span key={c} className="rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-navy border border-border/50">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
            
            {/* Soft decorative background shape */}
            <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full bg-mint/30 blur-3xl" />
            <div className="absolute -left-12 -bottom-12 h-64 w-64 rounded-full bg-sun/30 blur-3xl" />
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
