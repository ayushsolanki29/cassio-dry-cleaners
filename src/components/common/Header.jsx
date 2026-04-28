import Link from "next/link";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Areas", href: "/#areas" },
  { label: "Business", href: "/#business" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/#blog" },
];

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

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-sm font-medium text-white/90 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary shadow-soft transition hover:scale-105 hover:shadow-pop"
          >
            Contact us
          </Link>
        </div>
      </div>
    </header>
  );
}
