import { ArrowRight, Sparkles, Wind, Droplet, Crown, Heart, Package, Home, ShoppingBag } from "lucide-react";
import Link from "next/link";

const services = [
  { 
    title: "Dry Cleaning", 
    slug: "dry-cleaning",
    desc: "Expert care for suits, dresses, and delicate garments using eco-friendly solvents.", 
    img: "/assets/service-drycleaning.jpg", 
    bg: "bg-mint",
    Icon: Sparkles
  },
  { 
    title: "Wash & Fold", 
    slug: "wash-fold",
    desc: "Everyday laundry washed, dried, and neatly folded with precision.", 
    img: "/assets/service-washfold.jpg", 
    bg: "bg-sun",
    Icon: Droplet
  },
  { 
    title: "Ironing", 
    slug: "ironing",
    desc: "Crisp, professional pressing for shirts, trousers, and formal wear.", 
    img: "/assets/service-ironing.jpg", 
    bg: "bg-lilac",
    Icon: Wind
  },
  { 
    title: "Premium Care", 
    slug: "premium-care",
    desc: "White-glove handling for luxury, couture, and designer pieces.", 
    img: "/assets/service-premium.jpg", 
    bg: "bg-cream",
    Icon: Crown
  },
  { 
    title: "Wedding Dress", 
    slug: "wedding-dress",
    desc: "Specialized cleaning and preservation for bridal gowns and formal attire.", 
    img: "/assets/service-premium.jpg", 
    bg: "bg-mint",
    Icon: Heart
  },
  { 
    title: "Leather & Suede", 
    slug: "leather-suede",
    desc: "Expert treatment for leather jackets, suede coats, and accessories.", 
    img: "/assets/service-drycleaning.jpg", 
    bg: "bg-sun",
    Icon: Package
  },
  { 
    title: "Curtains & Home", 
    slug: "curtains-home",
    desc: "Professional cleaning for curtains, bedding, and household textiles.", 
    img: "/assets/section-towels.jpg", 
    bg: "bg-lilac",
    Icon: Home
  },
  { 
    title: "Shoe Care", 
    slug: "shoe-care",
    desc: "Deep cleaning, polishing, and restoration for all footwear types.", 
    img: "/assets/service-washfold.jpg", 
    bg: "bg-cream",
    Icon: ShoppingBag
  },
];

export function ServicesGrid() {
  return (
    <section id="services-grid" className="flex h-screen items-center bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-6">
        <div className="mb-6 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Complete care solutions</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            Every service you need, delivered with care
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Cassio Dry Cleaners offers comprehensive garment care for all your needs — from everyday essentials to luxury pieces.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-4 lg:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.title}
              href={`/services/${s.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-card"
            >
              <div className={`relative h-24 overflow-hidden ${s.bg}`}>
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute right-2 top-2 grid h-6 w-6 place-items-center rounded-full bg-white/90 text-brand shadow-soft">
                  <s.Icon className="h-3 w-3" />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-1 p-3">
                <h3 className="font-display text-base font-semibold text-navy">{s.title}</h3>
                <p className="text-xs text-muted-foreground">{s.desc.length > 60 ? s.desc.substring(0, 60) + '...' : s.desc}</p>
                <div className="mt-auto flex items-center justify-end pt-1">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary transition group-hover:gap-2">
                    Learn more
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
