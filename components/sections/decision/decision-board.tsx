"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { DecisionAssistant } from "@/components/sections/decision/decision-assistant";
import { PathCard } from "@/components/sections/path-card";
import { GIFTING_PATHS } from "@/data/gifting";
import type { GiftingPath } from "@/types";

/**
 * The interactive heart of the decision section. Holds the assistant's
 * recommendation and flags the matching path card so the guidance and the
 * choice stay in sync — a single, small client island around otherwise static
 * content. Path data (which carries Lucide icon components) is imported here,
 * client-side, rather than passed across the server boundary.
 */
export function DecisionBoard() {
  const paths = GIFTING_PATHS;
  const [recommendedId, setRecommendedId] = useState<GiftingPath["id"] | null>(
    null,
  );

  return (
    <div className="mt-12 lg:mt-16">
      <DecisionAssistant
        paths={paths}
        recommendedId={recommendedId}
        onRecommend={setRecommendedId}
      />

      <Reveal stagger as="ul" className="mt-8 grid gap-6 lg:mt-10 lg:grid-cols-2 lg:gap-8">
        {paths.map((path) => (
          <PathCard
            key={path.id}
            path={path}
            recommended={recommendedId === path.id}
          />
        ))}
      </Reveal>
    </div>
  );
}
