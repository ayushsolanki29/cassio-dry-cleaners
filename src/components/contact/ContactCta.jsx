import { ArrowRight, Phone } from "lucide-react";
import { FadeUp } from "@/components/common/Animate";

export function ContactCta() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp className="relative overflow-hidden rounded-3xl bg-brand p-8 sm:p-12 md:p-16 lg:p-20 text-center md:text-left">
          {/* Circular gradient waves - positioned top left */}
          <div className="pointer-events-none absolute left-0 top-0 h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] -translate-x-1/4 sm:-translate-x-1/3 -translate-y-1/4 sm:-translate-y-1/2">
            <div className="absolute inset-0 rounded-full bg-white/10" />
            <div className="absolute inset-8 rounded-full bg-white/10" />
            <div className="absolute inset-16 rounded-full bg-white/10" />
            <div className="absolute inset-24 rounded-full bg-white/10" />
          </div>

          <div className="relative z-10 md:ml-auto md:max-w-2xl">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Ready to experience Cassio?
            </h2>
            <p className="mt-3 md:mt-4 text-base text-white/90 md:text-xl">
              Professional garment care with free pickup & delivery. Get started today.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
              <a
                href="/services"
                className="group inline-flex w-full sm:w-auto justify-center items-center gap-3 rounded-full bg-navy px-6 sm:px-8 py-3.5 sm:py-4 font-semibold text-white transition-all hover:scale-105 shadow-sm"
              >
                View Services
                <div className="grid h-7 w-7 sm:h-8 sm:w-8 place-items-center rounded-full bg-white/20">
                  <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </div>
              </a>

              <a
                href="tel:+441923256212"
                className="group inline-flex w-full sm:w-auto justify-center items-center gap-3 rounded-full bg-white/20 px-6 sm:px-8 py-3.5 sm:py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/30 shadow-sm border border-white/10"
              >
                <div className="grid h-7 w-7 sm:h-8 sm:w-8 place-items-center rounded-full bg-white/20">
                  <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </div>
                Call Now
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
