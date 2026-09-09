"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Phone } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";

type NavKey = "menu" | "gallery" | "about" | "reviews" | "location";

export function MobileMenu({
  open,
  onClose,
  links,
  phone,
  phoneHref,
}: {
  open: boolean;
  onClose: () => void;
  links: readonly { key: NavKey; href: string }[];
  phone: string;
  phoneHref: string;
}) {
  const { t } = useLanguage();

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 bg-bg lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between px-5 py-5 border-b border-gold/20">
            <span className="font-display uppercase tracking-menu text-2xl text-text">
              Merhaba
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={onClose}
              className="text-text hover:text-ember transition-colors p-1"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <motion.nav
            initial="closed"
            animate="open"
            variants={{
              open: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              closed: {},
            }}
            className="flex flex-col px-6 py-10 gap-1"
          >
            {links.map((link) => (
              <motion.a
                key={link.key}
                href={link.href}
                onClick={onClose}
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 16 },
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="font-display uppercase tracking-menu text-4xl py-3 text-text hover:text-ember transition-colors border-b border-hairline/40"
              >
                {t.nav[link.key]}
              </motion.a>
            ))}
          </motion.nav>

          <div className="px-6 mt-auto absolute bottom-8 inset-x-0 flex flex-col gap-5">
            <a
              href={phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-ember text-[#14100D] font-display uppercase tracking-menu text-sm py-4"
            >
              <Phone className="h-4 w-4" />
              {phone}
            </a>
            <div className="flex items-center justify-between px-1">
              <LanguageSwitcher />
              <ThemeToggle className="text-text-muted hover:text-ember transition-colors" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
