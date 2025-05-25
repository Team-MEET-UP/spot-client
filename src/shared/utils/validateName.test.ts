import { validateName } from "./validateName";

describe("validateName", () => {
  it("빈 문자열이면 '이름을 입력해 주세요.' 메시지를 반환해야 한다", () => {
    expect(validateName("")).toBe("이름을 입력해 주세요.");
    expect(validateName("   ")).toBe("이름을 입력해 주세요.");
  });

  it("이름이 5글자를 초과하면 '5글자 이내로 작성해주세요.' 메시지를 반환해야 한다", () => {
    expect(validateName("홍길동123")).toBe("5글자 이내로 작성해주세요.");
  });

  it("유효한 이름이면 빈 문자열을 반환해야 한다", () => {
    expect(validateName("홍길동")).toBe("");
    expect(validateName("김나현")).toBe("");
  });
});
