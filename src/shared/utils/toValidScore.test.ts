import { toValidScore } from "./toValidScore";

describe("toValidScore", () => {
  it("should return 0 for null or undefined", () => {
    expect(toValidScore(null)).toBe(0);
    expect(toValidScore(undefined)).toBe(0);
  });

  it("should return 0 for negative numbers", () => {
    expect(toValidScore(-1)).toBe(0);
    expect(toValidScore(-100)).toBe(0);
  });

  it("should return 5 for values greater than 5", () => {
    expect(toValidScore(6)).toBe(5);
    expect(toValidScore(999)).toBe(5);
  });

  it("should return exact value if between 0 and 5", () => {
    expect(toValidScore(0)).toBe(0);
    expect(toValidScore(1)).toBe(1);
    expect(toValidScore(2)).toBe(2);
    expect(toValidScore(3)).toBe(3);
    expect(toValidScore(4)).toBe(4);
    expect(toValidScore(5)).toBe(5);
  });
});
