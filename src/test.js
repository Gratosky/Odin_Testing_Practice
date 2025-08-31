import { analyzeArray, ceaserCipher, reverseString } from "./my_func.js";
import { capitalize } from "./my_func.js";
import { Calculate } from "./my_func.js";

// Test for reversing a string
describe("reverseString", () => {
  test("should reverse a single word correctly", () => {
    expect(reverseString("hello")).toBe("olleh");
  });
});

// Test for capitalizing 1st letter of a string
describe("capitalize", () => {
  test("should capitalize first letter", () => {
    expect(capitalize("Captain")).toBe("Captain");
  });
});

// Test for calculator
describe("calculate simple operations", () => {
  test("should add two numbers together", () => {
    const addition = new Calculate(1, 1);

    const result = addition.sum();
    expect(result).toBe(2);
  });
  test("should multiply two numbers and return the product", () => {
    const product = new Calculate(2, 3);

    const result = product.multiply();
    expect(result).toBe(6);
  });
  test("should divide two numbers", () => {
    const division = new Calculate(4, 2);

    const result = division.divide();

    expect(result).toBe(2);
  });
});

// Test for ceaser cipher
describe("shift letters in desired order", () => {
  test("should shift letters using the provided key", () => {
    const originalString = "xyz";
    const shiftedString = ceaserCipher(originalString, 4);
    console.log(shiftedString);
    expect(shiftedString).toBe("bcd");
  });
});

//Test for an object returning average, min, max and length of a given array
describe("Take an array of numbers and return an object containing average, min, max and te length of the array", () => {
  test("Should return average of the array", () => {
    const myArray = [1, 2, 3];
    const analysis = analyzeArray(myArray);
    expect(analysis.average).toBe(2);
  });
  test("Should return the min of the array", () => {
    const myArray = [1, 2, 3];
    const analysis = analyzeArray(myArray);
    expect(analysis.minimum).toBe(1);
  });
  test("Should return the max of the array", () => {
    const myArray = [1, 2, 3];
    const analysis = analyzeArray(myArray);
    expect(analysis.maximum).toBe(3);
  });
  test("Should return the length of the array", () => {
    const myArray = [1, 2, 3];
    const analysis = analyzeArray(myArray);
    expect(analysis.length).toBe(3);
  });
});
