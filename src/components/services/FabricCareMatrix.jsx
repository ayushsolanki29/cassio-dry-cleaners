import { Check, X } from "lucide-react";
import { FadeUp, StaggerList, StaggerItem } from "@/components/common/Animate";

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

const StatusIcon = ({ status }) => (
  status ? (
    <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-mint text-brand">
      <Check className="h-4 w-4" />
    </span>
  ) : (
    <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-muted text-muted-foreground">
      <X className="h-4 w-4" />
    </span>
  )
);

export function FabricCareMatrix() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <FadeUp className="mb-10 text-center md:mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Fabric expertise</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">
            The right care for every fabric
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            Cassio Dry Cleaners uses specialized treatments tailored to each fabric type, ensuring optimal results without damage.
          </p>
        </FadeUp>

        {/* Mobile Card Layout */}
        <StaggerList className="grid gap-4 md:hidden">
          {matrix.map((row) => (
            <StaggerItem key={row.fabric}>
              <div className="rounded-2xl border border-border bg-white p-5 shadow-soft">
                <h3 className="mb-4 border-b border-border/50 pb-3 font-display text-lg font-semibold text-navy">
                  {row.fabric}
                </h3>
                <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-sm">
                  <div className="flex items-center justify-between pr-2 border-r border-border/50">
                    <span className="text-muted-foreground">Dry Cleaning</span>
                    <StatusIcon status={row.drycleaning} />
                  </div>
                  <div className="flex items-center justify-between pl-2">
                    <span className="text-muted-foreground">Wash & Fold</span>
                    <StatusIcon status={row.washfold} />
                  </div>
                  <div className="flex items-center justify-between pr-2 border-r border-border/50">
                    <span className="text-muted-foreground">Ironing</span>
                    <StatusIcon status={row.ironing} />
                  </div>
                  <div className="flex items-center justify-between pl-2">
                    <span className="text-muted-foreground">Premium</span>
                    <StatusIcon status={row.premium} />
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerList>

        {/* Desktop Table Layout */}
        <FadeUp delay={0.2} className="hidden md:block overflow-hidden rounded-3xl border border-border bg-white shadow-soft">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-secondary">
                <th className="px-6 py-5 text-left font-display text-base font-semibold text-navy">Fabric Type</th>
                <th className="px-6 py-5 text-center font-display text-base font-semibold text-navy">Dry Cleaning</th>
                <th className="px-6 py-5 text-center font-display text-base font-semibold text-navy">Wash & Fold</th>
                <th className="px-6 py-5 text-center font-display text-base font-semibold text-navy">Ironing</th>
                <th className="px-6 py-5 text-center font-display text-base font-semibold text-navy">Premium Care</th>
              </tr>
            </thead>
            <tbody>
              {matrix.map((row, i) => (
                <tr key={row.fabric} className={i % 2 === 0 ? "bg-white" : "bg-secondary/30 transition-colors hover:bg-secondary/50"}>
                  <td className="px-6 py-4 font-semibold text-navy">{row.fabric}</td>
                  <td className="px-6 py-4 text-center">
                    <StatusIcon status={row.drycleaning} />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <StatusIcon status={row.washfold} />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <StatusIcon status={row.ironing} />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <StatusIcon status={row.premium} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeUp>
      </div>
    </section>
  );
}
