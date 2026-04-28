import { Check } from "lucide-react";

const guarantees = [
  "100% satisfaction guaranteed or your money back",
  "Full insurance coverage on every garment",
  "Expert stain removal - we treat every spot",
  "Fabric-safe cleaning methods for all materials",
  "Hand-finished pressing for perfect results",
  "Free re-cleaning if you're not satisfied",
  "Eco-friendly products safe for you and the planet",
  "Professional care from Cassio specialists"
];

export function QualityGuarantee() {
  return (
    <section className="bg-mint py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Our promise</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            Quality guarantee at Cassio
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We stand behind every garment we clean with our comprehensive quality guarantee
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {guarantees.map((guarantee) => (
            <div key={guarantee} className="flex items-start gap-3 rounded-xl bg-white p-5 shadow-soft">
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-white">
                <Check className="h-4 w-4" />
              </span>
              <p className="text-sm font-medium text-navy">{guarantee}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
