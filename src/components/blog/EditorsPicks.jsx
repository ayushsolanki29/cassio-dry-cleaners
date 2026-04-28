import { Star, ArrowRight } from "lucide-react";
import Link from "next/link";

const picks = [
  {
    title: "10 Common Laundry Mistakes You're Probably Making",
    slug: "laundry-mistakes",
    excerpt: "Avoid these pitfalls to keep your clothes looking their best.",
    image: "/assets/service-washfold.jpg"
  },
  {
    title: "The Ultimate Guide to Storing Winter Coats",
    slug: "winter-coat-storage",
    excerpt: "Proper storage prevents damage and keeps coats fresh for next season.",
    image: "/assets/service-drycleaning.jpg"
  },
  {
    title: "Why Professional Dry Cleaning Beats Home Methods",
    slug: "professional-vs-home",
    excerpt: "Discover the science behind professional garment care.",
    image: "/assets/service-premium.jpg"
  }
];

export function EditorsPicks() {
  return (
    <section className="bg-cream py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <Star className="h-8 w-8 fill-brand text-brand" />
          <h2 className="font-display text-4xl font-semibold text-navy md:text-5xl">
            Editor's picks
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {picks.map((pick) => (
            <Link
              key={pick.title}
              href={`/blog/${pick.slug}`}
              className="group overflow-hidden rounded-3xl bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-card"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={pick.image}
                  alt={pick.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold leading-tight text-navy">
                  {pick.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{pick.excerpt}</p>
                <div className="mt-4">
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand transition group-hover:gap-2">
                    Read article
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
