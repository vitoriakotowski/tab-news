const calculator = require("../../models/calulator.js");

test("add up 2 + 2 should return 4", () => {
  const result = calculator.addUp(2, 2);
  expect(result).toBe(4);
});

test("add up 5 + 100 should return 105", () => {
  const result = calculator.addUp(5, 100);
  expect(result).toBe(105);
});

test("input different than number", () => {
  const result = calculator.addUp("banana", 1000);
  expect(result).toBe("Error");
});
