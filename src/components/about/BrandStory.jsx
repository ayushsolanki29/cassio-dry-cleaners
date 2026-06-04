import { FadeUp } from "@/components/common/Animate";

export function BrandStory() {
  return (
    <section id="story" className="bg-cream/40 py-20 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          
          <FadeUp delay={0.2} className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 sm:-inset-6 rounded-3xl bg-mint/20 -rotate-3 transition-transform hover:rotate-0 duration-500" />
            <img
              src="/assets/home/c.jpeg"
              alt="Cassio Dry Cleaners story"
              className="relative z-10 w-full aspect-[4/5] object-cover rounded-3xl shadow-card"
            />
          </FadeUp>

          <FadeUp className="order-1 lg:order-2 space-y-8">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-brand">Our journey</span>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
                Built on quality and trust.
              </h2>
            </div>

            <div className="space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
              <p className="first-letter:float-left first-letter:mr-3 first-letter:-mt-1 first-letter:text-6xl md:first-letter:text-7xl first-letter:font-display first-letter:font-bold first-letter:text-brand first-letter:leading-none">
                Cassio Dry Cleaners was founded in 2018 by Maria Cassio, a third-generation dry cleaner who saw an opportunity to bring traditional craftsmanship into the modern age. Starting with a single location on Cassiobury Dr, Maria's vision was simple: combine expert garment care with the convenience Watford's busy professionals needed.
              </p>

              <p>
                What set Cassio apart from day one was our commitment to eco-friendly practices. While other cleaners relied on harsh chemicals, we invested in biodegradable solvents and water-saving technology. Our customers noticed the difference—not just in how their clothes looked, but in how they felt about their environmental impact.
              </p>

              <div className="rounded-2xl bg-white p-6 md:p-8 shadow-sm border border-border/40 my-8">
                <p className="font-display text-lg md:text-xl font-medium text-navy leading-relaxed italic">
                  "Today, Cassio serves over 5K customers across Watford, from individual households to major hotels and businesses. We've grown from that single shop to a network of facilities, but our core values remain unchanged: quality, convenience, and sustainability in everything we do."
                </p>
              </div>

              <p>
                Every garment that comes through our doors receives the same meticulous attention Maria gave to her first customers. That's the Cassio promise—and it's why Watforders trust us with their most valued pieces.
              </p>
            </div>
          </FadeUp>
          
        </div>
      </div>
    </section>
  );
}
