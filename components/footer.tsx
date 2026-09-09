"use client";

import { Instagram, Facebook, Send } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const PHONE = "+998 98 305 00 70";
const PHONE_HREF = "tel:+998983050070";
const ADDRESS = "Yangi Qo'yliq ko'chasi 18, Tashkent";

const NAV_LINKS = [
  { key: "menu", href: "#menu" },
  { key: "gallery", href: "#gallery" },
  { key: "about", href: "#about" },
  { key: "reviews", href: "#reviews" },
  { key: "location", href: "#location" },
] as const;

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-bg border-t border-hairline/30 pt-16 pb-28 sm:pb-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <span className="font-display uppercase tracking-menu text-2xl text-text">
              Merhaba
            </span>
            <p className="mt-3 text-sm text-text-muted max-w-[220px]">
              {t.footer.tagline}
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                aria-label="Instagram"
                className="text-text-muted hover:text-ember transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-text-muted hover:text-ember transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Telegram"
                className="text-text-muted hover:text-ember transition-colors"
              >
                <Send className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display uppercase tracking-menu text-xs text-gold mb-4">
              {t.footer.navTitle}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-sm text-text-muted hover:text-text transition-colors"
                  >
                    {t.nav[link.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display uppercase tracking-menu text-xs text-gold mb-4">
              {t.footer.hoursTitle}
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-text-muted">
              <li className="flex justify-between gap-4">
                <span>{t.hours.monSat}</span>
                <span>{t.hours.hoursMonSat}</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>{t.hours.sun}</span>
                <span>{t.hours.hoursSun}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display uppercase tracking-menu text-xs text-gold mb-4">
              {t.footer.contactTitle}
            </h3>
            <p className="text-sm text-text-muted max-w-[220px]">{ADDRESS}</p>
            <a
              href={PHONE_HREF}
              className="text-sm text-text-muted hover:text-ember transition-colors mt-2 inline-block"
            >
              {PHONE}
            </a>
          </div>
        </div>

        <div className="hairline mt-12 mb-6" />

        <p className="text-xs text-text-muted/70">
          © {new Date().getFullYear()} Merhaba Steakhouse. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
