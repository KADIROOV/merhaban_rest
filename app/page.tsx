import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { ScrollUtensils } from "@/components/scroll-utensils";
import { MenuSection } from "@/components/menu-section";
import { Gallery } from "@/components/gallery";
import { DonenessSelector } from "@/components/doneness-selector";
import { Reviews } from "@/components/reviews";
import { HoursLocation } from "@/components/hours-location";
import { Footer } from "@/components/footer";
import { StickyHooks } from "@/components/sticky-hooks";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <ScrollUtensils>
          <MenuSection />
          <Gallery />
        </ScrollUtensils>
        <DonenessSelector />
        <Reviews />
        <HoursLocation />
      </main>
      <Footer />
      <StickyHooks />
    </>
  );
}
