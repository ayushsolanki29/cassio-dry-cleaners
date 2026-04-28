import { Clock } from "lucide-react";

const timeline = [
  { time: "Day 1 - Morning", event: "Schedule & pickup", color: "bg-mint" },
  { time: "Day 1 - Afternoon", event: "Inspection & cleaning", color: "bg-sun" },
  { time: "Day 1 - Evening", event: "Pressing & packaging", color: "bg-lilac" },
  { time: "Day 2 - Morning", event: "Delivery to you", color: "bg-cream" }
];

export function TimelineStrip() {
  return (
    <section className="bg-navy py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-grid h-14 w-14 place-items-center rounded-2xl bg-cream text-brand">
            <Clock className="h-7 w-7" />
          </div>
          <h2 className="font-display text-4xl font-semibold text-cream md:text-5xl">
            From doorstep to doorstep in 24 hours
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Track your garments through every step of the Cassio Dry Cleaners process
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-8 hidden h-1 bg-white/20 md:block" />
          
          <div className="grid gap-6 md:grid-cols-4">
            {timeline.map((item, i) => (
              <div key={item.time} className="relative text-center">
                <div className={`relative z-10 mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full ${item.color} font-display text-2xl font-bold text-brand shadow-pop`}>
                  {i + 1}
                </div>
                <h3 className="font-display text-lg font-semibold text-cream">{item.time}</h3>
                <p className="mt-1 text-sm text-white/70">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
