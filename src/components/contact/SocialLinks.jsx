import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const socials = [
  { Icon: Facebook, name: "Facebook", handle: "@cassiocleaners" },
  { Icon: Twitter, name: "Twitter", handle: "@cassio_london" },
  { Icon: Instagram, name: "Instagram", handle: "@cassiodrycleaning" },
  { Icon: Linkedin, name: "LinkedIn", handle: "Cassio Dry Cleaners" },
  { Icon: Youtube, name: "YouTube", handle: "Cassio London" }
];

export function SocialLinks() {
  return (
    <section className="bg-cream py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Follow us</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            Connect with Cassio
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Stay updated with tips, offers, and behind-the-scenes content
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {socials.map((social) => (
            <a
              key={social.name}
              href="#"
              className="group flex flex-col items-center gap-3 rounded-2xl bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-card"
            >
              <div className="grid h-16 w-16 place-items-center rounded-full bg-secondary text-brand transition group-hover:bg-brand group-hover:text-white">
                <social.Icon className="h-8 w-8" />
              </div>
              <div className="text-center">
                <p className="font-display text-lg font-semibold text-navy">{social.name}</p>
                <p className="text-sm text-muted-foreground">{social.handle}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
