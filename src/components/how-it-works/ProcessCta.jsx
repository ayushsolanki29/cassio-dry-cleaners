import { ArrowRight, Phone } from "lucide-react";

export function ProcessCta() {
  return (
    <section className="bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-brand to-sun p-12 text-center md:p-16 lg:p-20">
          {/* Circular gradient waves - centered */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2">
            <div className="absolute inset-0 rounded-full bg-white/5" />
            <div className="absolute inset-12 rounded-full bg-white/5" />
            <div className="absolute inset-24 rounded-full bg-white/5" />
            <div className="absolute inset-36 rounded-full bg-white/5" />
          </div>

          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
              Experience the Cassio difference
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Join thousands of satisfied customers. Experience our seamless process today.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-primary transition-all hover:scale-105"
              >
                Get Started Today
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
