"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Navigation, Clock } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const ADDRESS = "Yangi Qo'yliq ko'chasi 18, 100080, Tashkent, Uzbekistan";
const PHONE = "+998 98 305 00 70";
const PHONE_HREF = "tel:+998983050070";
const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent("Merhaba Steakhouse, Yangi Qo'yliq ko'chasi 18, Tashkent");
const MAP_EMBED_URL =
  "https://www.google.com/maps?q=" +
  encodeURIComponent("Merhaba Steakhouse, Yangi Qo'yliq ko'chasi 18, Tashkent") +
  "&output=embed";

export function HoursLocation() {
  const { t } = useLanguage();

  return (
    <section id="location" className="py-24 sm:py-32 bg-bg">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading title={t.hours.title} subtitle={t.hours.subtitle} />

        <div className="mt-12 grid lg:grid-cols-12 gap-8 lg:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            <div>
              <div className="flex items-center gap-2 text-gold mb-3">
                <Clock className="h-4 w-4" />
                <span className="font-display text-xs uppercase tracking-menu">
                  {t.hours.title}
                </span>
              </div>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-hairline/30">
                    <td className="py-3 text-text-muted">{t.hours.monSat}</td>
                    <td className="py-3 text-right text-text font-medium">
                      {t.hours.hoursMonSat}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 text-text-muted">{t.hours.sun}</td>
                    <td className="py-3 text-right text-text font-medium">
                      {t.hours.hoursSun}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="hairline" />

            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold" />
                <div>
                  <p className="text-xs uppercase tracking-menu font-display text-text-muted">
                    {t.hours.addressLabel}
                  </p>
                  <p className="text-text text-sm mt-1">{ADDRESS}</p>
                  <p className="text-text-muted text-xs mt-1">{t.hours.landmark}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-gold" />
                <div>
                  <p className="text-xs uppercase tracking-menu font-display text-text-muted">
                    {t.hours.phoneLabel}
                  </p>
                  <a
                    href={PHONE_HREF}
                    className="text-text text-sm mt-1 inline-block hover:text-ember transition-colors"
                  >
                    {PHONE}
                  </a>
                </div>
              </div>
            </div>

            <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full sm:w-auto">
                <Navigation className="h-4 w-4" />
                {t.hours.directions}
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative min-h-[320px] sm:min-h-[420px] border border-hairline/30 overflow-hidden grayscale-[0.3] contrast-[1.05] hover:grayscale-0 transition-[filter] duration-500"
          >
            <iframe
              title="Merhaba Steakhouse map location"
              src={MAP_EMBED_URL}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
