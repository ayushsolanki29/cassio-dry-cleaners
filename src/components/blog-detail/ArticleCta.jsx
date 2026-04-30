import { ArrowRight, Phone } from "lucide-react";

export function ArticleCta() {
  return (
    <section className="bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-brand p-12 md:p-16 lg:p-20">
          {/* Circular gradient waves */}
          <div className="pointer-events-none absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/3">
            <div className="absolute inset-0 rounded-full bg-white/10" />
            <div className="absolute inset-8 rounded-full bg-white/10" />
            <div className="absolute inset-16 rounded-full bg-white/10" />
            <div className="absolute inset-24 rounded-full bg-white/10" />
            <div className="absolute inset-32 rounded-full bg-white/10" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Need professional garment care?
            </h2>
            <p className="mt-4 text-lg text-white/90 md:text-xl">
              Let Cassio handle your delicate fabrics with expert care. Free pickup & delivery across London.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-navy px-8 py-4 font-semibold text-white transition-all hover:scale-105"
              >
                Get Started with Cassio
                <div className="grid h-8 w-8 place-items-center rounded-full bg-white/20">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </a>

              <a
                href="tel:+442012345678"
                className="group inline-flex items-center gap-3 rounded-full bg-navy px-8 py-4 font-semibold text-white transition-all hover:scale-105"
              >
                Call Us Now
                <div className="grid h-8 w-8 place-items-center rounded-full bg-white/20">
                  <Phone className="h-4 w-4" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
