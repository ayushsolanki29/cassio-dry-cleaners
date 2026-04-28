export function BrandStory() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative">
            <div className="blob absolute inset-0 bg-mint" />
            <img
              src="/assets/hero-woman.jpg"
              alt="Cassio Dry Cleaners story"
              className="relative z-10 w-full rounded-3xl object-cover shadow-card"
            />
          </div>

          <div className="space-y-6">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-brand">Our journey</span>
              <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
                Built on quality and trust
              </h2>
            </div>

            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Cassio Dry Cleaners was founded in 2018 by Maria Cassio, a third-generation dry cleaner who saw an opportunity to bring traditional craftsmanship into the modern age. Starting with a single location in Shoreditch, Maria's vision was simple: combine expert garment care with the convenience London's busy professionals needed.
              </p>

              <p>
                What set Cassio apart from day one was our commitment to eco-friendly practices. While other cleaners relied on harsh chemicals, we invested in biodegradable solvents and water-saving technology. Our customers noticed the difference—not just in how their clothes looked, but in how they felt about their environmental impact.
              </p>

              <p>
                Today, Cassio serves over 50,000 customers across London, from individual households to major hotels and businesses. We've grown from that single shop to a network of facilities, but our core values remain unchanged: quality, convenience, and sustainability in everything we do.
              </p>

              <p>
                Every garment that comes through our doors receives the same meticulous attention Maria gave to her first customers. That's the Cassio promise—and it's why Londoners trust us with their most valued pieces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
