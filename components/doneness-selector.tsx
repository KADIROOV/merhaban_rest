"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";
import { SectionHeading } from "@/components/ui/section-heading";

// Color stops from rare (deep red-wine center) to well-done (deep brown crust)
const CENTER_STOPS = ["#8A2A2E", "#A5432F", "#B9622F", "#A6642F", "#6E4126"];
const CRUST_STOPS = ["#5B2320", "#5B2A20", "#5C3320", "#5A3A22", "#4A3220"];

function lerpColor(a: string, b: string, t: number) {
  const ah = parseInt(a.slice(1), 16);
  const bh = parseInt(b.slice(1), 16);
  const ar = (ah >> 16) & 255,
    ag = (ah >> 8) & 255,
    ab = ah & 255;
  const br = (bh >> 16) & 255,
    bg = (bh >> 8) & 255,
    bb = bh & 255;
  const r = Math.round(ar + (br - ar) * t);
  const g = Math.round(ag + (bg - ag) * t);
  const bl = Math.round(ab + (bb - ab) * t);
  return `rgb(${r}, ${g}, ${bl})`;
}

function colorAt(stops: string[], value: number) {
  // value: 0..100
  const segment = value / (100 / (stops.length - 1));
  const i = Math.min(Math.floor(segment), stops.length - 2);
  const t = segment - i;
  return lerpColor(stops[i], stops[i + 1], t);
}

export function DonenessSelector() {
  const { t } = useLanguage();
  const [value, setValue] = useState(35);

  const levelIndex = Math.min(
    Math.floor(value / (100 / (t.doneness.levels.length - 1)) + 0.5),
    t.doneness.levels.length - 1
  );
  const centerColor = colorAt(CENTER_STOPS, value);
  const crustColor = colorAt(CRUST_STOPS, value);
  const charLevel = 0.15 + (value / 100) * 0.55;

  return (
    <section className="py-24 sm:py-32 bg-bg-raised/40">
      <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <SectionHeading
          title={t.doneness.title}
          subtitle={t.doneness.subtitle}
          align="center"
        />

        <div className="mt-12 flex flex-col items-center gap-8">
          <div className="relative h-40 w-40 sm:h-52 sm:w-52">
            <svg viewBox="0 0 200 200" className="h-full w-full drop-shadow-xl">
              {/* Steak crust */}
              <ellipse
                cx="100"
                cy="100"
                rx="88"
                ry="70"
                fill={crustColor}
                style={{ transition: "fill 0.15s linear" }}
              />
              {/* Grill char marks */}
              {[-40, -10, 20, 50].map((offset, i) => (
                <rect
                  key={i}
                  x={30 + offset}
                  y="35"
                  width="10"
                  height="130"
                  rx="5"
                  fill="black"
                  opacity={charLevel}
                  transform={`rotate(18 ${35 + offset} 100)`}
                />
              ))}
              {/* Interior doneness */}
              <ellipse
                cx="100"
                cy="100"
                rx="62"
                ry="46"
                fill={centerColor}
                style={{ transition: "fill 0.15s linear" }}
              />
            </svg>
          </div>

          <motion.p
            key={levelIndex}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="font-display uppercase tracking-menu text-xl sm:text-2xl text-text"
          >
            {t.doneness.levels[levelIndex]}
          </motion.p>

          <input
            type="range"
            min={0}
            max={100}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            aria-label={t.doneness.title}
            className="w-full max-w-sm accent-ember h-1.5 cursor-pointer"
          />

          <div className="w-full max-w-sm flex justify-between text-[10px] uppercase tracking-menu font-display text-text-muted">
            <span>{t.doneness.levels[0]}</span>
            <span>{t.doneness.levels[t.doneness.levels.length - 1]}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
