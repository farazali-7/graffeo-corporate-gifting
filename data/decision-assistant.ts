import type { GiftingPath } from "@/types";

/** Answer ids for the two-question decision assistant. */
export type GiftVolumeId = "small" | "medium" | "large";
export type CustomizationId = "no" | "yes";

export interface AssistantOption<T extends string> {
  id: T;
  label: string;
}

export const VOLUME_QUESTION = "How many gifts are you sending?";
export const VOLUME_OPTIONS: AssistantOption<GiftVolumeId>[] = [
  { id: "small", label: "5 – 25" },
  { id: "medium", label: "25 – 100" },
  { id: "large", label: "100+" },
];

export const CUSTOMIZATION_QUESTION = "Do you need custom branding?";
export const CUSTOMIZATION_OPTIONS: AssistantOption<CustomizationId>[] = [
  { id: "no", label: "No" },
  { id: "yes", label: "Yes" },
];

/**
 * The routing rule, kept as pure business logic separate from the UI: anything
 * large, branded, or both belongs with the concierge team; otherwise
 * self-service is faster and just as thoughtful.
 */
export function recommendPath(
  volume: GiftVolumeId,
  customization: CustomizationId,
): GiftingPath["id"] {
  if (customization === "yes" || volume === "large") return "concierge";
  return "self-serve";
}
