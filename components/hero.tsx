"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Star, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { Button } from "@/components/ui/button";
import { EmberParticles } from "@/components/ember-particles";
import { ReservationModal } from "@/components/reservation-modal";

const PHONE_HREF = "tel:+998983050070";

export function Hero() {
  const { t } = useLanguage();
  const [videoOk, setVideoOk] = useState(true);
  const [videoStarted, setVideoStarted] = useState(false);

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-end overflow-hidden bg-bg"
    >
      {/* Background layer */}
      <div className="absolute inset-0">
        {videoOk && (
          <video
            className={`h-full w-full object-cover transition-opacity duration-700 ${
              videoStarted ? "opacity-100" : "opacity-0"
            }`}
            autoPlay
            muted
            loop
            playsInline
            poster="/images/hero/hero-poster.jpg"
            onError={() => setVideoOk(false)}
            onPlaying={() => setVideoStarted(true)}
          >
            <source src="/videos/hero-grill.mp4" type="video/mp4" />
          </video>
        )}

        {(!videoOk || !videoStarted) && (
          <div
            className="absolute inset-0 bg-cover bg-center animate-[kenburns_18s_ease-in-out_infinite_alternate]"
            style={{
              backgroundImage: "url('/images/hero/hero-poster.jpg')",
            }}
          />
        )}

        <EmberParticles className="absolute inset-0 pointer-events-none" />

        {/* Charcoal scrim for legible type */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0805] via-[#0A0805]/55 to-[#0A0805]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0805]/60 via-transparent to-transparent" />
      </div>

      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1) translate(0,0); }
          100% { transform: scale(1.08) translate(-1%, -1%); }
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 w-full mx-auto max-w-7xl px-5 sm:px-8 pb-16 sm:pb-24 pt-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 border border-gold/40 px-3 py-1.5 mb-6 bg-black/20">
            <Star className="h-3.5 w-3.5 fill-gold text-gold" />
            <span className="text-xs font-body text-text-muted">
              {t.hero.ratingLabel}
            </span>
          </div>

          <h1 className="font-display uppercase tracking-menu text-5xl sm:text-6xl lg:text-7xl leading-[0.98] text-[#F9F1E4]">
            {t.hero.headline}
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#E7D9C4] max-w-lg">
            {t.hero.subheadline}
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <ReservationModal
              trigger={<Button size="default">{t.hero.ctaBook}</Button>}
            />
            <a href={PHONE_HREF}>
              <Button variant="outline" className="w-full sm:w-auto">
                <Phone className="h-4 w-4" />
                {t.hero.ctaCall}
              </Button>
            </a>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label={t.hero.scroll}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-1 text-[#E7D9C4]/80 hover:text-ember transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] uppercase tracking-menu font-display">
          {t.hero.scroll}
        </span>
        <ChevronDown className="h-4 w-4" />
      </motion.a>
    </section>
  );
}
