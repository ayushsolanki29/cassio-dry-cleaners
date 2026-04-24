import { ArrowRight, Check } from "lucide-react";

export function Business() {
  return (
    <section id="business" className="bg-lilac py-14">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-3xl shadow-card">
            <img src="/assets/delivery.jpg" alt="Cassio delivery driver handing off cleaned garments" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -right-3 -top-3 rounded-2xl bg-white px-5 py-3 shadow-pop">
            <p className="font-display text-2xl font-semibold text-navy">120+</p>
            <p className="text-xs text-muted-foreground">Business partners</p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">For business</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            Laundry solutions for hotels, gyms &amp; offices.
          </h2>
          <p className="mt-4 text-foreground/80">
            Custom plans, dedicated account managers and bulk pricing, built around your operation.
          </p>

          <ul className="mt-6 space-y-3">
            {["Daily scheduled pickups", "Custom invoicing & reporting", "Branded packaging on request", "Priority turnaround"].map((p) => (
              <li key={p} className="flex items-center gap-3 text-foreground">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-brand text-white">
                  <Check className="h-4 w-4" />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <a href="#contact-sales" className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3 font-display font-semibold text-white transition hover:scale-105">
            Talk to sales
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
