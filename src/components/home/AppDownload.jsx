import { ArrowRight } from "lucide-react";

export function AppDownload() {
  return (
    <section className="overflow-hidden bg-mint py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl bg-white/70 p-8 text-center shadow-pop md:p-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Quick action</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            Ready to schedule your laundry pickup
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Choose a time that works for you and we will handle collection, cleaning, and delivery.
          </p>
          <a
            href="/contact"
            className="mx-auto mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-10 py-4 font-display text-base font-semibold text-brand-foreground shadow-soft transition hover:scale-[1.02]"
          >
            Schedule pickup
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
