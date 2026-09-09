"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-bg overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <h2 className="font-display uppercase tracking-menu text-4xl sm:text-5xl leading-[1.05] text-text">
            {t.about.title}
          </h2>
          <div className="hairline w-24 mt-6 mb-6" />
          <p className="text-text-muted text-base sm:text-lg leading-relaxed max-w-md">
            {t.about.body}
          </p>
        </motion.div>

        <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-5">
          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] col-span-1 mt-8"
          >
            <PlaceholderImage
              src="/images/about/butchers-selection.jpg"
              alt="Butcher's selection — a display case of aged cuts, lamb rack, house-made sausages"
              className="absolute inset-0"
            />
            <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-xs uppercase tracking-menu font-display text-[#F4EBDD]">
              {t.about.butcherLabel}
            </figcaption>
          </motion.figure>

          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] col-span-1"
          >
            <PlaceholderImage
              src="/images/about/turkish-tea-service.jpg"
              alt="Turkish tea service — tulip glass tea on a saucer with a spoon"
              className="absolute inset-0"
            />
            <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-xs uppercase tracking-menu font-display text-[#F4EBDD]">
              {t.about.teaLabel}
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
