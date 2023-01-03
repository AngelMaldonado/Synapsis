import { Algorithm } from "../algorithm";
import { Category } from "../category";

class SortSelection implements Algorithm{
  algorithm: string;
  category: Category;
  n_size_array: number;
  data: Array<number>;

  constructor(n_size_array: number, data: Array<number>) {
    this.category = Category.Arrays;
    this.algorithm = "Selection Sort";
    this.n_size_array = n_size_array;
    this.data = data;
  }

  run(): void {
    for(let i = 0; i < this.data.length - 1; i++)
    {
      let min = i;

      for(let j = i + 1; j < this.data.length; j++)
      {
        if(this.data[j] < this.data[min])
        {
          // Choose the lesser of the two:
          min = j;
        }
      }
      // In-place swap:
      const tmp = this.data[min];
      this.data[min] = this.data[i];
      this.data[i] = tmp;
    }
    console.log(this.data);
  }
}
