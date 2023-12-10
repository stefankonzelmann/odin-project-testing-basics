const capitalize = require("./capizalize");
const reverseString = require("./reverseString");

test("capitalize", () => {
  expect(capitalize("stefan")).toBe("Stefan");
});

test("reverseString", () => {
  expect(reverseString("stefan")).toBe("nafets");
});
