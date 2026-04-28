import { Clock } from "lucide-react";

const schedule = [
  { day: "Monday", hours: "8:00 AM - 8:00 PM", available: true },
  { day: "Tuesday", hours: "8:00 AM - 8:00 PM", available: true },
  { day: "Wednesday", hours: "8:00 AM - 8:00 PM", available: true },
  { day: "Thursday", hours: "8:00 AM - 8:00 PM", available: true },
  { day: "Friday", hours: "8:00 AM - 8:00 PM", available: true },
  { day: "Saturday", hours: "9:00 AM - 6:00 PM", available: true },
  { day: "Sunday", hours: "10:00 AM - 4:00 PM", available: true }
];

export function SupportHours() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-grid h-14 w-14 place-items-center rounded-2xl bg-brand text-white">
            <Clock className="h-7 w-7" />
          </div>
          <h2 className="font-display text-4xl font-semibold text-navy md:text-5xl">
            Customer support hours
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Our team is available to help you during these hours
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-soft">
          {schedule.map((item, i) => (
            <div
              key={item.day}
              className={`flex items-center justify-between px-8 py-5 ${
                i !== schedule.length - 1 ? "border-b border-border" : ""
              } ${i % 2 === 0 ? "bg-white" : "bg-secondary"}`}
            >
              <span className="font-display text-lg font-semibold text-navy">{item.day}</span>
              <div className="flex items-center gap-3">
                <span className="text-base text-muted-foreground">{item.hours}</span>
                {item.available && (
                  <span className="rounded-full bg-mint px-3 py-1 text-xs font-semibold text-brand">
                    Available
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
