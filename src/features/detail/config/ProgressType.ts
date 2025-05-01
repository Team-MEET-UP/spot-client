export const TextType = {
  morning: "아침",
  afternoon: "낮",
  evening: "저녁",
} as const;

export const CongestionInfo = {
  1: { description: "매우 조용해요", colorClass: "bg-metro-line2" },
  2: { description: "조용해요", colorClass: "bg-metro-line2" },
  3: { description: "적당해요", colorClass: "bg-metro-rail2" },
  4: { description: "시끄러워요", colorClass: "bg-metro-S" },
  5: { description: "매우 시끄러워요", colorClass: "bg-metro-S" },
} as const;
