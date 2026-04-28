import { Target, Heart, Leaf } from "lucide-react";

const values = [
  {
    title: "Quality First",
    desc: "We treat every garment with expert care, using professional techniques and equipment to deliver exceptional results every time.",
    Icon: Target,
    color: "bg-mint"
  },
  {
    title: "Customer Care",
    desc: "Your satisfaction is our priority. From pickup to delivery, we're committed to making your experience seamless and stress-free.",
    Icon: Heart,
    color: "bg-sun"
  },
  {
    title: "Sustainability",
    desc: "We're dedicated to protecting the planet with eco-friendly cleaning methods, biodegradable products, and responsible practices.",
    Icon: Leaf,
    color: "bg-lilac"
  }
];

export function MissionValues() {
  return (
    <section className="bg-cream py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">What drives us</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            Our mission & values
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            The principles that guide everything we do at Cassio Dry Cleaners
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="rounded-3xl bg-white p-8 shadow-soft">
              <div className={`mb-6 inline-grid h-16 w-16 place-items-center rounded-2xl ${value.color} text-brand`}>
                <value.Icon className="h-8 w-8" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-navy">{value.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
