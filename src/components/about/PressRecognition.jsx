import { Quote } from "lucide-react";

const press = [
  { outlet: "Evening Standard", quote: "London's most innovative dry cleaning service", year: "2024" },
  { outlet: "Time Out London", quote: "Cassio is changing the game for garment care", year: "2023" },
  { outlet: "The Guardian", quote: "Eco-friendly and convenient - the future of dry cleaning", year: "2023" }
];

export function PressRecognition() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">In the news</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            Press & recognition
          </h2>
        </div>

       

        <div className="grid gap-6 md:grid-cols-3">
          {press.map((item) => (
            <div key={item.outlet} className="rounded-2xl border border-border bg-secondary p-6">
              <Quote className="mb-4 h-8 w-8 text-brand/20" />
              <p className="font-display text-lg leading-relaxed text-navy">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                <p className="font-semibold text-brand">{item.outlet}</p>
                <p className="text-sm text-muted-foreground">{item.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
