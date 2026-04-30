import { ArrowRight, Phone } from "lucide-react";

export function ContactCta() {
  return (
    <section className="bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-primary p-12 md:p-16 lg:p-20">
          {/* Circular gradient waves - positioned top left */}
          <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] -translate-x-1/4 -translate-y-1/4">
            <div className="absolute inset-0 rounded-full bg-white/10" />
            <div className="absolute inset-8 rounded-full bg-white/10" />
            <div className="absolute inset-16 rounded-full bg-white/10" />
            <div className="absolute inset-24 rounded-full bg-white/10" />
          </div>

          <div className="relative z-10 ml-auto max-w-2xl">
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
              Ready to experience Cassio?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Professional garment care with free pickup & delivery. Get started today.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/services"
                className="inline-flex items-center gap-3 rounded-full bg-brand px-8 py-4 font-semibold text-brand-foreground transition-all hover:scale-105"
              >
                View Services
                <div className="grid h-8 w-8 place-items-center rounded-full bg-white/20">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </a>

              <a
                href="tel:01494445291"
                className="inline-flex items-center gap-3 rounded-full bg-white/20 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/30"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
