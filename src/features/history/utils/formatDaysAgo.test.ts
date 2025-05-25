import { formatDaysAgo } from "./formatDaysAgo";

describe("formatDaysAgo", () => {
  it("should return null for day 0 or negative values", () => {
    expect(formatDaysAgo(0)).toBeNull();
    expect(formatDaysAgo(-1)).toBeNull();
    expect(formatDaysAgo(-100)).toBeNull();
  });

  it("should return 'N일 전' for 1 <= day <= 6", () => {
    expect(formatDaysAgo(1)).toBe("1일 전");
    expect(formatDaysAgo(6)).toBe("6일 전");
  });

  it("should return '1주일 전' for 7 <= day <= 13", () => {
    expect(formatDaysAgo(7)).toBe("1주일 전");
    expect(formatDaysAgo(13)).toBe("1주일 전");
  });

  it("should return '2주 전' for 14 <= day <= 27", () => {
    expect(formatDaysAgo(14)).toBe("2주 전");
    expect(formatDaysAgo(27)).toBe("2주 전");
  });

  it("should return '한 달 전' for 28 <= day <= 59", () => {
    expect(formatDaysAgo(28)).toBe("한 달 전");
    expect(formatDaysAgo(59)).toBe("한 달 전");
  });

  it("should return '두 달 전' for 60 <= day <= 89", () => {
    expect(formatDaysAgo(60)).toBe("두 달 전");
    expect(formatDaysAgo(89)).toBe("두 달 전");
  });

  it("should return 'N개월 전' for 90 <= day <= 364", () => {
    expect(formatDaysAgo(90)).toBe("3개월 전");
    expect(formatDaysAgo(120)).toBe("4개월 전");
    expect(formatDaysAgo(364)).toBe("12개월 전");
  });

  it("should return 'N년 전' for day >= 365", () => {
    expect(formatDaysAgo(365)).toBe("1년 전");
    expect(formatDaysAgo(730)).toBe("2년 전");
    expect(formatDaysAgo(1095)).toBe("3년 전");
  });
});
