import { ArrowRight, Phone } from "lucide-react";
import { FadeUp } from "@/components/common/Animate";

export function ServiceFinalCta() {
  return (
    <section className="bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-primary p-8 md:p-16 lg:p-20">
          {/* Circular gradient waves - positioned bottom left */}
          <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] md:h-[550px] md:w-[550px] -translate-x-1/4 translate-y-1/4">
            <div className="absolute inset-0 rounded-full bg-white/10" />
            <div className="absolute inset-10 rounded-full bg-white/10" />
            <div className="absolute inset-20 rounded-full bg-white/10" />
            <div className="absolute inset-30 rounded-full bg-white/10" />
          </div>

          <div className="relative z-10 mx-auto md:ml-auto max-w-2xl text-center md:text-right">
            <FadeUp>
              <h2 className="font-display text-3xl font-bold text-white md:text-5xl">
                Ready to try our services?
              </h2>
              <p className="mt-3 md:mt-4 text-base md:text-lg text-white/90">
                Professional garment care with free pickup & delivery. Experience the difference.
              </p>
            </FadeUp>

            <FadeUp delay={0.2} className="mt-8 flex flex-col md:flex-row justify-center md:justify-end gap-3 md:gap-4">
              <a
                href="/contact"
                className="inline-flex w-full md:w-auto justify-center items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-primary transition-all hover:scale-105"
              >
                Contact Us
                <div className="grid h-8 w-8 place-items-center rounded-full bg-primary/20">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </a>

              <a
                href="tel:+441923256212"
                className="inline-flex w-full md:w-auto justify-center items-center gap-3 rounded-full border-2 border-white/30 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <Phone className="h-5 w-5" />
                01494 445291
              </a>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
