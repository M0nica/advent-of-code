const alarm = require("./day_2_program_alarm");

describe("analyzeOpcode()", () => {
  test("opcode that starts with 99 should just return nothing", () => {
    expect(alarm.analyzeOpcode([99])).toBe("STOP");
  });
  describe("opcode [1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50] should return [9, 10, 70, 2, 3, 11, 0, 99, 30, 40, 50]", () => {
    test("should return array[30] equals 70", () => {
      expect(
        alarm.analyzeOpcode([1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50])[3]
      ).toBe(70);
    });
  });

  describe("opcode [3500, 9, 10, 70,  2, 3, 11, 0, 99, 30, 40, 50]", () => {
    test("should return array[0] equals 3500", () => {
      expect(
        alarm.analyzeOpcode([3500, 9, 10, 70, 2, 3, 11, 0, 99, 30, 40, 50])[0]
      ).toBe(3500);
    });
  });
});
