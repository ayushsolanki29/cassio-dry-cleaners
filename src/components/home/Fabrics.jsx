import { Award, Shield, Droplets, Wind } from "lucide-react";

const fabricTypes = [
  { 
    name: "Cotton & Linen", 
    image: "/assets/service-washfold.jpg", 
    description: "Natural fibers treated with gentle care",
    icon: Wind,
    color: "from-mint to-mint/70"
  },
  { 
    name: "Silk & Satin", 
    image: "/assets/service-premium.jpg", 
    description: "Delicate luxury fabrics handled by experts",
    icon: Award,
    color: "from-lilac to-lilac/70"
  },
  { 
    name: "Wool & Cashmere", 
    image: "/assets/service-drycleaning.jpg", 
    description: "Premium materials with specialized cleaning",
    icon: Shield,
    color: "from-sun to-sun/70"
  },
  { 
    name: "Synthetic & Blends", 
    image: "/assets/service-ironing.jpg", 
    description: "Modern fabrics with advanced care techniques",
    icon: Droplets,
    color: "from-cream to-cream/70"
  }
];

const fabricFeatures = [
  "Temperature-controlled cleaning",
  "pH-balanced solutions", 
  "Fabric-specific treatments",
  "Color protection guarantee"
];

export function Fabrics() {
  return (
    <section className="flex h-screen items-center bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-8">
        <div className="grid h-full items-center gap-8 lg:grid-cols-2">
          {/* Left Content */}
          <div className="flex h-full flex-col justify-center space-y-6">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-2 text-sm font-semibold text-brand">
                <Award className="h-4 w-4" />
                Fabric Expertise
              </span>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">
                Every fabric deserves expert care
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                From everyday cotton to luxury cashmere, our specialists understand the unique needs of every material in your wardrobe.
              </p>
            </div>

            {/* Fabric Features */}
            <div className="grid grid-cols-2 gap-3">
              {fabricFeatures.map((feature, index) => (
                <div key={feature} className="flex items-center gap-3 rounded-2xl bg-cream p-3 shadow-soft">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand">
                    <span className="font-display text-sm font-bold text-white">{index + 1}</span>
                  </div>
                  <p className="text-sm font-medium text-navy">{feature}</p>
                </div>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="rounded-3xl bg-navy p-5 text-white">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">100% Fabric Safety</h3>
                  <p className="text-sm text-white/90">Guaranteed protection for all fabric types</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Fabric Grid */}
          <div className="flex h-full flex-col justify-center">
            <div className="grid grid-cols-2 gap-4">
              {fabricTypes.map((fabric, index) => (
                <div
                  key={fabric.name}
                  className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${fabric.color} p-5 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-card ${
                    index === 0 || index === 3 ? 'h-48' : 'h-40'
                  }`}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-20">
                    <img
                      src={fabric.image}
                      alt={fabric.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <fabric.icon className="h-6 w-6 text-navy" />
                      <div className="rounded-full bg-white/30 p-1.5">
                        <div className="h-2 w-2 rounded-full bg-navy" />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-display text-lg font-bold text-navy">
                        {fabric.name}
                      </h3>
                      <p className="mt-1 text-xs text-navy/80">
                        {fabric.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
