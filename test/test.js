// Importing the Chai library to use its assert method, which offers more features than the built-in Node.js assertions
import { assert, expect } from "chai";
//We are importing our Functions from src/index.js
import {
  helloWorld,
  addition,
  subtraction,
  multiplication,
  division,
  remainder,
  exponentiation,
} from "../src/index.js";

describe("it should return 'helloWorld'", () => {
  it("should return a string", () => {
    const result = helloWorld();
    assert.typeOf(result, "string", "helloWorld");
  });
});

describe("it should add two numbers", () => {
  it("should add two numbers and return the result", () => {
    const result = addition(5, 10);
    assert.equal(result, 15);
  });

  it("should add two negative numbers and return the result", () => {
    const result = addition(-5, -10);
    assert.equal(result, -15);
  });
});

describe("it should subtract two numbers", () => {
  it("should subtract two numbers and return the result", () => {
    const result = subtraction(10, 5);
    assert.equal(result, 5);
  });

  it("should subtract two negative numbers and return the result", () => {
    const result = addition(-5, -10);
    assert.equal(result, -15);
  });
});

describe("it should multiply two numbers", () => {
  it("should multiply two numbers and return the result", () => {
    const result = multiplication(10, 5);
    assert.equal(result, 50);
  });

  it("should multiply two negative numbers and return the result", () => {
    const result = multiplication(-5, -10);
    assert.equal(result, 50);
  });
});

describe("it should divide two numbers", () => {
  it("should divide two numbers and return the result", () => {
    const result = division(10, 5);
    assert.equal(result, 2);
  });

  it("should divide two negative numbers and return the result", () => {
    const result = division(-10, -5);
    assert.equal(result, 2);
  });
});

describe("it should return a remainder for a number that divides into another number", () => {
  it("should return zero when divided evenly", () => {
    const value = remainder(10, 2);
    assert.equal(value, 0);
  });

  it("should return a number other than zero if not evenly divided", () => {
    const result = remainder(10, 3);
    assert.equal(result, 1);
    // expect(result).to.equal(-15)
  });
});

describe("it should raise the number by the input value", () => {
  it("raises the number by the input value", () => {
    const value = exponentiation(2, 3);
    assert.equal(value, 8);
  });

   it("raises the number by the input value using negative numbers", () => {
     const value = exponentiation(2, -3);
     assert.equal(value, 1/8);
   });
});
