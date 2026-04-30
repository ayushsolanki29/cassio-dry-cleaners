import { Hotel, Dumbbell, UtensilsCrossed, Star, Briefcase, Activity } from "lucide-react";

const industries = [
  { 
    title: "Hotels", 
    desc: "Linen, towels, and guest garment services",
    Icon: Hotel,
    color: "bg-mint"
  },
  { 
    title: "Gyms & Studios", 
    desc: "Towels, uniforms, and member services",
    Icon: Dumbbell,
    color: "bg-sun"
  },
  { 
    title: "Restaurants", 
    desc: "Chef whites, aprons, and table linens",
    Icon: UtensilsCrossed,
    color: "bg-lilac"
  },
  { 
    title: "Spas & Salons", 
    desc: "Robes, towels, and treatment linens",
    Icon: Star,
    color: "bg-cream"
  },
  { 
    title: "Offices", 
    desc: "Uniforms, workwear, and corporate garments",
    Icon: Briefcase,
    color: "bg-mint"
  },
  { 
    title: "Healthcare", 
    desc: "Scrubs, lab coats, and medical linens",
    Icon: Activity,
    color: "bg-sun"
  }
];

export function IndustriesGrid() {
  return (
    <section id="industries" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Our expertise</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            Industries Cassio serves
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Specialized laundry solutions tailored to your business needs
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className={`group rounded-3xl ${industry.color} p-8 text-center transition hover:-translate-y-1 hover:shadow-card`}
            >
              <div className="mb-4 inline-grid h-16 w-16 place-items-center rounded-2xl bg-white text-brand shadow-soft">
                <industry.Icon className="h-8 w-8" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-navy">{industry.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{industry.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
