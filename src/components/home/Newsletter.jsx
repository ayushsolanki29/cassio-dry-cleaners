export function Newsletter() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-3xl bg-brand p-10 text-center text-white shadow-pop md:p-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-cream">Newsletter</span>
          <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">Get 20% off your first pickup</h2>
          <p className="mx-auto mt-3 max-w-md text-white/85">Join 50,000+ subscribers for fabric tips, exclusive offers and seasonal care guides.</p>

          <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="you@email.com"
              className="flex-1 rounded-full border-0 bg-white px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cream"
            />
            <button className="rounded-full bg-navy px-6 py-3.5 font-display font-semibold text-white transition hover:scale-105">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
