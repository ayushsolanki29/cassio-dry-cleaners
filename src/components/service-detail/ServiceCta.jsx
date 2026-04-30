import { ArrowRight, Phone } from "lucide-react";

export function ServiceCta({ service }) {
  return (
    <section className="bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-navy p-12 md:p-16 lg:p-20">
          {/* Circular gradient waves - positioned center */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2">
            <div className="absolute inset-0 rounded-full bg-white/5" />
            <div className="absolute inset-16 rounded-full bg-white/5" />
            <div className="absolute inset-32 rounded-full bg-white/5" />
            <div className="absolute inset-48 rounded-full bg-white/5" />
          </div>

          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
              Ready for {service?.title || 'premium'} service?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Experience professional care with free pickup & delivery in 24 hours.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-brand px-8 py-4 font-semibold text-brand-foreground transition-all hover:scale-105"
              >
                Book This Service
                <div className="grid h-8 w-8 place-items-center rounded-full bg-white/20">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </a>

              <a
                href="tel:01494445291"
                className="inline-flex items-center gap-3 rounded-full bg-white/20 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/30"
              >
                <Phone className="h-5 w-5" />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
