const checkPassword = require("./day_4_secure_container");

describe("isCorrectLength", () => {
  test("012345 should return TRUE", () => {
    const input = "012345";
    expect(checkPassword.isCorrectLength(input)).toBe(true);
  });
  test("01234  should return FALSE", () => {
    const input = "01234";
    expect(checkPassword.isCorrectLength(input)).toBe(false);
  });
});

describe("hasTwoDuplicatesInARow", () => {
  test("012344 should return true", () => {
    const input = "012344";
    expect(checkPassword.hasTwoDuplicatesInARow(input)).toBe(true);
  });
  test("012345 should return false", () => {
    const input = "012345";
    expect(checkPassword.hasTwoDuplicatesInARow(input)).toBe(false);
  });
});

describe("hasIncreasingNumbers", () => {
  test("012345 should return true", () => {
    const input = "012345";
    expect(checkPassword.hasIncreasingNumbers(input)).toBe(true);
  });
  test("543210 should return false", () => {
    const input = "543210";
    expect(checkPassword.hasIncreasingNumbers(input)).toBe(false);
  });
});

describe("passesRules", () => {
  test("111111 returns true", () => {
    const input = "111111";
    expect(checkPassword.passesRules(input)).toBe(true);
  });
  test("223450 (decreasing numbers) returns false", () => {
    const input = "223450";
    expect(checkPassword.passesRules(input)).toBe(false);
  });
  test("123789 (no doubles) returns false", () => {
    const input = "123789";
    expect(checkPassword.passesRules(input)).toBe(false);
  });
});

describe("generateNumbersfromRange", () => {
  test("0,2", () => {
    expect(checkPassword.generateNumbersFromRange(0, 2)).toStrictEqual(["1"]);
  });
});

describe("countPossiblePasswords", () => {
  test("0,2", () => {
    expect(checkPassword.countPossiblePasswords(111110, 111112)).toBe(1);
  });
});

describe("hasExactlyTwoDuplicatesInARow", () => {
  test("112233 returns true", () => {
    expect(checkPassword.hasExactlyTwoDuplicatesInARow("112233")).toBe(true);
  });
  test("111122 returns true", () => {
    expect(checkPassword.hasExactlyTwoDuplicatesInARow("111122")).toBe(true);
  });
  test("123444 returns false because of 444", () => {
    expect(checkPassword.hasExactlyTwoDuplicatesInARow("123444")).toBe(false);
  });
});
