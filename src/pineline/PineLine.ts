import { IOperation } from "../operations/IOperation";

export class PineLine<T> {
  private readonly operations: IOperation<T>[];

  constructor() {
    this.operations = [];
  }

  public addOperation(operation: IOperation<T>): PineLine<T> {
    this.operations.push(operation);
    return this;
  }


  public execute(data: T): void {
    this.operations.forEach(operation => operation.execute(data));
  }

}
