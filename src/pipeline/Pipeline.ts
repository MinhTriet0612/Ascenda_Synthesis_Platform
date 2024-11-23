import { Operation } from "../operations/Operation";

export class Pipeline<T> {
  private readonly operations: Operation<T>[];

  constructor() {
    this.operations = [];
  }

  public addOperation(operation: Operation<T>): Pipeline<T> {
    this.operations.push(operation);
    return this;
  }

  public async run(data: T): Promise<void> {
    for (const operation of this.operations) {
      await operation.execute(data).then(() => {
        console.log(operation.constructor.name + " executed");
      });
    }
  }
}
