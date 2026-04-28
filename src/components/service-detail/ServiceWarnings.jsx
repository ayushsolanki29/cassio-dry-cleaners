import { AlertTriangle } from "lucide-react";

export function ServiceWarnings({ service }) {
  if (!service.warnings || service.warnings.length === 0) return null;

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border-2 border-brand/20 bg-sun/30 p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand text-white">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <h2 className="font-display text-2xl font-semibold text-navy">Important to know</h2>
          </div>

          <ul className="space-y-3">
            {service.warnings.map((warning, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand" />
                <span className="text-base text-navy">{warning}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
