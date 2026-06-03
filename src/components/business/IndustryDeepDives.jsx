"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Hotel, UtensilsCrossed, Briefcase } from "lucide-react";

const industriesData = [
  {
    id: "hotels",
    tabLabel: "Hotels & Hospitality",
    icon: Hotel,
    subtitle: "Hotels & Hospitality",
    title: "Premium service for hotel guests",
    desc: "Cassio Dry Cleaners understands the hospitality industry. We provide reliable, high-quality laundry services that keep your hotel running smoothly and your guests satisfied.",
    image: "/assets/section-towels.jpg",
    bgColor: "bg-mint",
    features: [
      "Daily linen and towel collection",
      "Guest dry cleaning services",
      "Express turnaround options",
      "Quality control inspections",
      "Eco-friendly fabric care",
      "Flexible scheduling"
    ]
  },
  {
    id: "restaurants",
    tabLabel: "Restaurants",
    icon: UtensilsCrossed,
    subtitle: "Restaurants & Hospitality",
    title: "Professional care for hospitality",
    desc: "Cassio Dry Cleaners keeps your restaurant staff looking sharp and your linens pristine. We understand the demands of the hospitality industry and deliver accordingly.",
    image: "/assets/service-ironing.jpg",
    bgColor: "bg-cream",
    features: [
      "Chef whites and kitchen uniforms",
      "Table linens and napkins",
      "Stain removal expertise",
      "Daily or weekly service",
      "Front-of-house uniforms",
      "Aprons and bar towels"
    ]
  },
  {
    id: "offices",
    tabLabel: "Offices",
    icon: Briefcase,
    subtitle: "Offices & Coworking",
    title: "Corporate laundry solutions",
    desc: "Cassio provides convenient laundry services for offices and coworking spaces. Keep your team looking professional with our corporate garment care solutions.",
    image: "/assets/service-premium.jpg",
    bgColor: "bg-sun/20",
    features: [
      "Corporate uniform cleaning",
      "Executive garment care",
      "Bulk order discounts",
      "Flexible pickup schedules",
      "Individual employee accounts",
      "Invoicing and reporting"
    ]
  }
];

export function IndustryDeepDives() {
  const [activeTab, setActiveTab] = useState(industriesData[0].id);

  const activeData = industriesData.find((data) => data.id === activeTab);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header and Tabs */}
        <div className="mb-12 flex flex-col items-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand mb-3">Industry Solutions</span>
          <h2 className="font-display text-3xl font-semibold text-navy md:text-5xl text-center mb-10">
            Tailored for your sector
          </h2>
          
          <div className="w-full overflow-x-auto pb-2 -mb-2 scrollbar-hide">
            <div className="flex w-max mx-auto md:w-fit justify-start md:justify-center gap-2 sm:gap-3 bg-cream p-1.5 sm:p-2 rounded-full border border-border/50">
              {industriesData.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex shrink-0 items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    activeTab === tab.id 
                      ? "bg-white text-brand shadow-sm" 
                      : "text-muted-foreground hover:text-navy hover:bg-white/50"
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  {tab.tabLabel}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-cream/40 rounded-3xl p-6 md:p-12 border border-border/40 shadow-sm relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid items-center gap-10 lg:grid-cols-2 relative z-10"
            >
              
              {/* Text Content */}
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand">
                  {activeData.subtitle}
                </span>
                <h3 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl leading-tight">
                  {activeData.title}
                </h3>
                <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                  {activeData.desc}
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {activeData.features.map((feature, idx) => (
                    <motion.div 
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx, duration: 0.3 }}
                      className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm border border-border/30"
                    >
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                        <Check className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-medium text-navy">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Image Visual */}
              <div className="relative w-full aspect-[4/3] lg:aspect-square max-h-[500px]">
                <div className={`absolute inset-0 rounded-3xl ${activeData.bgColor} blur-2xl opacity-60 -z-10 transform scale-105`} />
                <img
                  src={activeData.image}
                  alt={activeData.title}
                  className="w-full h-full object-cover rounded-3xl shadow-card"
                />
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
