import { ReadingProgress } from "@/components/ui/reading-progress";
import { AnnouncementBar } from "@/components/sections/announcement-bar";
import { SiteHeader } from "@/components/sections/site-header";
import { Hero } from "@/components/sections/hero/hero";
import { HeritageStrip } from "@/components/sections/heritage-strip";
import { ChoosePath } from "@/components/sections/choose-path";
import { Comparison } from "@/components/sections/comparison";
import { Process } from "@/components/sections/process";
import { WhyGraffeo } from "@/components/sections/why-graffeo";
import { Gallery } from "@/components/sections/gallery";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { SiteFooter } from "@/components/sections/site-footer";

/**
 * Corporate gifting landing page. The section order follows the brief's
 * decision-first blueprint — problem → solution → decision → confidence →
 * action — so choosing between the two gifting paths feels obvious, not risky.
 */
export default function CorporateGiftingPage() {
  return (
    <>
      <a
        href="#choose"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-button focus:bg-forest focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-paper"
      >
        Skip to gifting options
      </a>

      <ReadingProgress />
      <AnnouncementBar />
      <SiteHeader />

      <main id="main">
        <Hero />
        <HeritageStrip />
        <ChoosePath />
        <Comparison />
        <Process />
        <WhyGraffeo />
        <Gallery />
        <Faq />
        <FinalCta />
      </main>

      <SiteFooter />
    </>
  );
}
