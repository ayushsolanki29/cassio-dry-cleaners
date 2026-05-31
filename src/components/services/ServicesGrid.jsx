import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FadeUp, StaggerList, StaggerItem } from "@/components/common/Animate";

const services = [
  { 
    title: "Dry Cleaning", 
    slug: "dry-cleaning",
    desc: "Expert care for suits, dresses, and delicate garments using eco-friendly solvents.", 
    img: "/assets/service-drycleaning.jpg", 
    accent: "bg-mint",
    dot: "bg-primary"
  },
  { 
    title: "Wash & Fold", 
    slug: "wash-fold",
    desc: "Everyday laundry washed, dried, and neatly folded with precision.", 
    img: "/assets/service-washfold.jpg", 
    accent: "bg-sun",
    dot: "bg-brand"
  },
  { 
    title: "Ironing", 
    slug: "ironing",
    desc: "Crisp, professional pressing for shirts, trousers, and formal wear.", 
    img: "/assets/service-ironing.jpg", 
    accent: "bg-lilac",
    dot: "bg-navy"
  },
  { 
    title: "Premium Care", 
    slug: "premium-care",
    desc: "White-glove handling for luxury, couture, and designer pieces.", 
    img: "/assets/service-premium.jpg", 
    accent: "bg-cream",
    dot: "bg-primary"
  },
  { 
    title: "Wedding Dress", 
    slug: "wedding-dress",
    desc: "Specialized cleaning and preservation for bridal gowns and formal attire.", 
    img: "/assets/service-premium.jpg", 
    accent: "bg-mint",
    dot: "bg-brand"
  },
  { 
    title: "Leather & Suede", 
    slug: "leather-suede",
    desc: "Expert treatment for leather jackets, suede coats, and accessories.", 
    img: "/assets/service-drycleaning.jpg", 
    accent: "bg-sun",
    dot: "bg-navy"
  },
  { 
    title: "Curtains & Home", 
    slug: "curtains-home",
    desc: "Professional cleaning for curtains, bedding, and household textiles.", 
    img: "/assets/section-towels.jpg", 
    accent: "bg-lilac",
    dot: "bg-primary"
  }
];

export function ServicesGrid() {
  return (
    <section id="services-grid" className="flex min-h-screen items-center bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <FadeUp className="mb-10 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Complete care solutions</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-5xl">
            Every service you need, delivered with care
          </h2>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Cassio Dry Cleaners offers comprehensive garment care for all your needs — from everyday essentials to luxury pieces.
          </p>
        </FadeUp>

        <StaggerList className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <Link
                href={`/services/${s.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-card border border-border/40"
              >
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
                  <p className="text-xs leading-relaxed text-muted-foreground md:text-sm">
                    {s.desc.length > 70 ? s.desc.substring(0, 70) + '...' : s.desc}
                  </p>
                  <div className="mt-auto pt-2">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary transition group-hover:gap-2 md:text-sm">
                      Learn more
                      <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </section>
  );
}

