"use client";

import { useEffect, useState } from "react";
import { Phone, Menu } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";
import { MobileMenu } from "@/components/mobile-menu";
import { cn } from "@/lib/utils";

const PHONE = "+998 98 305 00 70";
const PHONE_HREF = "tel:+998983050070";

const NAV_LINKS = [
  { key: "menu", href: "#menu" },
  { key: "gallery", href: "#gallery" },
  { key: "about", href: "#about" },
  { key: "reviews", href: "#reviews" },
  { key: "location", href: "#location" },
] as const;

export function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-40 transition-all duration-300 ease-weighted",
          scrolled
            ? "bg-bg/85 backdrop-blur-md border-b border-gold/20 py-3"
            : "bg-transparent border-b border-transparent py-5"
        )}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between">
          <a
            href="#top"
            className="font-display uppercase tracking-menu text-2xl sm:text-[28px] text-text"
          >
            Merhaba
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="font-display text-sm uppercase tracking-menu text-text-muted hover:text-ember transition-colors"
              >
                {t.nav[link.key]}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <LanguageSwitcher className="hidden sm:block" />
            <ThemeToggle className="hidden sm:flex items-center justify-center text-text-muted hover:text-ember transition-colors" />
            <a
              href={PHONE_HREF}
              className="hidden md:inline-flex items-center gap-2 border border-gold/40 text-text hover:border-ember hover:text-ember transition-colors px-4 py-2 font-display text-sm uppercase tracking-menu"
            >
              <Phone className="h-3.5 w-3.5" />
              {t.nav.call}
            </a>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-text hover:text-ember transition-colors p-1"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={NAV_LINKS}
        phone={PHONE}
        phoneHref={PHONE_HREF}
      />
    </>
  );
}
