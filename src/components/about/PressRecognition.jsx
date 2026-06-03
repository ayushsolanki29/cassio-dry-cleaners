import { Quote } from "lucide-react";
import { FadeUp, StaggerList, StaggerItem } from "@/components/common/Animate";

const press = [
  { outlet: "Evening Standard", quote: "Watford's most innovative dry cleaning service", year: "2024" },
  { outlet: "Time Out Watford", quote: "Cassio is changing the game for garment care", year: "2023" },
  { outlet: "The Guardian", quote: "Eco-friendly and convenient - the future of dry cleaning", year: "2023" }
];

export function PressRecognition() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">In the news</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            Press & recognition
          </h2>
        </FadeUp>

       

        <StaggerList className="flex overflow-x-auto md:grid md:grid-cols-3 gap-4 md:gap-6 pb-8 -mb-8 scrollbar-hide snap-x snap-mandatory px-6 -mx-6 sm:px-0 sm:mx-0 scroll-pl-6 sm:scroll-pl-0">
          {press.map((item) => (
            <StaggerItem key={item.outlet} className="w-[85vw] min-w-[280px] md:w-auto shrink-0 snap-center rounded-2xl border border-border bg-secondary p-6 sm:p-8 flex flex-col transition-transform hover:-translate-y-1 hover:shadow-card">
              <Quote className="mb-4 h-6 w-6 sm:h-8 sm:w-8 text-brand/30" />
              <p className="font-display text-base sm:text-lg leading-relaxed text-navy flex-1">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
                <p className="font-semibold text-brand text-sm sm:text-base">{item.outlet}</p>
                <p className="text-xs sm:text-sm font-medium text-muted-foreground">{item.year}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </section>
  );
}
