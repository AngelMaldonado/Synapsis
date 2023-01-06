import { Algorithm } from "../algorithm";
import { Category } from "../category";

export abstract class ArraySortingAlgorithm implements Algorithm {
  algorithm: string;
  category: Category;
  data: Array<number>;
  n_size_array: number;
  max: number;
  min: number;

  protected constructor(n_size_array: number, max: number, min: number) {
    this.algorithm = "array.sorting";
    this.category = Category.Arrays;
    this.n_size_array = n_size_array;
    this.data = Array(n_size_array);
    this.max = max;
    this.min = min;
  }

  generateArray(arrayDataConfig: {n_size_array: number, min: number, max: number}) {
    this.data.map(() => Math.floor(Math.random() * (this.max - this.min) + this.min));
  }

  run(): void {
  }
}
