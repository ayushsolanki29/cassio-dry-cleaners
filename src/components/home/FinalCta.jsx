import { ArrowRight, Phone } from "lucide-react";

export function FinalCta() {
  return (
    <section className="bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-brand p-8 md:p-16 lg:p-20">
          {/* Circular gradient waves */}
          <div className="pointer-events-none absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 translate-x-1/3 md:h-[600px] md:w-[600px]">
            <div className="absolute inset-0 rounded-full bg-white/10" />
            <div className="absolute inset-6 rounded-full bg-white/10 md:inset-8" />
            <div className="absolute inset-12 rounded-full bg-white/10 md:inset-16" />
            <div className="absolute inset-18 rounded-full bg-white/10 md:inset-24" />
            <div className="absolute inset-24 rounded-full bg-white/10 md:inset-32" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <h2 className="font-display text-2xl font-bold text-white md:text-5xl lg:text-6xl">
              Ready to simplify your laundry?
            </h2>
            <p className="mt-3 text-sm text-white/90 md:mt-4 md:text-xl">
              Join thousands of happy customers. Free pickup & delivery in 24 hours across Watford.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 md:mt-8 md:gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-105 md:gap-3 md:px-8 md:py-4 md:text-base"
              >
                Contact Us
                <div className="grid h-6 w-6 place-items-center rounded-full bg-white/20 md:h-8 md:w-8">
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                </div>
              </a>

              <a
                href="tel:+441923256212"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-105 md:gap-3 md:px-8 md:py-4 md:text-base"
              >
                Call Us Now
                <div className="grid h-6 w-6 place-items-center rounded-full bg-white/20 md:h-8 md:w-8">
                  <Phone className="h-3 w-3 md:h-4 md:w-4" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
