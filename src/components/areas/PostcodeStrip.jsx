const postcodes = [
  "E1", "E2", "E3", "E8", "E9", "E14", "E15", "E20",
  "EC1", "EC2", "EC3", "EC4",
  "N1", "N4", "N5", "N6", "N7", "N8", "N16", "N19",
  "NW1", "NW3", "NW5", "NW6", "NW8", "NW10",
  "SE1", "SE5", "SE8", "SE10", "SE11", "SE15", "SE16", "SE17",
  "SW1", "SW3", "SW5", "SW6", "SW7", "SW10", "SW11", "SW18",
  "W1", "W2", "W8", "W9", "W10", "W11", "W12", "W14",
  "WC1", "WC2"
];

export function PostcodeStrip() {
  return (
    <section className="flex h-screen items-center bg-navy py-8 text-white">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-sun">Postcode coverage</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-cream md:text-5xl">
            We serve these postcodes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Cassio Dry Cleaners covers all major London postcode areas
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {postcodes.map((code) => (
            <span
              key={code}
              className="inline-flex h-12 w-16 items-center justify-center rounded-xl bg-white/10 font-display text-lg font-bold text-cream backdrop-blur transition hover:bg-white/20"
            >
              {code}
            </span>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-base text-white/70">
            Plus many more areas across Greater London
          </p>
        </div>
      </div>
    </section>
  );
}
