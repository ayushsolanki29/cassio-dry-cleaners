import { ArrowRight, Phone } from "lucide-react";

export function BusinessCta() {
  return (
    <section className="bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-tl from-navy to-primary p-12 md:p-16 lg:p-20">
          {/* Circular gradient waves - positioned top right */}
          <div className="pointer-events-none absolute right-0 top-0 h-[550px] w-[550px] -translate-y-1/4 translate-x-1/4">
            <div className="absolute inset-0 rounded-full bg-white/10" />
            <div className="absolute inset-10 rounded-full bg-white/10" />
            <div className="absolute inset-20 rounded-full bg-white/10" />
            <div className="absolute inset-30 rounded-full bg-white/10" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
              Partner with Cassio
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Professional laundry solutions for hotels, restaurants, gyms, and offices.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-brand px-8 py-4 font-semibold text-brand-foreground transition-all hover:scale-105"
              >
                Talk to Sales
                <div className="grid h-8 w-8 place-items-center rounded-full bg-white/20">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </a>

              <a
                href="tel:01494445291"
                className="inline-flex items-center gap-3 rounded-full bg-white/20 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/30"
              >
                <Phone className="h-5 w-5" />
                01494 445291
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
