import {Algorithm} from "../algorithm";
import {Category} from "../category";

abstract class Arrays implements Algorithm {
  category: Category;
  name: string;
  n_size_array: number;
  data: Array<number>;

  protected constructor() {
    this.category = Category.Arrays;
    this.name = "";
    this.n_size_array = 0;
    this.data = [];
  }

  run(): void {
  }
}
