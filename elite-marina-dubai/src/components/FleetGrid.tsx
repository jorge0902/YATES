import React from "react";
import { motion } from "framer-motion";
import { Users, Bed, Anchor, Ruler } from "lucide-react";
import { InteractiveHoverButton } from "./InteractiveHoverButton";
import { Highlighter } from "./Highlighter";
import { ShineBorder } from "./ShineBorder";

const fleet = [
  {
    id: 1,
    name: "Super Yacht",
    length: "100ft",
    price: "Contact Us",
    oldPrice: null,
    pax: 50,
    cabins: 4,
    crew: 5,
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80&w=2000",
    isRoyal: true,
    tag: "Royal Class",
  },
  {
    id: 2,
    name: "Executive Yacht",
    length: "56ft",
    price: "899 AED/h",
    oldPrice: "1200 AED/h",
    pax: 20,
    cabins: 3,
    crew: 2,
    image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&q=80&w=1000",
    isRoyal: false,
    tag: "Unbeatable Value",
  },
  {
    id: 3,
    name: "Family Yacht",
    length: "44ft",
    price: "599 AED/h",
    oldPrice: "900 AED/h",
    pax: 12,
    cabins: 2,
    crew: 2,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1000",
    isRoyal: false,
    tag: "Best Seller",
  },
  {
    id: 4,
    name: "Boutique Cruiser",
    length: "36ft",
    price: "399 AED/h",
    oldPrice: "499 AED/h",
    pax: 8,
    cabins: 1,
    crew: 1,
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&q=80&w=1000",
    isRoyal: false,
    tag: "Best Price in the Marina",
  },
];

export function FleetGrid() {
  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[400px]">
        {fleet.map((yacht, index) => {
          const isLarge = index === 0;
          const CardContent = (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative h-full w-full overflow-hidden rounded-2xl bg-black/50 ${
                isLarge ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={yacht.image}
                  alt={yacht.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>

              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="font-serif text-xs uppercase tracking-widest text-[var(--color-gold)] bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm border border-[var(--color-gold)]/30">
                    {yacht.tag}
                  </span>
                  {yacht.oldPrice && (
                    <div className="flex flex-col items-end">
                      <Highlighter className="text-sm text-white/50 line-through decoration-[var(--color-gold)]">
                        {yacht.oldPrice}
                      </Highlighter>
                      <span className="font-serif text-xl font-bold text-white">
                        {yacht.price}
                      </span>
                    </div>
                  )}
                  {!yacht.oldPrice && (
                    <span className="font-serif text-xl font-bold text-white">
                      {yacht.price}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-serif text-3xl font-light text-white mb-4">
                    {yacht.name} <span className="text-[var(--color-gold)] text-xl">{yacht.length}</span>
                  </h3>

                  <div className="grid grid-cols-4 gap-2 mb-6">
                    <div className="flex flex-col items-center gap-1 text-white/70">
                      <Users className="h-4 w-4" />
                      <span className="text-xs font-sans">{yacht.pax} Pax</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-white/70">
                      <Bed className="h-4 w-4" />
                      <span className="text-xs font-sans">{yacht.cabins} Cabins</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-white/70">
                      <Anchor className="h-4 w-4" />
                      <span className="text-xs font-sans">{yacht.crew} Crew</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-white/70">
                      <Ruler className="h-4 w-4" />
                      <span className="text-xs font-sans">{yacht.length}</span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <InteractiveHoverButton className="w-full text-xs py-3">Instant Booking</InteractiveHoverButton>
                    <button className="flex items-center justify-center rounded-full btn-old-gold relative px-6 min-w-[80px]">
                      WA
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          );

          if (yacht.isRoyal || yacht.oldPrice) {
            return (
              <div key={yacht.id} className={isLarge ? "md:col-span-2 lg:col-span-2" : ""}>
                <ShineBorder className="h-full w-full">
                  {CardContent}
                </ShineBorder>
              </div>
            );
          }

          return <React.Fragment key={yacht.id}>{CardContent}</React.Fragment>;
        })}
      </div>
    </section>
  );
}
