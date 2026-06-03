import { ArrowRight, Phone } from "lucide-react";

export function BusinessCta() {
  return (
    <section className="bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-tl from-navy to-primary p-8 sm:p-12 md:p-16 lg:p-20 text-center sm:text-left">
          {/* Circular gradient waves - positioned top right */}
          <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] sm:h-[550px] sm:w-[550px] -translate-y-1/4 translate-x-1/4">
            <div className="absolute inset-0 rounded-full bg-white/10" />
            <div className="absolute inset-10 rounded-full bg-white/10" />
            <div className="absolute inset-20 rounded-full bg-white/10" />
            <div className="absolute inset-30 rounded-full bg-white/10" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto sm:mx-0">
            <h2 className="font-display text-3xl font-bold text-white md:text-5xl">
              Partner with Cassio
            </h2>
            <p className="mt-3 md:mt-4 text-base md:text-lg text-white/90">
              Professional laundry solutions for hotels, restaurants, gyms, and offices.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center sm:justify-start gap-3 sm:gap-4">
              <a
                href="/contact"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-3 rounded-full bg-brand px-6 sm:px-8 py-3.5 sm:py-4 font-semibold text-brand-foreground shadow-pop transition-all hover:scale-105"
              >
                Talk to Sales
                <div className="grid h-7 w-7 sm:h-8 sm:w-8 place-items-center rounded-full bg-white/20">
                  <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </div>
              </a>

              <a
                href="tel:+441923256212"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 sm:gap-3 rounded-full bg-white/10 px-6 sm:px-8 py-3.5 sm:py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                01494 445291
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
