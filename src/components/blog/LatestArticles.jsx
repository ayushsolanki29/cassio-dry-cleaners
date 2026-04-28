import { Clock, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

const articles = [
  {
    title: "How to Remove Wine Stains from Delicate Fabrics",
    slug: "wine-stain-removal",
    excerpt: "Quick action is key when dealing with wine spills. Here's what to do.",
    category: "Garment Care",
    categoryColor: "bg-mint",
    image: "/assets/service-drycleaning.jpg",
    date: "April 20, 2026",
    readTime: "5 min"
  },
  {
    title: "Understanding Fabric Care Labels: A Complete Guide",
    slug: "fabric-care-labels",
    excerpt: "Decode those mysterious symbols on your clothing tags.",
    category: "Fabric Guide",
    categoryColor: "bg-sun",
    image: "/assets/service-washfold.jpg",
    date: "April 18, 2026",
    readTime: "7 min"
  },
  {
    title: "Best Dry Cleaners in East London: Local's Guide",
    slug: "east-london-guide",
    excerpt: "Discover the top-rated garment care services in East London.",
    category: "London Life",
    categoryColor: "bg-lilac",
    image: "/assets/hero-woman.jpg",
    date: "April 15, 2026",
    readTime: "6 min"
  },
  {
    title: "Eco-Friendly Dry Cleaning: What You Need to Know",
    slug: "eco-friendly-cleaning",
    excerpt: "How sustainable cleaning methods protect your clothes and the planet.",
    category: "Sustainability",
    categoryColor: "bg-mint",
    image: "/assets/section-towels.jpg",
    date: "April 12, 2026",
    readTime: "8 min"
  },
  {
    title: "A Day in the Life at Cassio Dry Cleaners",
    slug: "day-in-life",
    excerpt: "Go behind the scenes with our cleaning specialists.",
    category: "Behind the Scenes",
    categoryColor: "bg-sun",
    image: "/assets/service-ironing.jpg",
    date: "April 10, 2026",
    readTime: "4 min"
  },
  {
    title: "Wedding Dress Preservation: Expert Tips",
    slug: "wedding-dress-preservation",
    excerpt: "Protect your precious memories with proper bridal gown care.",
    category: "Garment Care",
    categoryColor: "bg-lilac",
    image: "/assets/service-premium.jpg",
    date: "April 8, 2026",
    readTime: "9 min"
  }
];

export function LatestArticles() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="font-display text-4xl font-semibold text-navy md:text-5xl">
            Latest articles
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.title}
              href={`/blog/${article.slug}`}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-card"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className={`absolute left-4 top-4 rounded-full ${article.categoryColor} px-3 py-1 text-xs font-semibold text-navy`}>
                  {article.category}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold leading-tight text-navy">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{article.excerpt}</p>

                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <div className="mt-auto pt-4">
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand transition group-hover:gap-2">
                    Read more
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
