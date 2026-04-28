import { Quote, Star } from "lucide-react";

export function CaseStudy() {
  return (
    <section className="bg-sun py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Success story</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            Featured case study
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-white shadow-card">
          <div className="grid items-center gap-10 p-10 lg:grid-cols-2 lg:p-16">
            <div>
              <Quote className="mb-6 h-12 w-12 text-brand/20" />
              
              <div className="mb-4 flex gap-1 text-sun">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>

              <blockquote className="font-display text-2xl font-semibold leading-relaxed text-navy md:text-3xl">
                "Cassio Dry Cleaners transformed our hotel's laundry operations. Their reliability and quality are unmatched in London."
              </blockquote>

              <div className="mt-8 flex items-center gap-4">
                <img 
                  src="/assets/testimonial-2.jpg" 
                  alt="Hotel manager" 
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-navy">Michael Thompson</p>
                  <p className="text-sm text-muted-foreground">General Manager</p>
                  <p className="text-sm font-medium text-brand">The Mayfair Hotel, London</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl bg-cream p-6">
                <h3 className="font-display text-lg font-semibold text-navy">The Challenge</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  A 150-room luxury hotel needed reliable daily linen service with same-day turnaround for guest garments.
                </p>
              </div>

              <div className="rounded-2xl bg-mint p-6">
                <h3 className="font-display text-lg font-semibold text-navy">The Solution</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Cassio implemented twice-daily pickups, dedicated account management, and express guest services.
                </p>
              </div>

              <div className="rounded-2xl bg-lilac p-6">
                <h3 className="font-display text-lg font-semibold text-navy">The Results</h3>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>• 99.8% on-time delivery rate</li>
                  <li>• 40% cost reduction vs previous provider</li>
                  <li>• Guest satisfaction scores increased 25%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
