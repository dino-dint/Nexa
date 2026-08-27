
import { ArrowUpRight } from "lucide-react";
import categories from "../data/categories";

function Categories() {
  return (
    <section className="relative overflow-hidden bg-black py-20">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-400">
            Categories
          </p>

          <h1 className="text-3xl font-bold text-white md:text-5xl">
            Shop by Category
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Browse our premium collection of laptops, smartphones, gaming gear,
            audio devices, and accessories.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="
                group relative
                h-75 md:h-110
                overflow-hidden
                rounded-3xl
                border border-white/10
                bg-zinc-900
                cursor-pointer
                transition-all duration-500
                hover:-translate-y-2
                hover:border-blue-500/50
                hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]
              "
            >
              {/* Image - FULL CARD */}
              <img
                src={category.image}
                alt={category.name}
                className="
                  absolute inset-0
                  h-full w-full
                  object-cover
                  transition-transform duration-700
                  group-hover:scale-110
                "
              />

              {/* Dark Overlay for image */}
              <div
                className="
                  absolute inset-0
                  bg-linear-to-t
                  from-black
                  via-black/40
                  to-transparent
                  opacity-90
                  transition-opacity duration-500
                  group-hover:opacity-100
                "
              />

              {/* Blue Hover Glow */}
              <div
                className="
                  absolute inset-0
                  bg-blue-500/0
                  transition-colors duration-500
                  group-hover:bg-blue-500/10
                "
              />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <div className="flex items-end justify-between gap-4">
                  {/* Category Information */}
                  <div>
                    <p className="mb-1 text-xs uppercase tracking-[0.2em] text-blue-400">
                      Category
                    </p>

                    <h3 className="text-xl font-bold text-white md:text-2xl">
                      {category.name}
                    </h3>

                    <p className="mt-2 text-sm text-gray-300">
                      Explore the latest collection.
                    </p>
                  </div>

                  {/* Arrow */}
                  <div
                    className="
                      flex h-10 w-10 shrink-0
                      items-center justify-center
                      rounded-full
                      bg-white/10
                      backdrop-blur-md
                      transition-all duration-500
                      group-hover:bg-blue-500
                      group-hover:rotate-45
                    "
                  >
                    <ArrowUpRight size={18} className="text-white" />
                  </div>
                </div>

                {/* Shop Now */}
                <div
                  className="
                    mt-4
                    max-h-0
                    overflow-hidden
                    opacity-0
                    transition-all duration-500
                    group-hover:max-h-10
                    group-hover:opacity-100
                  "
                >
                  <span className="text-sm font-medium text-blue-400">
                    Shop Now →
                  </span>
                </div>
              </div>

              {/* Bottom Accent */}
              <div
                className="
                  absolute bottom-0 left-0
                  h-0.5 w-0
                  bg-blue-500
                  transition-all duration-500
                  group-hover:w-full
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
