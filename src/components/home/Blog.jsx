import Link from "next/link";
import { ArrowRight } from "lucide-react";

const posts = [
  { tag: "Laundry tips", title: "5 habits that keep your wardrobe fresh for years", date: "Apr 12, 2026", img: "/assets/blog-1.jpg" },
  { tag: "Fabric care", title: "How to wash silk without ruining it", date: "Apr 04, 2026", img: "/assets/blog-2.jpg" },
  { tag: "Stain removal", title: "The complete guide to lifting wine stains", date: "Mar 28, 2026", img: "/assets/blog-3.jpg" },
];

export function Blog() {
  return (
    <section id="blog" className="bg-secondary py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">From the blog</span>
            <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">Care tips & stories</h2>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-2 font-display font-semibold text-primary">
            All articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-3xl bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="space-y-3 p-6">
                <span className="inline-block rounded-full bg-cream px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand">{p.tag}</span>
                <h3 className="font-display text-xl font-semibold leading-snug text-navy transition group-hover:text-primary">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.date} - 4 min read</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
