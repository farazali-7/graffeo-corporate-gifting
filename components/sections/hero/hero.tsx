import { Container } from "@/components/ui/container";
import { ScrollCue } from "@/components/ui/scroll-cue";
import { HeroContent } from "@/components/sections/hero/hero-content";
import { HeroImage } from "@/components/sections/hero/hero-image";

/**
 * Hero — the page's most important section. Its job is not to sell coffee but
 * to answer "what do I do next?" by naming both gifting paths immediately.
 * A thin shell that composes the copy column (7/12) and the media (5/12);
 * all interactivity lives in the client leaves.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="texture-grain relative isolate flex min-h-[44rem] items-center overflow-hidden bg-paper py-16 md:min-h-[85vh] md:py-20 lg:min-h-[92vh]"
    >
      {/* Warm ambient wash for depth behind the type */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-1/4 top-0 -z-10 h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle,rgba(31,90,69,0.12),transparent_62%)] blur-2xl"
      />

      <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <HeroContent />
        <HeroImage />
      </Container>

      {/* "There is more below" cue */}
      <ScrollCue className="absolute bottom-8 left-6 hidden lg:flex xl:left-12" />
    </section>
  );
}
