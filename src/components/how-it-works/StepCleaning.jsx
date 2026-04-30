import { CheckCircle, Leaf, Award } from "lucide-react";

const features = [
  { Icon: CheckCircle, text: "Expert inspection and stain treatment" },
  { Icon: Leaf, text: "Eco-friendly cleaning with biodegradable solvents" },
  { Icon: Award, text: "Hand-finished pressing for perfect results" }
];

export function StepCleaning() {
  return (
    <section className="flex h-screen items-center bg-lilac">
      <div className="mx-auto w-full max-w-7xl px-6 py-8">
        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand font-display text-lg font-bold text-white">
              3
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-navy md:text-5xl">
              Cleaning specialists at work
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Your garments are in expert hands at Cassio Dry Cleaners. Our trained specialists carefully inspect each item, treat stains, and use eco-friendly cleaning methods tailored to every fabric type.
            </p>

            <div className="mt-6 space-y-3">
              {features.map((feature) => (
                <div key={feature.text} className="flex items-start gap-3 rounded-xl bg-white p-3 shadow-soft">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-lilac text-brand">
                    <feature.Icon className="h-4 w-4" />
                  </div>
                  <p className="pt-1 text-sm text-navy">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 flex items-stretch">
            <div className="relative w-full overflow-hidden rounded-3xl shadow-card bg-navy">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                controls
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/assets/step-cleaning.mp4" type="video/mp4" />
                <source src="/assets/step-cleaning.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
