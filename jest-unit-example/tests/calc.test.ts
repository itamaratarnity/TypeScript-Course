import { Calculator } from '../src/calc';

describe('Calculator Class', () => {
  let calc: Calculator;

  beforeEach(() => {
    calc = new Calculator();
  });

  test('adds numbers correctly', () => {
    expect(calc.add(10, 5)).toBe(15);
  });

  test('subtracts numbers correctly', () => {
    expect(calc.subtract(10, 5)).toBe(5);
  });

  test('multiplies numbers correctly', () => {
    expect(calc.multiply(4, 3)).toBe(12);
  });

  test('divides numbers correctly', () => {
    expect(calc.divide(10, 2)).toBe(5);
  });

  test('throws error when dividing by zero', () => {
    expect(() => calc.divide(10, 0)).toThrow("Cannot divide by zero");
  });

  test('stores and recalls memory', () => {
    calc.storeInMemory(42);
    expect(calc.recallMemory()).toBe(42);
  });

  test('clears memory', () => {
    calc.storeInMemory(100);
    calc.clearMemory();
    expect(calc.recallMemory()).toBe(0);
  });
});
