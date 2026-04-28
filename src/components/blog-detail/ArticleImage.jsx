export function ArticleImage({ article }) {
  return (
    <section className="bg-secondary py-8">
      <div className="mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-3xl shadow-card">
          <img
            src={article.image}
            alt={article.title}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
