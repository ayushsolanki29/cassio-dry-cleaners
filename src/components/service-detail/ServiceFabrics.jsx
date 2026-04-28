import { Sparkles } from "lucide-react";

export function ServiceFabrics({ service }) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Fabric care</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            Fabrics we specialize in
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Cassio Dry Cleaners has expertise in handling all types of fabrics with specialized care.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 md:grid-cols-5 lg:grid-cols-6">
          {service.fabrics.map((fabric, i) => {
            const colors = ["bg-mint", "bg-sun", "bg-lilac", "bg-cream"];
            const bgColor = colors[i % colors.length];
            
            return (
              <div
                key={fabric}
                className={`${bgColor} group rounded-2xl p-6 text-center transition hover:scale-105`}
              >
                <div className="mb-3 inline-grid h-10 w-10 place-items-center rounded-xl bg-white text-brand shadow-soft">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="font-display text-sm font-semibold text-navy">{fabric}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
