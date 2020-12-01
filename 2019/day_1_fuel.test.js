const fuelCalculator = require("./day_1_fuel.js");

describe("getFuelAmount", () => {
  test("fuel amount for 12 is 2", () => {
    expect(fuelCalculator.getFuelAmount(12)).toBe(2);
  });

  test("fuel amount for 14 is 2", () => {
    expect(fuelCalculator.getFuelAmount(14)).toBe(2);
  });

  test("fuel amount for  1969 is 654", () => {
    expect(fuelCalculator.getFuelAmount(1969)).toBe(654);
  });

  test("fuel amount for 100756 is 33583", () => {
    expect(fuelCalculator.getFuelAmount(100756)).toBe(33583);
  });
});

describe("getTotalFuelAmount", () => {
  test("fuel amount for 12 and 14 is 4", () => {
    expect(fuelCalculator.getTotalFuelAmount([12, 14])).toBe(4);
  });

  test("fuel amount for 14 and 1969 is 656", () => {
    expect(fuelCalculator.getTotalFuelAmount([14, 1969])).toBe(656);
  });
});

describe("getRecursiveTotalFuelAmount", () => {
  test("fuel amount for 14 is 2", () => {
    expect(fuelCalculator.getRecursiveTotalFuelAmount([14])).toBe(2);
  });
  test("fuel amount for 1969 is 966", () => {
    expect(fuelCalculator.getRecursiveTotalFuelAmount([1969])).toBe(966);
  });
  test("fuel amount for 100756 is 2", () => {
    expect(fuelCalculator.getRecursiveTotalFuelAmount([100756])).toBe(50346);
  });
  test("fuel amount for 1969 and 14 is 968", () => {
    expect(fuelCalculator.getRecursiveTotalFuelAmount([1969, 14])).toBe(968);
  });
});
