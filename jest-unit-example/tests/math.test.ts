import { add, subtract } from '../src/math';

describe('Math Functions', () => {
  test('adds numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtracts numbers correctly', () => {
    expect(subtract(5, 2)).toBe(3);
  });
});