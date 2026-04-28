import { ArrowRight } from "lucide-react";

const services = [
  { title: "Dry cleaning", desc: "Specialised care for suits, dresses & delicate garments.", img: "/assets/service-drycleaning.jpg", bg: "bg-mint" },
  { title: "Wash & fold", desc: "Everyday laundry washed, dried and neatly folded.", img: "/assets/service-washfold.jpg", bg: "bg-sun" },
  { title: "Ironing", desc: "Crisp, professional pressing for shirts and trousers.", img: "/assets/service-ironing.jpg", bg: "bg-lilac" },
  { title: "Premium care", desc: "White-glove handling for luxury & couture pieces.", img: "/assets/service-premium.jpg", bg: "bg-cream" },
];

export function Services() {
  return (
    <section id="services" className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Our services</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            Professional garment care for every need
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-card"
            >
              <div className={`relative h-48 overflow-hidden ${s.bg}`}>
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="font-display text-xl font-semibold text-navy">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
                <div className="mt-auto flex items-center justify-end pt-2">
                  <a href="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Order
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
