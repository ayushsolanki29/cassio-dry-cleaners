import { Home, Heart, Sparkles } from "lucide-react";

const features = [
  { Icon: Home, text: "Convenient home pickup & delivery" },
  { Icon: Heart, text: "Personalized service for families" },
  { Icon: Sparkles, text: "Premium care for luxury garments" }
];

export function ResidentialHighlight() {
  return (
    <section className="flex h-screen items-center bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative">
            <div className="blob absolute inset-0 bg-lilac" />
            <img
              src="/assets/hero-woman.jpg"
              alt="Cassio residential service"
              className="relative z-10 w-full rounded-3xl object-cover shadow-card"
            />
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">Residential areas</span>
            <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
              Premium service for London homes
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From Notting Hill to Chelsea, Cassio Dry Cleaners brings professional garment care to London's finest residential neighborhoods. Enjoy the convenience of doorstep service with luxury-level quality.
            </p>

            <div className="mt-8 space-y-4">
              {features.map((feature) => (
                <div key={feature.text} className="flex items-start gap-4 rounded-xl bg-cream p-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white text-brand shadow-soft">
                    <feature.Icon className="h-5 w-5" />
                  </div>
                  <p className="pt-2 text-base text-navy">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
