

export interface IOperation<T> {
  execute(obj: T): void;
}
