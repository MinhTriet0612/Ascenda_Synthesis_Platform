

export interface Operation<T> {
  execute(obj: T): void;
}
