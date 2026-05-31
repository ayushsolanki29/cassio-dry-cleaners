import { ArrowRight, Check } from "lucide-react";
import { FadeUp, FadeIn } from "@/components/common/Animate";

export function Business() {
  return (
    <section id="business" className="bg-lilac py-12 md:py-14">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 md:gap-12 lg:grid-cols-2">

        <FadeIn className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-3xl shadow-card">
            <img src="/assets/delivery.jpg" alt="Cassio delivery driver handing off cleaned garments" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -right-2 -top-2 rounded-2xl bg-white px-4 py-2.5 shadow-pop md:-right-3 md:-top-3 md:px-5 md:py-3">
            <p className="font-display text-xl font-semibold text-navy md:text-2xl">120+</p>
            <p className="text-xs text-muted-foreground">Business partners</p>
          </div>
        </FadeIn>

        <FadeUp delay={0.1} className="order-1 lg:order-2">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">For business</span>
          <h2 className="mt-3 font-display text-2xl font-semibold text-navy md:text-5xl">
            Laundry solutions for hotels, gyms &amp; offices.
          </h2>
          <p className="mt-3 text-sm text-foreground/80 md:mt-4 md:text-base">
            Custom plans, dedicated account managers and flexible rates, built around your operation.
          </p>
          <ul className="mt-5 space-y-2.5 md:mt-6 md:space-y-3">
            {["Daily scheduled pickups", "Custom invoicing & reporting", "Branded packaging on request", "Priority turnaround"].map((p) => (
              <li key={p} className="flex items-center gap-3 text-sm text-foreground md:text-base">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand text-white md:h-6 md:w-6">
                  <Check className="h-3 w-3 md:h-4 md:w-4" />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <a href="/business" className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-display font-semibold text-white transition hover:scale-105 md:mt-8 md:px-7">
            Talk to sales
            <ArrowRight className="h-4 w-4" />
          </a>
        </FadeUp>

      </div>
    </section>
  );
}
