export interface IGetOneRandom<T> {
  getOneRandom(): Promise<T | number>;
}; 

export interface IGetBy<T, K> {
  getBy(key: K): Promise<T[] | number>;
};

export interface ISave<T> {
  save(o: T): Promise<void>;
};

export interface IGetOneBy<T, K> {
  getOneBy(key: K): Promise<T>;
};

export interface IGetALL<T> {
  getAll(): Promise<T[]>;
};
