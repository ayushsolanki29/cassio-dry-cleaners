import { MapPin } from "lucide-react";

export function MapIllustration() {
  return (
    <section className="bg-lilac py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-white shadow-card">
          <div className="relative h-96 bg-secondary">
            <img
              src="/assets/hero-woman.jpg"
              alt="Cassio locations in London"
              className="h-full w-full object-cover opacity-30"
            />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="mb-4 inline-grid h-20 w-20 place-items-center rounded-full bg-brand text-white shadow-pop">
                  <MapPin className="h-10 w-10" />
                </div>
                <h3 className="font-display text-3xl font-semibold text-navy">
                  Serving all of London
                </h3>
                <p className="mt-2 text-lg text-muted-foreground">
                  Free pickup & delivery across 32 boroughs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
