"use client";

import { ArrowRight, Phone } from "lucide-react";
import { FadeUp } from "@/components/common/Animate";

export function ProcessCta() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <FadeUp>
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            Ready to start?
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold text-navy md:text-5xl">
            Let us take care of your laundry
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
            Experience the effortless Cassio process. Schedule your first
            pickup today.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-navy px-8 py-4 font-semibold text-white shadow-soft transition-all hover:scale-105 hover:bg-brand sm:w-auto"
            >
              Schedule a pickup
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="tel:+441923256212"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full border-2 border-navy/20 px-8 py-4 font-semibold text-navy transition-all hover:border-brand hover:text-brand sm:w-auto"
            >
              <Phone className="h-4 w-4" />
              01494 445291
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
