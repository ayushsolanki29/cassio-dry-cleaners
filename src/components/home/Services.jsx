import { ArrowRight } from "lucide-react";
import { FadeUp, StaggerList, StaggerItem } from "@/components/common/Animate";

const services = [
  { title: "Dry cleaning", desc: "Specialised care for suits, dresses & delicate garments.", img: "/assets/home/s1.jpeg", accent: "bg-mint", dot: "bg-primary" },
  { title: "Wash & fold", desc: "Everyday laundry washed, dried and neatly folded.", img: "/assets/home/s2.jpeg", accent: "bg-sun", dot: "bg-brand" },
  { title: "Ironing", desc: "Crisp, professional pressing for shirts and trousers.", img: "/assets/home/s3.jpeg", accent: "bg-lilac", dot: "bg-navy" },
  { title: "Premium care", desc: "White-glove handling for luxury & couture pieces.", img: "/assets/home/s4.jpeg", accent: "bg-cream", dot: "bg-primary" },
];

export function Services() {
  return (
    <section id="services" className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-6">

        <FadeUp className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">Our services</span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-5xl">
              Professional garment care for every need
            </h2>
          </div>
          <a
            href="/services"
            className="self-start inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-soft transition hover:scale-105 md:self-auto"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </a>
        </FadeUp>

        <StaggerList className="grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-card">
                <div className="relative h-36 overflow-hidden md:h-48">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent" />
                </div>
                <div className={`h-0.5 w-full ${s.accent} opacity-60`} />
                <div className="flex flex-1 flex-col gap-1.5 p-3 md:gap-2 md:p-5">
                  <div className="flex items-center gap-2">
                    <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${s.dot}`} />
                    <h3 className="font-display text-sm font-semibold text-navy md:text-lg">{s.title}</h3>
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground md:text-sm">{s.desc}</p>
                  <div className="mt-auto pt-2">
                    <a href="/services" className="inline-flex items-center gap-1 text-xs font-semibold text-primary md:text-sm">
                      Order
                      <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                    </a>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerList>

      </div>
    </section>
  );
}
