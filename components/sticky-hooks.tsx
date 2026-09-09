"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { Button } from "@/components/ui/button";
import { ReservationModal } from "@/components/reservation-modal";

const PHONE_HREF = "tel:+998983050070";
const WHATSAPP_HREF = "https://wa.me/998983050070";

export function StickyHooks() {
  const { t } = useLanguage();
  const [showReserveBar, setShowReserveBar] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShowReserveBar(window.scrollY > window.innerHeight * 0.85);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Floating call + WhatsApp, mobile-safe corner placement */}
      <div className="fixed right-4 sm:right-6 bottom-24 sm:bottom-6 z-30 flex flex-col gap-3">
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.sticky.whatsapp}
          className="h-12 w-12 flex items-center justify-center bg-[#25D366] text-[#0A0805] shadow-lg hover:scale-105 transition-transform"
        >
          <MessageCircle className="h-5 w-5" fill="currentColor" />
        </a>
        <a
          href={PHONE_HREF}
          aria-label={t.sticky.call}
          className="h-12 w-12 flex items-center justify-center bg-ember text-[#14100D] shadow-lg hover:scale-105 transition-transform"
        >
          <Phone className="h-5 w-5" />
        </a>
      </div>

      {/* Reserve bar, appears after the hero */}
      <AnimatePresence>
        {showReserveBar && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 bottom-0 z-30 border-t border-gold/25 bg-bg/95 backdrop-blur-md"
          >
            <div className="mx-auto max-w-7xl px-5 sm:px-8 py-3 flex items-center justify-between gap-4">
              <span className="hidden sm:block font-display uppercase tracking-menu text-sm text-text-muted">
                Merhaba Steakhouse
              </span>
              <ReservationModal
                trigger={
                  <Button size="sm" className="w-full sm:w-auto">
                    {t.sticky.reserve}
                  </Button>
                }
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
