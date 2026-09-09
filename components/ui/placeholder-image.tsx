"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Drop-in photo slot for content that doesn't have real photography yet.
 *
 * Renders a real <img> at the given `src`. Until that file exists, or if it
 * fails to load, it shows a quiet charcoal/gold placeholder labelled with the
 * exact `alt` text — so photos can be dropped into /public at the same path
 * later with zero code changes, and it's obvious from looking at the site
 * which photo belongs where.
 */
export function PlaceholderImage({
  src,
  alt,
  className,
  imgClassName,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  const [broken, setBroken] = useState(false);
  const showPlaceholder = broken || !loaded;

  return (
    <div className={cn("relative overflow-hidden bg-bg-raised-2", className)}>
      <div
        aria-hidden={!showPlaceholder}
        className={cn(
          "absolute inset-0 flex flex-col items-center justify-center gap-3 px-5 text-center transition-opacity duration-500",
          showPlaceholder ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, hsl(var(--gold) / 0.07) 0px, hsl(var(--gold) / 0.07) 1px, transparent 1px, transparent 13px)",
        }}
      >
        <svg
          viewBox="0 0 48 48"
          fill="none"
          className="h-7 w-7 text-gold/60"
          aria-hidden="true"
        >
          <circle cx="24" cy="24" r="19" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="24" cy="24" r="11" stroke="currentColor" strokeWidth="1" />
        </svg>
        <p className="text-[10px] sm:text-[11px] uppercase tracking-menu font-display text-gold/70 max-w-[240px] leading-snug">
          {alt}
        </p>
      </div>

      {!broken && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          onLoad={() => setLoaded(true)}
          onError={() => setBroken(true)}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
            loaded ? "opacity-100" : "opacity-0",
            imgClassName
          )}
        />
      )}
    </div>
  );
}
