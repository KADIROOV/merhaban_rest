"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { SectionHeading } from "@/components/ui/section-heading";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

const GALLERY_IMAGES = [
  { src: "/images/gallery/dining-room.jpg", alt: "The Merhaba dining room, dark and ember-lit" },
  { src: "/images/gallery/open-grill.jpg", alt: "The open charcoal grill at Merhaba" },
  { src: "/images/gallery/table-setting.jpg", alt: "A set table at Merhaba Steakhouse" },
  { src: "/images/gallery/bar-corner.jpg", alt: "The bar corner at Merhaba" },
  { src: "/images/gallery/plate-closeup.jpg", alt: "Close-up of a grilled dish at Merhaba" },
  { src: "/images/gallery/entrance.jpg", alt: "The entrance to Merhaba Steakhouse" },
];

export function Gallery() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function close() {
    setActiveIndex(null);
  }
  function next() {
    setActiveIndex((i) => (i === null ? null : (i + 1) % GALLERY_IMAGES.length));
  }
  function prev() {
    setActiveIndex((i) =>
      i === null ? null : (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
    );
  }

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-bg">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading title={t.gallery.title} subtitle={t.gallery.subtitle} />
      </div>

      <div className="mt-10 pl-5 sm:pl-8">
        <div className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 pr-5 sm:pr-8 snap-x snap-mandatory [scrollbar-width:thin]">
          {GALLERY_IMAGES.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActiveIndex(i)}
              className="relative shrink-0 snap-start w-[70vw] sm:w-[38vw] lg:w-[26vw] aspect-[4/5] group"
            >
              <PlaceholderImage
                src={img.src}
                alt={img.alt}
                className="absolute inset-0"
                imgClassName="transition-transform duration-500 ease-weighted group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4"
            role="dialog"
            aria-modal="true"
            onClick={close}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl aspect-[4/5] sm:aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <PlaceholderImage
                src={GALLERY_IMAGES[activeIndex].src}
                alt={GALLERY_IMAGES[activeIndex].alt}
                className="absolute inset-0"
                imgClassName="object-contain"
              />
            </motion.div>

            <button
              type="button"
              aria-label="Close"
              onClick={close}
              className="absolute top-5 right-5 text-white/80 hover:text-ember transition-colors"
            >
              <X className="h-7 w-7" />
            </button>
            <button
              type="button"
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-ember transition-colors"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-ember transition-colors"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
