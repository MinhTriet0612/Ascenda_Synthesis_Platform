import { Operation } from "../operations/IOperation";

export class PineLine<T> {
  private readonly operations: Operation<T>[];

  constructor() {
    this.operations = [];
  }

  public addOperation(operation: Operation<T>): this {
    this.operations.push(operation);
    return this;
  }

  public async execute(data: T): Promise<void> {
    for (const operation of this.operations) {
      await operation.execute(data).then(() => {
        console.log('Operation completed');
      });
    }
  }
}
