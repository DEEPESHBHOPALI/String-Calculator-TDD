import { StringCalculator } from '../src/StringCalculator';

describe('StringCalculator', () => {
  it('should return 0 for an empty string', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("")).toBe(0);
  });

  it('should return the number itself for a single number', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("1")).toBe(1);
    expect(calculator.add("5")).toBe(5);
  });

  it('should return the sum of two numbers', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("1,2")).toBe(3);
    expect(calculator.add("10,20")).toBe(30);
  });

  it('should return the sum of multiple numbers', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("1,2,3")).toBe(6);
    expect(calculator.add("10,20,30,40")).toBe(100);
  });

  it('should handle new lines between numbers', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("1\n2,3")).toBe(6);
    expect(calculator.add("10\n20,30\n40")).toBe(100);
  });

  it('should handle custom delimiters', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("//;\n1;2")).toBe(3);
    expect(calculator.add("//|\n10|20|30")).toBe(60);
  });

  it('should throw an exception for negative numbers', () => {
    const calculator = new StringCalculator();
    expect(() => calculator.add("1,-2,3")).toThrow("negative numbers not allowed: -2");
    expect(() => calculator.add("1,-2,-3")).toThrow("negative numbers not allowed: -2,-3");
  });
});
