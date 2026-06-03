import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { FadeUp, StaggerList, StaggerItem } from "@/components/common/Animate";

const socials = [
  { Icon: Facebook, name: "Facebook", handle: "@cassiocleaners" },
  { Icon: Twitter, name: "Twitter", handle: "@cassio_Watford" },
  { Icon: Instagram, name: "Instagram", handle: "@cassiodrycleaning" },
  { Icon: Linkedin, name: "LinkedIn", handle: "Cassio Dry Cleaners" },
  { Icon: Youtube, name: "YouTube", handle: "Cassio Watford" }
];

export function SocialLinks() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp className="mb-10 md:mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Follow us</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            Connect with Cassio
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Stay updated with tips, offers, and behind-the-scenes content
          </p>
        </FadeUp>

        <StaggerList className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {socials.map((social) => (
            <StaggerItem
              key={social.name}
              className="w-[140px] sm:w-[160px] md:w-auto"
            >
              <a
                href="#"
                className="group flex h-full flex-col items-center justify-center gap-3 rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-8 border border-border/40 shadow-sm transition-all hover:-translate-y-1 hover:shadow-card hover:border-brand/30"
              >
                <div className="grid h-14 w-14 sm:h-16 sm:w-16 place-items-center rounded-2xl bg-secondary text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white shadow-sm">
                  <social.Icon className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <div className="text-center">
                  <p className="font-display text-base sm:text-lg font-semibold text-navy group-hover:text-brand transition-colors">{social.name}</p>
                  <p className="mt-1 text-xs sm:text-sm text-muted-foreground break-words w-full px-2">{social.handle}</p>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </section>
  );
}
