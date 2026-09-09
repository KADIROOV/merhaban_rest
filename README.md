# Merhaba Steakhouse

A premium marketing site for Merhaba Steakhouse, a Turkish-style grill in Tashkent. Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Requires Node.js 18.18+.

```bash
npm run build   # production build
npm run start   # run the production build
```

## Adding your real photos

Every photo on the site is a **placeholder slot** right now — a dark, gold-hairline box labelled with exactly what should go there. Drop a real photo in at the matching path below (same filename) and it swaps in automatically, no code changes needed.

```
public/
  videos/
    hero-grill.mp4                       — looping hero background (muted, autoplaying)
  images/
    hero/
      hero-poster.jpg                    — fallback still + <video poster>
    about/
      butchers-selection.jpg             — "Butcher's selection" behind-the-scenes shot
      turkish-tea-service.jpg            — tea ritual detail shot
    dishes/
      tomahawk-steak.jpg                 — hero signature dish
      sizzling-lamb-chops.jpg
      adana-kofta-fries.jpg
      sliced-grilled-steak.jpg
      beef-carpaccio.jpg
      pomegranate-walnut-salad.jpg
      grilled-vegetable-platter.jpg
    gallery/
      dining-room.jpg
      open-grill.jpg
      table-setting.jpg
      bar-corner.jpg
      plate-closeup.jpg
      entrance.jpg
```

If `hero-grill.mp4` isn't present, the hero automatically falls back to the still image with a slow pan and an animated ember-particle overlay — no broken state either way.

## What's inside

- **Language**: UZ / RU / EN switcher, `lib/translations.ts` + `context/language-context.tsx`. Detects browser language on first visit, remembers your choice.
- **Theme**: light/dark via `next-themes`, respects system preference, no flash on load.
- **Signature scroll interaction**: `components/scroll-utensils.tsx` — a fork, knife, spoon, and plate drift across the screen as you scroll past the menu and gallery, built with Framer Motion's `useScroll`/`useTransform`. Fully disabled under `prefers-reduced-motion`.
- **Smooth scroll**: Lenis, wired up in `providers/smooth-scroll-provider.tsx`.
- **Reservation modal**: UI-only booking form (no backend) — wire up `handleSubmit` in `components/reservation-modal.tsx` to your booking system or a form endpoint when ready.
- **Doneness selector**: the bonus interactive detail — drag to see a steak icon shift from rare to well-done.
- All real business data (address, phone, hours, map link) lives inline in `components/hours-location.tsx` and `components/footer.tsx`.

## Notes

- Tailwind's brand tokens (colors, type scale, easing) are defined once in `tailwind.config.ts` and `app/globals.css` — no hardcoded hex codes in components.
- The reservation form and WhatsApp/Telegram links are placeholders — point them at your real numbers/endpoints before launch (WhatsApp number is already wired to the real phone number).
