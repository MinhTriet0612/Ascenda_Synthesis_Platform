

export interface Operation<T> {
  execute(obj: T): Promise<void>;
}
