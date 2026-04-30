import { ArrowRight, Phone } from "lucide-react";

export function ServiceFinalCta() {
  return (
    <section className="bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-primary p-12 md:p-16 lg:p-20">
          {/* Circular gradient waves - positioned bottom left */}
          <div className="pointer-events-none absolute bottom-0 left-0 h-[550px] w-[550px] -translate-x-1/4 translate-y-1/4">
            <div className="absolute inset-0 rounded-full bg-white/10" />
            <div className="absolute inset-10 rounded-full bg-white/10" />
            <div className="absolute inset-20 rounded-full bg-white/10" />
            <div className="absolute inset-30 rounded-full bg-white/10" />
          </div>

          <div className="relative z-10 ml-auto max-w-2xl text-right">
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
              Ready to try our services?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Professional garment care with free pickup & delivery. Experience the difference.
            </p>

            <div className="mt-8 flex flex-wrap justify-end gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-primary transition-all hover:scale-105"
              >
                Schedule Pickup
                <div className="grid h-8 w-8 place-items-center rounded-full bg-primary/20">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </a>

              <a
                href="tel:01494445291"
                className="inline-flex items-center gap-3 rounded-full border-2 border-white/30 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
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
