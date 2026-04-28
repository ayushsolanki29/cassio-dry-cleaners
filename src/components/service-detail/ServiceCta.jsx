import { ArrowRight, PhoneCall } from "lucide-react";

export function ServiceCta({ service }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/90 py-20 text-center text-white">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-brand blur-3xl" />
        <div className="absolute right-10 bottom-10 h-56 w-56 rounded-full bg-sun blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6">
        <div className="mb-6">
          <img 
            src="/assets/cassio-logo.jpg" 
            alt="Cassio Dry Cleaners" 
            className="mx-auto h-16 w-auto object-contain opacity-90"
          />
        </div>
        
        <h2 className="font-display text-5xl font-semibold leading-tight md:text-6xl">
          Ready for expert {service.title.toLowerCase()}?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-white/85">
          Contact Cassio Dry Cleaners today for professional garment care. Free pickup & delivery across London in 24-48 hours.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 font-display text-base font-semibold shadow-pop transition hover:scale-105"
          >
            Contact us now
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
    </section>
  );
}
