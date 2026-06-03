import { Quote, Star } from "lucide-react";

export function CaseStudy() {
  return (
    <section className="bg-sun py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Success story</span>
          <h2 className="mt-1 font-display text-3xl font-semibold text-navy md:text-4xl">
            Featured case study
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-white shadow-card">
          <div className="p-6 md:p-8 lg:p-10 text-center">
            {/* Top section: The Quote */}
            <div className="mx-auto max-w-4xl mb-6">
              <Quote className="mx-auto mb-3 h-8 w-8 text-brand/20" />
              
              <div className="mb-3 flex justify-center gap-1 text-sun">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-current" />
                ))}
              </div>

              <blockquote className="font-display text-lg font-semibold leading-relaxed text-navy md:text-xl lg:text-2xl">
                "Cassio Dry Cleaners gave us complete operational predictability. We always know exactly when our linens will arrive and exactly what it will cost, which is vital for managing a growing local business."
              </blockquote>
            </div>

            <div className="border-t border-navy/5 my-6 md:my-8" />

            {/* Bottom section: 3-column breakdown (Carousel on mobile) */}
            <div className="flex overflow-x-auto sm:grid sm:grid-cols-3 gap-3 sm:gap-4 text-left pb-2 -mb-2 scrollbar-hide snap-x snap-mandatory">
              
              <div className="min-w-[85vw] sm:min-w-0 flex-shrink-0 rounded-xl sm:rounded-2xl bg-cream p-5 md:p-6 snap-center border border-border/30">
                <h3 className="font-display text-base md:text-lg font-semibold text-navy">The Challenge</h3>
                <p className="mt-2 md:mt-3 text-sm text-muted-foreground leading-relaxed">
                  A busy local boutique and spa needed a reliable garment and linen service with fixed, predictable weekly costs and rigid, on-time schedules to plan their daily operations.
                </p>
              </div>

              <div className="min-w-[85vw] sm:min-w-0 flex-shrink-0 rounded-xl sm:rounded-2xl bg-mint p-5 md:p-6 snap-center border border-border/30">
                <h3 className="font-display text-base md:text-lg font-semibold text-navy">The Solution</h3>
                <p className="mt-2 md:mt-3 text-sm text-muted-foreground leading-relaxed">
                  Cassio implemented a structured flat-rate laundry service with fixed weekly collection schedules and 100% transparent billing, removing all cost and timing surprises.
                </p>
              </div>

              <div className="min-w-[85vw] sm:min-w-0 flex-shrink-0 rounded-xl sm:rounded-2xl bg-lilac p-5 md:p-6 snap-center border border-border/30">
                <h3 className="font-display text-base md:text-lg font-semibold text-navy">The Results</h3>
                <ul className="mt-2 md:mt-3 space-y-1.5 text-sm text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-1.5"><span className="text-brand">•</span> 100% predictable billing with zero hidden fees</li>
                  <li className="flex items-start gap-1.5"><span className="text-brand">•</span> Guaranteed weekly pickup & delivery slots</li>
                  <li className="flex items-start gap-1.5"><span className="text-brand">•</span> Zero laundry-related operational delays</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
