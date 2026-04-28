import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import Link from "next/link";

export function ArticleHeader({ article }) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-6">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-brand"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <div className="mt-8">
          <div className="mb-4 inline-flex rounded-full bg-mint px-4 py-1.5 text-sm font-semibold text-brand">
            {article.category}
          </div>

          <h1 className="font-display text-4xl font-semibold leading-tight text-navy md:text-5xl lg:text-6xl">
            {article.title}
          </h1>

          <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
            {article.excerpt}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{article.readTime} read</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
