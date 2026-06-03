"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Clock, Shield, Leaf, CheckCircle } from "lucide-react";
import Link from "next/link";
import { FadeUp } from "@/components/common/Animate";

export function ServiceDetailHero({ service }) {
  return (
    <section className="bg-cream/40 pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden selection:bg-brand/20">
      <div className="mx-auto max-w-7xl px-6">
        
        <Link 
          href="/services" 
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-navy"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Services
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <FadeUp className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-brand shadow-sm border border-border/50">
              Premium Garment Care
            </div>
            
            <h1 className="font-display text-4xl font-semibold leading-[1.1] text-navy sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>

            <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
              {service.description}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-sm border border-border/40">
                <Clock className="h-4 w-4 text-brand" />
                <span className="text-sm font-medium text-navy">24-48h turnaround</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-sm border border-border/40">
                <Shield className="h-4 w-4 text-brand" />
                <span className="text-sm font-medium text-navy">Fully insured</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-sm border border-border/40">
                <Leaf className="h-4 w-4 text-brand" />
                <span className="text-sm font-medium text-navy">Eco-friendly</span>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-navy px-8 py-4 font-semibold text-white transition-all hover:scale-105 shadow-sm"
              >
                Get in touch
              </Link>
            </div>
          </FadeUp>

          <FadeUp delay={0.2} className="relative">
            {/* Soft decorative background shapes */}
            <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full bg-mint/30 blur-3xl" />
            <div className="absolute -left-12 -bottom-12 h-64 w-64 rounded-full bg-sun/30 blur-3xl" />
            
            <div className="relative rounded-3xl bg-white p-2 shadow-card border border-border/50 z-10 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="relative z-10 h-80 sm:h-96 w-full rounded-2xl object-cover"
              />
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
