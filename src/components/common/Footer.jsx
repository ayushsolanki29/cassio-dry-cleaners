import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const cols = [
  { 
    title: "Services", 
    links: [
      { name: "Dry Cleaning", href: "/services/dry-cleaning" },
      { name: "Wash & Fold", href: "/services/wash-fold" },
      { name: "Ironing Service", href: "/services/ironing" },
      { name: "Premium Care", href: "/services/premium-care" },
      { name: "Wedding Dresses", href: "/services/wedding-dress" },
      { name: "Leather & Suede", href: "/services/leather-suede" },
      { name: "Curtains & Home", href: "/services/curtains-home" },
      { name: "Shoe Care", href: "/services/shoe-care" }
    ] 
  },
  { 
    title: "Company", 
    links: [
      { name: "About Us", href: "/about" },
      { name: "How It Works", href: "/how-it-works" },
      { name: "Areas Served", href: "/areas" },
      { name: "Business Services", href: "/business" },
      { name: "Blog", href: "/blog" }
    ] 
  },
  { 
    title: "Support", 
    links: [
      { name: "Contact Us", href: "/contact" },
      { name: "Services", href: "/services" },
      { name: "FAQs", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms & Conditions", href: "/terms" }
    ] 
  },
];

const socials = [
  { href: "#social", label: "Facebook", Icon: Facebook },
  { href: "#social", label: "Instagram", Icon: Instagram },
  { href: "#social", label: "Twitter", Icon: Twitter },
  { href: "#social", label: "LinkedIn", Icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img src="/assets/cassio-logo.jpg" alt="Cassio Dry Cleaners" className="h-12 w-12 rounded-full ring-2 ring-white/20" />
              <span className="font-display text-2xl font-semibold">Cassio<span className="text-brand">.</span></span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/70">
              Premium garment care, picked up at your door. Loved by thousands across London.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a key={social.label} href={social.href} aria-label={social.label} className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-brand">
                  <social.Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-display text-lg font-semibold text-cream">{c.title}</h4>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {c.links.map((l) => (
                  <li key={l.name}><a href={l.href} className="transition hover:text-cream">{l.name}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/60 md:flex-row">
          <p>&copy; 2026 Cassio Dry Cleaners. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
            <a href="/terms" className="hover:text-white">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

