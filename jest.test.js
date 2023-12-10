const capitalize = require("./capizalize");
const reverseString = require("./reverseString");
const calculator = require("./calculator");

test("capitalize", () => {
  expect(capitalize("stefan")).toBe("Stefan");
});

test("reverseString", () => {
  expect(reverseString("stefan")).toBe("nafets");
});

test("calculator", () => {
  calc = calculator();
  expect(calc.add(2, 5)).toBe(7);
  expect(calc.subtract(2, 5)).toBe(-3);
  expect(calc.multiply(2, 5)).toBe(10);
  expect(calc.divide(2, 5)).toBe(0.4);
});
