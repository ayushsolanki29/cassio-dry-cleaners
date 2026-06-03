import { Clock } from "lucide-react";
import { FadeUp, StaggerList, StaggerItem } from "@/components/common/Animate";

const schedule = [
  { day: "Monday", hours: "9:00 AM - 5:30 PM", available: true },
  { day: "Tuesday", hours: "9:00 AM - 5:30 PM", available: true },
  { day: "Wednesday", hours: "9:00 AM - 5:30 PM", available: true },
  { day: "Thursday", hours: "9:00 AM - 5:30 PM", available: true },
  { day: "Friday", hours: "9:00 AM - 5:30 PM", available: true },
  { day: "Saturday", hours: "9:00 AM - 5:30 PM", available: true },
  { day: "Sunday", hours: "Closed", available: false }
];

export function SupportHours() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <FadeUp className="mb-10 md:mb-16 text-center">
          <div className="mx-auto mb-4 inline-grid h-14 w-14 place-items-center rounded-2xl bg-mint/40 text-emerald-800 shadow-sm">
            <Clock className="h-7 w-7" />
          </div>
          <h2 className="font-display text-4xl font-semibold text-navy md:text-5xl">
            Customer support hours
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Our team is available to help you during these hours
          </p>
        </FadeUp>

        <StaggerList className="overflow-hidden rounded-3xl border border-border/50 bg-white shadow-card">
          {schedule.map((item, i) => (
            <StaggerItem
              key={item.day}
              className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-6 sm:px-8 py-5 sm:py-6 transition-colors hover:bg-cream/20 ${
                i !== schedule.length - 1 ? "border-b border-border/40" : ""
              }`}
            >
              <span className="font-display text-lg font-semibold text-navy">{item.day}</span>
              <div className="flex items-center gap-3">
                <span className="text-sm sm:text-base font-medium text-muted-foreground">{item.hours}</span>
                {item.available && (
                  <span className="rounded-full bg-mint/40 px-3 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-emerald-800">
                    Available
                  </span>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </section>
  );
}
