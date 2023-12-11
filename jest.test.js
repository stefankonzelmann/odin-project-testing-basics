const capitalize = require("./capizalize");
const reverseString = require("./reverseString");
const calculator = require("./calculator");
const caesar = require("./caesar");
const analyzeArray = require("./analyzeArray");

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

test("caesar", () => {
  expect(caesar("abcd", 1)).toBe("BCDE");
  expect(caesar("zypern", 4)).toBe("DCTIVR");
});

test("array", () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(object).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
