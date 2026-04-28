const garments = [
  { img: "/assets/service-drycleaning.jpg", title: "Formal suits", desc: "Expert pressing & finishing" },
  { img: "/assets/service-premium.jpg", title: "Designer dresses", desc: "Luxury fabric care" },
  { img: "/assets/service-washfold.jpg", title: "Everyday wear", desc: "Fresh & folded" },
  { img: "/assets/service-ironing.jpg", title: "Business shirts", desc: "Crisp & professional" },
  { img: "/assets/section-towels.jpg", title: "Home textiles", desc: "Curtains & bedding" },
  { img: "/assets/delivery.jpg", title: "Fast delivery", desc: "24-48 hour service" },
];

export function GarmentGallery() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Our work</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            Exceptional results, every time
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            See the Cassio Dry Cleaners difference — from everyday essentials to luxury pieces, we treat every garment with care.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {garments.map((garment, i) => (
            <div
              key={garment.title}
              className={`group relative overflow-hidden rounded-3xl ${
                i === 0 || i === 5 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={garment.img}
                  alt={garment.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-6 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="font-display text-xl font-semibold">{garment.title}</h3>
                <p className="mt-1 text-sm text-white/80">{garment.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
