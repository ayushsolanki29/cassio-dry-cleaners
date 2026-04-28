import { ArrowRight, PhoneCall } from "lucide-react";

export function ProcessCta() {
  return (
    <section className="flex h-screen items-center bg-primary text-white">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="mb-6">
              <img 
                src="/assets/cassio-logo.jpg" 
                alt="Cassio Dry Cleaners" 
                className="h-16 w-auto object-contain opacity-90"
              />
            </div>
            <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
              Ready to experience the Cassio difference?
            </h2>
            <p className="text-lg text-white/85 lg:text-xl">
              Join thousands of satisfied customers who trust Cassio Dry Cleaners for hassle-free, professional garment care. Experience our seamless process today.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 font-display text-base font-semibold shadow-pop transition hover:scale-105"
              >
                Get started today
                <ArrowRight className="h-4 w-4" />
              </a>
              <a 
                href="tel:+442012345678" 
                className="inline-flex items-center gap-2 rounded-full bg-white/15 px-8 py-4 font-display text-base font-semibold backdrop-blur transition hover:bg-white/25"
              >
                <PhoneCall className="h-4 w-4" />
                Call Cassio
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="/assets/app-mockup.jpg"
                alt="Cassio app process and seamless experience"
                className="h-96 w-full object-cover lg:h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -right-4 -top-4 rounded-2xl bg-white/90 p-4 shadow-pop backdrop-blur-sm">
              <div className="text-center">
                <p className="font-display text-2xl font-bold text-brand">Easy</p>
                <p className="text-xs text-navy">Process</p>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white/90 p-4 shadow-pop backdrop-blur-sm">
              <div className="text-center">
                <p className="font-display text-2xl font-bold text-sun">Track</p>
                <p className="text-xs text-navy">Live updates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
