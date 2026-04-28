import { ArrowRight, PhoneCall } from "lucide-react";

export function FinalCta() {
  return (
    <section className="flex h-screen items-center bg-primary text-white">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold backdrop-blur">
              Ready when you are
            </span>
            <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
              Ready for a premium laundry experience
            </h2>
            <p className="text-lg text-white/85 lg:text-xl">
              Schedule your first pickup today and feel the Cassio difference. No subscription, no minimums. Professional care for your precious garments.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 font-display text-base font-semibold shadow-pop transition hover:scale-105"
              >
                Schedule pickup now
                <ArrowRight className="h-4 w-4" />
              </a>
              <a 
                href="tel:+919999999999" 
                className="inline-flex items-center gap-2 rounded-full bg-white/15 px-8 py-4 font-display text-base font-semibold backdrop-blur transition hover:bg-white/25"
              >
                <PhoneCall className="h-4 w-4" />
                Call us
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="/assets/hero-woman.jpg"
                alt="Premium laundry experience with Cassio"
                className="h-96 w-full object-cover lg:h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -right-4 -top-4 rounded-2xl bg-white/90 p-4 shadow-pop backdrop-blur-sm">
              <div className="text-center">
                <p className="font-display text-2xl font-bold text-brand">24hrs</p>
                <p className="text-xs text-navy">Fast turnaround</p>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white/90 p-4 shadow-pop backdrop-blur-sm">
              <div className="text-center">
                <p className="font-display text-2xl font-bold text-sun">50k+</p>
                <p className="text-xs text-navy">Happy customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
