"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { SectionHeading } from "@/components/ui/section-heading";

const RATING = 4.9;
const REVIEW_COUNT = 480;

function useCountUp(target: number, active: boolean, decimals = 0, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    let raf: number;

    function tick(ts: number) {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);

  return value.toFixed(decimals);
}

export function Reviews() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const rating = useCountUp(RATING, inView, 1);
  const count = useCountUp(REVIEW_COUNT, inView, 0);

  return (
    <section id="reviews" className="py-24 sm:py-32 bg-bg-raised/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading title={t.reviews.title} />

        <div ref={ref} className="mt-10 flex flex-wrap items-end gap-4 sm:gap-6">
          <span className="font-display text-6xl sm:text-7xl text-ember leading-none">
            {rating}
          </span>
          <div className="flex flex-col gap-1.5 pb-1">
            <div className="flex gap-1" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-sm text-text-muted">
              {count}+ {t.reviews.countSuffix}
            </p>
          </div>
        </div>

        <p className="mt-3 text-xs text-text-muted/70 italic">
          {t.reviews.sampleNote}
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.reviews.testimonials.map((review, i) => (
            <motion.figure
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-bg border border-hairline/30 p-6 flex flex-col gap-4"
            >
              <Quote className="h-5 w-5 text-gold/60" />
              <blockquote className="text-text text-sm sm:text-base leading-relaxed flex-1">
                {review.quote}
              </blockquote>
              <figcaption className="font-display uppercase tracking-menu text-xs text-text-muted">
                {review.name}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
