import { formatName } from "./formatName"; // 실제 경로에 맞게 수정하세요

describe("formatName", () => {
  it("should return the original name if it's within the max length", () => {
    expect(formatName("짱구")).toBe("짱구");
    expect(formatName("철수", 5)).toBe("철수");
    expect(formatName("이현우", 6)).toBe("이현우");
  });

  it("should trim the name if it exceeds the max length", () => {
    expect(formatName("김카카오대표", 5)).toBe("김카카오대");
    expect(formatName("노성균은", 3)).toBe("노성균".slice(0, 3));
  });

  it("should return empty string when input is empty", () => {
    expect(formatName("")).toBe("");
  });

  it("should default to maxLength = 5", () => {
    expect(formatName("유재석입니다")).toBe("유재석입니");
  });

  it("should handle exact length properly", () => {
    expect(formatName("정우성", 3)).toBe("정우성");
    expect(formatName("정우성", 6)).toBe("정우성");
  });
});
