import { ArrowRight } from "lucide-react";

export function Booking() {
  return (
    <section id="book" className="relative mt-8 overflow-hidden bg-primary py-14 text-white">
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-sun/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <span className="text-sm font-semibold uppercase tracking-wider text-sun">Quick booking</span>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight md:text-5xl">
            Book your pickup in <span className="text-sun">10 seconds.</span>
          </h2>
          <p className="mt-4 text-white/85">No registration needed. Choose a slot, tell us where you are, and we'll handle the rest.</p>

          <button className="mx-auto mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-10 py-4 font-display text-base font-semibold text-brand-foreground shadow-soft transition hover:scale-[1.02] lg:mx-0">
            Schedule pickup
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mx-auto w-full max-w-xl overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-pop">
          <img src="/assets/delivery.jpg" alt="Laundry pickup and delivery" className="h-72 w-full object-cover md:h-80" />
        </div>
      </div>
    </section>
  );
}
