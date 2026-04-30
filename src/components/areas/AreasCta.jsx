import { ArrowRight, Phone } from "lucide-react";

export function AreasCta() {
  return (
    <section className="bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-tr from-mint to-brand p-12 md:p-16 lg:p-20">
          {/* Circular gradient waves - positioned bottom right */}
          <div className="pointer-events-none absolute bottom-0 right-0 h-[550px] w-[550px] translate-x-1/4 translate-y-1/4">
            <div className="absolute inset-0 rounded-full bg-white/10" />
            <div className="absolute inset-10 rounded-full bg-white/10" />
            <div className="absolute inset-20 rounded-full bg-white/10" />
            <div className="absolute inset-30 rounded-full bg-white/10" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
              Service in your area?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Experience professional dry cleaning with free pickup & delivery across London.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-brand transition-all hover:scale-105"
              >
                Check Availability
                <div className="grid h-8 w-8 place-items-center rounded-full bg-brand/20">
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
