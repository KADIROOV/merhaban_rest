"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";
import { dishes, menuCategoryOrder, MenuCategory } from "@/lib/dishes";
import { SectionHeading } from "@/components/ui/section-heading";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { cn } from "@/lib/utils";

type FilterKey = "all" | MenuCategory;

export function MenuSection() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<FilterKey>("all");

  const filtered = useMemo(
    () => (filter === "all" ? dishes : dishes.filter((d) => d.category === filter)),
    [filter]
  );

  const tabs: FilterKey[] = ["all", ...menuCategoryOrder];

  return (
    <section id="menu" className="py-24 sm:py-32 bg-bg-raised/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading title={t.menu.title} subtitle={t.menu.subtitle} />

        <div className="mt-10 flex flex-wrap gap-2 sm:gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={cn(
                "relative px-4 py-2 font-display text-xs sm:text-sm uppercase tracking-menu transition-colors border",
                filter === tab
                  ? "text-[#14100D] border-ember"
                  : "text-text-muted border-hairline/40 hover:text-text hover:border-gold/50"
              )}
            >
              {filter === tab && (
                <motion.span
                  layoutId="menu-filter-pill"
                  className="absolute inset-0 bg-ember -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              {tab === "all" ? "All" : t.menu.categories[tab]}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((dish) => {
              const copy = t.menu.dishes[dish.id];
              return (
                <motion.article
                  key={dish.id}
                  layout
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className={cn(
                    "group relative bg-bg overflow-hidden",
                    dish.featured && "col-span-2 row-span-2"
                  )}
                >
                  <motion.div
                    className={cn(
                      "relative overflow-hidden",
                      dish.featured ? "aspect-[16/11] sm:aspect-[16/9]" : "aspect-square"
                    )}
                    whileHover={{ scale: 1.08, rotate: 0.4 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <PlaceholderImage
                      src={dish.image}
                      alt={dish.alt}
                      priority={dish.featured}
                      className="absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  </motion.div>

                  <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5">
                    <h3
                      className={cn(
                        "font-display uppercase tracking-menu text-[#F9F1E4]",
                        dish.featured ? "text-2xl sm:text-3xl" : "text-base sm:text-lg"
                      )}
                    >
                      {copy.name}
                    </h3>
                    <p
                      className={cn(
                        "text-[#E7D9C4]/85 mt-1",
                        dish.featured ? "text-sm sm:text-base max-w-md" : "text-xs hidden sm:block"
                      )}
                    >
                      {copy.desc}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
