import { ArrowRight, TrendingUp } from "lucide-react";

const guides = [
  { title: "How to Care for Cashmere Sweaters", views: "12.5K views" },
  { title: "Stain Removal Guide: Coffee, Wine & More", views: "10.2K views" },
  { title: "When to Dry Clean vs. Wash at Home", views: "9.8K views" },
  { title: "Leather Jacket Care: Complete Guide", views: "8.4K views" },
  { title: "Wedding Dress Cleaning & Preservation", views: "7.9K views" }
];

export function PopularGuides() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <TrendingUp className="h-8 w-8 text-brand" />
          <h2 className="font-display text-4xl font-semibold text-navy md:text-5xl">
            Popular guides
          </h2>
        </div>

        <div className="space-y-3">
          {guides.map((guide, i) => (
            <a
              key={guide.title}
              href="#"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-white p-6 shadow-soft transition hover:border-brand hover:shadow-card"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-secondary font-display text-lg font-bold text-brand">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-navy">{guide.title}</h3>
                  <p className="text-sm text-muted-foreground">{guide.views}</p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-brand transition group-hover:translate-x-1" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
