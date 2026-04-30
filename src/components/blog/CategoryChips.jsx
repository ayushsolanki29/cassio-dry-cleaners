import { CheckCircle, Leaf, MapPin, Users, Camera } from "lucide-react";

const categories = [
  { name: "All Posts", Icon: CheckCircle, active: true },
  { name: "Garment Care", Icon: CheckCircle },
  { name: "Fabric Guide", Icon: CheckCircle },
  { name: "London Life", Icon: MapPin },
  { name: "Sustainability", Icon: Leaf },
  { name: "Behind the Scenes", Icon: Camera }
];

export function CategoryChips() {
  return (
    <section className="border-y border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${
                category.active
                  ? "bg-brand text-white shadow-soft"
                  : "bg-white text-navy hover:bg-cream"
              }`}
            >
              <category.Icon className="h-4 w-4" />
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
