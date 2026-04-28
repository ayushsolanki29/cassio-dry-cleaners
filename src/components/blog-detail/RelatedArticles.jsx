import { ArrowRight } from "lucide-react";

const related = [
  {
    title: "How to Care for Cashmere Sweaters",
    category: "Garment Care",
    image: "/assets/service-washfold.jpg",
    categoryColor: "bg-mint"
  },
  {
    title: "Understanding Fabric Care Labels",
    category: "Fabric Guide",
    image: "/assets/service-drycleaning.jpg",
    categoryColor: "bg-sun"
  },
  {
    title: "Stain Removal Guide: Wine & Coffee",
    category: "Garment Care",
    image: "/assets/service-ironing.jpg",
    categoryColor: "bg-lilac"
  }
];

export function RelatedArticles() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="font-display text-4xl font-semibold text-navy md:text-5xl">
            Related articles
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {related.map((article) => (
            <article
              key={article.title}
              className="group overflow-hidden rounded-3xl border border-border bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-card"
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

              <div className="p-6">
                <h3 className="font-display text-xl font-semibold leading-tight text-navy">
                  {article.title}
                </h3>

                <div className="mt-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-brand transition hover:gap-2"
                  >
                    Read article
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
