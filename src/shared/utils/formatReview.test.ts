import { formatReview } from "./formatReview";

// getScoreText를 모킹
jest.mock("../model", () => ({
  getScoreText: jest.fn((type, score) => {
    // 간단한 mock 동작 정의 (type과 score를 그대로 표현)
    return `${type}-${score}`;
  }),
}));

describe("formatReview", () => {
  it("should format plug and seat scores correctly", () => {
    const mockPlaceScore = {
      socket: 4,
      seat: 3,
      quiet: 5, // quiet은 현재 formatReview에서 사용하지 않음
    };

    const result = formatReview(mockPlaceScore);

    expect(result).toEqual(["콘센트 plug-4", "좌석 seat-3"]);
  });

  it("should handle minimum score values", () => {
    const result = formatReview({
      socket: 1,
      seat: 1,
      quiet: 1,
    });

    expect(result).toEqual(["콘센트 plug-1", "좌석 seat-1"]);
  });

  it("should handle maximum score values", () => {
    const result = formatReview({
      socket: 5,
      seat: 5,
      quiet: 5,
    });

    expect(result).toEqual(["콘센트 plug-5", "좌석 seat-5"]);
  });
});
