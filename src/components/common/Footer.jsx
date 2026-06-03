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
      { name: "Curtains & Home", href: "/services/curtains-home" }
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "How It Works", href: "/how-it-works" },
      { name: "Business Services", href: "/business" }
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
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          
          <div className="lg:max-w-sm">
            <div className="flex items-center gap-3">
              <img src="/assets/cassio-logo.jpg" alt="Cassio Dry Cleaners" className="h-10 w-10 md:h-12 md:w-12 rounded-full ring-2 ring-white/20" />
              <span className="font-display text-xl md:text-2xl font-semibold">Cassio Dry Cleaners<span className="text-brand">.</span></span>
            </div>
            <p className="mt-4 text-sm text-white/70">
              Premium garment care, picked up at your door. Loved by thousands across Watford.
            </p>
            <a 
              href="https://maps.google.com/?q=166+Cassiobury+Dr,+Watford+WD17+3AJ,+UK" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-2 block text-sm text-white/70 hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              166 Cassiobury Dr, Watford WD17 3AJ, United Kingdom
            </a>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a key={social.label} href={social.href} aria-label={social.label} className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-brand">
                  <social.Icon className="h-4 w-4 md:h-5 md:w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-12">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="font-display text-base md:text-lg font-semibold text-cream">{c.title}</h4>
                <ul className="mt-4 space-y-2 md:space-y-3 text-sm text-white/70">
                  {c.links.map((l) => (
                    <li key={l.name}><a href={l.href} className="transition hover:text-cream">{l.name}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs md:text-sm text-white/60 sm:flex-row">
          <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} Cassio Dry Cleaners. All rights reserved.</p>
          <div className="flex gap-4 md:gap-6">
            <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

