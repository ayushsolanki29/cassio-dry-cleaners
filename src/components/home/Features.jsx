const features = [
  { 
    title: "Fabric-specific cleaning", 
    desc: "Each garment is treated based on its material and care label.",
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&q=80",
    color: "bg-mint"
  },
  { 
    title: "Stain removal expertise", 
    desc: "Specialised treatments to lift stubborn stains without damage.",
    image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=800&q=80",
    color: "bg-sun"
  },
  { 
    title: "Eco-safe chemicals", 
    desc: "Biodegradable solvents that protect both clothes and planet.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    color: "bg-lilac"
  },
  { 
    title: "Luxury garment handling", 
    desc: "White-glove service for suits, gowns and couture pieces.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    color: "bg-cream"
  },
];

export function Features() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Premium features</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            Built around your wardrobe.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-3xl border border-border shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-card"
            >
              {/* Image Background - Default state (visible) */}
              <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0">
                <img 
                  src={f.image} 
                  alt={f.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              </div>
              
              {/* Light color - Shows on hover */}
              <div className={`absolute inset-0 ${f.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
              
              {/* Content - Centered */}
              <div className="relative z-10 flex min-h-[280px] flex-col items-center justify-center p-7 text-center">
                <h3 className="font-display text-xl font-semibold text-white transition-all duration-300 group-hover:scale-110 group-hover:text-navy">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm text-white/90 transition-all duration-300 group-hover:text-muted-foreground">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
