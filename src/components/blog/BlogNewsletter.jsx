import { Mail } from "lucide-react";

export function BlogNewsletter() {
  return (
    <section className="bg-lilac py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="mb-6 inline-grid h-16 w-16 place-items-center rounded-2xl bg-brand text-white">
          <Mail className="h-8 w-8" />
        </div>

        <h2 className="font-display text-4xl font-semibold text-navy md:text-5xl">
          Get garment care tips in your inbox
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Subscribe to the Cassio newsletter for expert advice, exclusive offers, and the latest from our blog.
        </p>

        <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-full border border-border bg-white px-6 py-4 text-base text-navy placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand"
          />
          <button
            type="submit"
            className="rounded-full bg-brand px-8 py-4 text-base font-semibold text-white shadow-soft transition hover:scale-105"
          >
            Subscribe
          </button>
        </form>

        <p className="mt-4 text-sm text-muted-foreground">
          No spam, unsubscribe anytime. Read our <a href="#" className="text-brand hover:underline">privacy policy</a>.
        </p>
      </div>
    </section>
  );
}
