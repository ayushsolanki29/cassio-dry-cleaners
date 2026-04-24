import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <img src="/assets/cassio-logo.jpg" alt="Cassio Dry Cleaners" className="h-11 w-11 rounded-full ring-2 ring-white/30" />
          <span className="font-display text-2xl font-semibold tracking-tight">
            Cassio<span className="text-cream">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {["Services", "How it works", "Areas", "Business"].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s/g, "-")}`} className="text-sm font-medium text-white/90 transition hover:text-white">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#login" className="hidden text-sm font-medium text-white/90 hover:text-white sm:inline">Log in</a>
          <a
            href="#book"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary shadow-soft transition hover:scale-105 hover:shadow-pop"
          >
            Book now
          </a>
        </div>
      </div>
    </header>
  );
}
