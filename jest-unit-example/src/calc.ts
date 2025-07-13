export class Calculator {
  private memory: number = 0;

  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
  }

  storeInMemory(value: number): void {
    this.memory = value;
  }

  recallMemory(): number {
    return this.memory;
  }

  clearMemory(): void {
    this.memory = 0;
  }
}