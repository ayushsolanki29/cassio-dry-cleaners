import { MapPin } from "lucide-react";

const boroughs = [
  { name: "Westminster", image: "/assets/service-premium.jpg", color: "bg-mint" },
  { name: "Camden", image: "/assets/service-drycleaning.jpg", color: "bg-sun" },
  { name: "Kensington & Chelsea", image: "/assets/service-ironing.jpg", color: "bg-lilac" },
  { name: "Islington", image: "/assets/service-washfold.jpg", color: "bg-cream" },
  { name: "Hackney", image: "/assets/section-towels.jpg", color: "bg-mint" },
  { name: "Tower Hamlets", image: "/assets/delivery.jpg", color: "bg-sun" },
  { name: "Southwark", image: "/assets/service-premium.jpg", color: "bg-lilac" },
  { name: "Wandsworth", image: "/assets/service-drycleaning.jpg", color: "bg-cream" }
];

export function FeaturedBoroughs() {
  return (
    <section className="flex h-screen items-center bg-cream">
      <div className="mx-auto w-full max-w-7xl px-6 py-8">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Featured areas</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            Popular London boroughs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Cassio Dry Cleaners serves these and many more neighborhoods across London
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {boroughs.map((borough) => (
            <div
              key={borough.name}
              className="group relative overflow-hidden rounded-3xl shadow-soft transition hover:-translate-y-1 hover:shadow-card"
            >
              <div className={`relative h-64 overflow-hidden ${borough.color}`}>
                <img
                  src={borough.image}
                  alt={borough.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy/40" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur">
                  <MapPin className="h-3 w-3" />
                  Available now
                </div>
                <h3 className="font-display text-xl font-semibold">{borough.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
