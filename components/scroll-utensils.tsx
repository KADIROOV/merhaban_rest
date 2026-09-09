"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

/** Minimal gold/bone line-art, drawn to match the brand's hairline aesthetic */
function ForkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 96" fill="none" {...props}>
      <path
        d="M8 4v24M14 4v24M20 4v24M26 4v24M8 28c0 8 4 10 9 10s9-2 9-10M17 38v54"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function KnifeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 36 96" fill="none" {...props}>
      <path
        d="M14 92V40c-6-2-9-9-9-18C5 12 9 4 16 4h4c4 18 3 27-6 36v52"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SpoonIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 34 96" fill="none" {...props}>
      <ellipse
        cx="17"
        cy="16"
        rx="11"
        ry="14"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M17 30v62"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PlateIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 96 96" fill="none" {...props}>
      <circle cx="48" cy="48" r="42" stroke="currentColor" strokeWidth="2" />
      <circle cx="48" cy="48" r="26" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function ScrollUtensils({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Fork — enters from the left edge, settles, drifts up and out
  const forkX = useTransform(scrollYProgress, [0, 0.22, 0.6, 1], ["-40vw", "-2vw", "4vw", "-10vw"]);
  const forkY = useTransform(scrollYProgress, [0, 0.5, 1], ["6vh", "40vh", "88vh"]);
  const forkRotate = useTransform(scrollYProgress, [0, 1], [-24, 10]);

  // Knife — enters from the right edge
  const knifeX = useTransform(scrollYProgress, [0, 0.3, 0.65, 1], ["40vw", "88vw", "82vw", "94vw"]);
  const knifeY = useTransform(scrollYProgress, [0, 0.5, 1], ["18vh", "52vh", "10vh"]);
  const knifeRotate = useTransform(scrollYProgress, [0, 1], [20, -16]);

  // Spoon — enters from the top
  const spoonX = useTransform(scrollYProgress, [0, 1], ["8vw", "18vw"]);
  const spoonY = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], ["-20vh", "22vh", "64vh", "96vh"]);
  const spoonRotate = useTransform(scrollYProgress, [0, 1], [-10, 26]);

  // Plate — enters from the right, lower down, settles as a quiet anchor
  const plateX = useTransform(scrollYProgress, [0, 0.4, 1], ["50vw", "78vw", "70vw"]);
  const plateY = useTransform(scrollYProgress, [0, 0.5, 1], ["70vh", "30vh", "6vh"]);
  const plateOpacity = useTransform(scrollYProgress, [0, 0.08, 0.85, 1], [0, 0.5, 0.5, 0]);
  const forkOpacity = useTransform(scrollYProgress, [0, 0.06, 0.9, 1], [0, 0.55, 0.55, 0]);
  const knifeOpacity = useTransform(scrollYProgress, [0, 0.1, 0.88, 1], [0, 0.55, 0.55, 0]);
  const spoonOpacity = useTransform(scrollYProgress, [0, 0.06, 0.9, 1], [0, 0.5, 0.5, 0]);

  return (
    <div ref={containerRef} className="relative">
      {!prefersReduced && (
        <div
          className="pointer-events-none absolute inset-0 z-20 overflow-hidden"
          aria-hidden="true"
        >
          <motion.div
            style={{ x: forkX, y: forkY, rotate: forkRotate, opacity: forkOpacity }}
            className="absolute w-7 sm:w-10 text-gold"
          >
            <ForkIcon className="w-full h-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]" />
          </motion.div>

          <motion.div
            style={{ x: knifeX, y: knifeY, rotate: knifeRotate, opacity: knifeOpacity }}
            className="absolute w-6 sm:w-9 text-text"
          >
            <KnifeIcon className="w-full h-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]" />
          </motion.div>

          <motion.div
            style={{ x: spoonX, y: spoonY, rotate: spoonRotate, opacity: spoonOpacity }}
            className="absolute w-6 sm:w-9 text-gold"
          >
            <SpoonIcon className="w-full h-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]" />
          </motion.div>

          <motion.div
            style={{ x: plateX, y: plateY, opacity: plateOpacity }}
            className="absolute w-14 sm:w-20 text-text"
          >
            <PlateIcon className="w-full h-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]" />
          </motion.div>
        </div>
      )}

      {children}
    </div>
  );
}
