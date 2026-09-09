"use client";

import { useEffect, useRef } from "react";

interface Ember {
  x: number;
  y: number;
  r: number;
  speed: number;
  drift: number;
  opacity: number;
  life: number;
  maxLife: number;
}

export function EmberParticles({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      if (!canvas) return;
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx?.scale(dpr, dpr);
    }
    resize();

    const embers: Ember[] = Array.from({ length: 36 }, () => spawn());

    function spawn(): Ember {
      return {
        x: Math.random() * width,
        y: height + Math.random() * 60,
        r: 1 + Math.random() * 2.2,
        speed: 0.25 + Math.random() * 0.55,
        drift: (Math.random() - 0.5) * 0.4,
        opacity: 0.25 + Math.random() * 0.55,
        life: 0,
        maxLife: 300 + Math.random() * 300,
      };
    }

    let rafId: number;
    function tick() {
      ctx!.clearRect(0, 0, width, height);
      for (const e of embers) {
        e.y -= e.speed;
        e.x += e.drift;
        e.life += 1;
        const fade = 1 - e.life / e.maxLife;
        const alpha = Math.max(0, e.opacity * fade);

        const gradient = ctx!.createRadialGradient(
          e.x,
          e.y,
          0,
          e.x,
          e.y,
          e.r * 4
        );
        gradient.addColorStop(0, `rgba(230,82,31,${alpha})`);
        gradient.addColorStop(1, "rgba(230,82,31,0)");
        ctx!.fillStyle = gradient;
        ctx!.beginPath();
        ctx!.arc(e.x, e.y, e.r * 4, 0, Math.PI * 2);
        ctx!.fill();

        ctx!.fillStyle = `rgba(249,214,168,${alpha})`;
        ctx!.beginPath();
        ctx!.arc(e.x, e.y, e.r, 0, Math.PI * 2);
        ctx!.fill();

        if (e.life > e.maxLife || e.y < -20) {
          Object.assign(e, spawn(), { y: height + 10 });
        }
      }
      rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);

    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
