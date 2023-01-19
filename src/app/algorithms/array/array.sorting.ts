import { Algorithm } from "../algorithm";
import { Category } from "../category";

export abstract class ArraySortingAlgorithm implements Algorithm {
  algorithm: string;
  category: Category;
  data: Array<number>;

  protected constructor(arrayDataConfig: {n_size_array: number, min: number, max: number}) {
    this.algorithm = "array.sorting";
    this.category = Category.Arrays;
    this.data = Array(arrayDataConfig.n_size_array);
    this.generateArray(arrayDataConfig);
  }

  generateArray(arrayDataConfig: {n_size_array: number, min: number, max: number}){
    this.data = Array(arrayDataConfig.n_size_array);
    for(let value = 0; value < this.data.length; value++) {
      this.data[value] = Math.floor(Math.random() * (arrayDataConfig.max - arrayDataConfig.min + 1) + arrayDataConfig.min);
    }
    console.log(this.data);
  }

  run(): void {
  }
}
