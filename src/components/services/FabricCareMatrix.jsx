import { Check, X } from "lucide-react";

const matrix = [
  { fabric: "Cotton", drycleaning: true, washfold: true, ironing: true, premium: true },
  { fabric: "Silk", drycleaning: true, washfold: false, ironing: true, premium: true },
  { fabric: "Wool", drycleaning: true, washfold: false, ironing: true, premium: true },
  { fabric: "Linen", drycleaning: true, washfold: true, ironing: true, premium: true },
  { fabric: "Cashmere", drycleaning: true, washfold: false, ironing: false, premium: true },
  { fabric: "Leather", drycleaning: false, washfold: false, ironing: false, premium: true },
  { fabric: "Suede", drycleaning: false, washfold: false, ironing: false, premium: true },
  { fabric: "Polyester", drycleaning: true, washfold: true, ironing: true, premium: false },
];

export function FabricCareMatrix() {
  return (
    <section className="flex h-screen items-center bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-8">
        <div className="mb-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Fabric expertise</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            The right care for every fabric
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Cassio Dry Cleaners uses specialized treatments tailored to each fabric type, ensuring optimal results without damage.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-border bg-white shadow-soft">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-secondary">
                <th className="px-6 py-4 text-left font-display text-base font-semibold text-navy">Fabric Type</th>
                <th className="px-6 py-4 text-center font-display text-base font-semibold text-navy">Dry Cleaning</th>
                <th className="px-6 py-4 text-center font-display text-base font-semibold text-navy">Wash & Fold</th>
                <th className="px-6 py-4 text-center font-display text-base font-semibold text-navy">Ironing</th>
                <th className="px-6 py-4 text-center font-display text-base font-semibold text-navy">Premium Care</th>
              </tr>
            </thead>
            <tbody>
              {matrix.map((row, i) => (
                <tr key={row.fabric} className={i % 2 === 0 ? "bg-white" : "bg-secondary/30"}>
                  <td className="px-6 py-4 font-semibold text-navy">{row.fabric}</td>
                  <td className="px-6 py-4 text-center">
                    {row.drycleaning ? (
                      <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-mint text-brand">
                        <Check className="h-4 w-4" />
                      </span>
                    ) : (
                      <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-muted text-muted-foreground">
                        <X className="h-4 w-4" />
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {row.washfold ? (
                      <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-mint text-brand">
                        <Check className="h-4 w-4" />
                      </span>
                    ) : (
                      <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-muted text-muted-foreground">
                        <X className="h-4 w-4" />
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {row.ironing ? (
                      <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-mint text-brand">
                        <Check className="h-4 w-4" />
                      </span>
                    ) : (
                      <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-muted text-muted-foreground">
                        <X className="h-4 w-4" />
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {row.premium ? (
                      <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-mint text-brand">
                        <Check className="h-4 w-4" />
                      </span>
                    ) : (
                      <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-muted text-muted-foreground">
                        <X className="h-4 w-4" />
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
