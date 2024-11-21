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


  public execute(data: T): void {
    this.operations.forEach(operation => operation.execute(data));
  }

}
