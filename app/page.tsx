import { SiteHeader } from "@/components/sections/site-header";
import { Hero } from "@/components/sections/hero";
import { HeritageStrip } from "@/components/sections/heritage-strip";
import { WhatIsGifting } from "@/components/sections/what-is-gifting";
import { ChoosePath } from "@/components/sections/choose-path";
import { Comparison } from "@/components/sections/comparison";
import { Process } from "@/components/sections/process";
import { Collections } from "@/components/sections/collections";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { SiteFooter } from "@/components/sections/site-footer";

/**
 * Corporate gifting landing page. The section order is the information
 * architecture the audit prescribes: orient → decide → compare → reassure →
 * answer → act. The single job is to route each buyer to the right flow.
 */
export default function CorporateGiftingPage() {
  return (
    <>
      <a
        href="#choose"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-button focus:bg-forest focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-paper"
      >
        Skip to gifting options
      </a>

      <SiteHeader />

      <main id="main">
        <Hero />
        <HeritageStrip />
        <WhatIsGifting />
        <ChoosePath />
        <Comparison />
        <Process />
        <Collections />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>

      <SiteFooter />
    </>
  );
}
