const scoreTextMap = {
  socket: ["없어요", "부족해요", "적당해요", "많아요", "아주 많아요"],
  seat: ["많이 부족해요", "부족해요", "적당해요", "많아요", "아주 많아요"],
  quiet: ["매우 붐벼요", "약간 붐벼요", "적당해요", "한산해요", "매우 한산해요"],
};

export function formatReview(placeScore: { socket: number; seat: number; quiet: number }): string[] {
  return [
    `콘센트 ${scoreTextMap.socket[placeScore.socket - 1]}`,
    `좌석 ${scoreTextMap.seat[placeScore.seat - 1]}`,
    `한산함 ${scoreTextMap.quiet[placeScore.quiet - 1]}`,
  ];
}
