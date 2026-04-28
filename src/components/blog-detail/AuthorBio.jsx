export function AuthorBio({ article }) {
  return (
    <section className="bg-white py-8">
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-3xl border border-border bg-cream p-8">
          <div className="flex items-start gap-6">
            <img
              src="/assets/testimonial-1.jpg"
              alt={article.author}
              className="h-20 w-20 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="font-display text-xl font-semibold text-navy">
                About {article.author}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Senior Garment Care Specialist at Cassio Dry Cleaners with over 10 years of experience in fabric care and restoration. Passionate about educating customers on proper garment maintenance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
