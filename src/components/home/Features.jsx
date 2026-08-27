import React from "react";
import { ArrowUpRight } from "lucide-react";
import features from "../data/featureProducts";

// Map grid spans to item IDs so the array maps into a true Bento layout
const getBentoSpan = (id) => {
  switch (id) {
    case 1:
      // Hero Card: Spans 2 columns & 2 rows on desktop
      return "md:col-span-2 md:row-span-2 min-h-[420px]";
    case 2:
      // Wide Card: Spans 2 columns on top right
      return "md:col-span-2 md:row-span-1 min-h-[200px]";
    case 3:
    case 4:
    case 5:
      // Standard Cards: 1 column each
      return "md:col-span-1 md:row-span-1 min-h-[200px]";
    default:
      return "md:col-span-1 md:row-span-1 min-h-[200px]";
  }
};

function Features() {
  return (
    <section className="relative overflow-hidden bg-black py-16">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-400">
            Featured
          </p>
          <h1 className="text-3xl font-bold text-white md:text-5xl">
            Explore Featured Products
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Discover our latest premium tech collection hand-picked for gamers,
            creators, and professionals.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-12">
          {features.map((feature) => {
            const isHero = feature.id === 1;

            return (
              <div
                key={feature.id}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.25)] flex flex-col justify-between p-6 ${getBentoSpan(
                  feature.id
                )}`}
              >
                {/* Background Image (with fallback dark gradient) */}
                {feature.image ? (
                  <img
                    src={feature.image}
                    alt={feature.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 bg-linear-to-br from-zinc-800 via-zinc-900 to-black" />
                )}

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent opacity-90" />

                {/* Blue Hover Glow */}
                <div className="absolute inset-0 bg-blue-500/0 transition-colors duration-500 group-hover:bg-blue-500/10" />

                {/* Top Badge Tag */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                    {feature.tag}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-gray-400 font-medium">
                    {feature.category}
                  </span>
                </div>

                {/* Bottom Content Area */}
                <div className="relative z-10 mt-auto pt-6">
                  <h3 className={`font-bold text-white ${isHero ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'}`}>
                    {feature.title}
                  </h3>

                  <p className="mt-1 text-sm text-gray-300">
                    {feature.name ? `${feature.name} Series` : "Premium Performance for Everyday Use"}
                  </p>

                  {/* Price & Action Button */}
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-white">
                      {feature.price ? `$${feature.price}` : "Explore Deals"}
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md transition-all duration-500 group-hover:bg-blue-500 group-hover:rotate-45">
                      <ArrowUpRight size={18} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;