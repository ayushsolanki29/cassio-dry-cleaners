import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FadeUp, FadeIn } from "@/components/common/Animate";

export function Promo() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp>
          <div className="overflow-hidden rounded-3xl bg-sun">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div className="p-6 md:p-14">
                <h2 className="font-display text-2xl font-semibold leading-tight text-navy md:text-4xl">
                  Take back your time.
                  Leave the laundry to us.
                </h2>
                <p className="mt-3 max-w-md text-sm text-navy/80 md:mt-4 md:text-base">
                  Spend your weekend doing what you love. We&apos;ll handle the spinning and folding.
                </p>
                <Link href="/how-it-works" className="mt-5 inline-flex items-center gap-2 font-display text-base font-semibold text-primary md:mt-6 md:text-lg">
                  How it works
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <FadeIn delay={0.15} className="relative h-52 md:h-80">
                <img
                  src="/assets/home/b1.jpeg"
                  alt="Joyful customer wrapped in fresh towels"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-right"
                />
              </FadeIn>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
