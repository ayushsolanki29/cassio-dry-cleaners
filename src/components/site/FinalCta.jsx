import { ArrowRight, PhoneCall } from "lucide-react";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-primary py-28 text-center text-white">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-brand blur-3xl" />
        <div className="absolute right-10 bottom-10 h-56 w-56 rounded-full bg-sun blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6">
        <span className="inline-flex rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold backdrop-blur">Ready when you are</span>
        <h2 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-6xl">
          Ready for a premium laundry experience
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-white/85">
          Book your first pickup today and feel the Cassio difference. No subscription, no minimums.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a href="#book" className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 font-display text-base font-semibold shadow-pop transition hover:scale-105">
            Book pickup now
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="tel:+919999999999" className="inline-flex items-center gap-2 rounded-full bg-white/15 px-8 py-4 font-display text-base font-semibold backdrop-blur transition hover:bg-white/25">
            <PhoneCall className="h-4 w-4" />
            Call us
          </a>
        </div>
      </div>
    </section>
  );
}
