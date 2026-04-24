import { ArrowRight } from "lucide-react";

export function Promo() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl bg-sun">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="p-10 md:p-14">
              <h2 className="font-display text-3xl font-semibold leading-tight text-navy md:text-4xl">
                Take back your time.
                <br />
                Leave the laundry to us.
              </h2>
              <p className="mt-4 max-w-md text-navy/80">Spend your weekend doing what you love. We'll handle the spinning and folding.</p>
              <a href="#how-it-works" className="mt-6 inline-flex items-center gap-2 font-display text-lg font-semibold text-primary">
                How it works
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="relative h-64 md:h-80">
              <img
                src="/assets/section-towels.jpg"
                alt="Joyful customer wrapped in fresh towels"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
