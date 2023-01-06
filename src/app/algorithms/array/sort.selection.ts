import { ArraySortingAlgorithm } from "./array.sorting";

export class SortSelection extends ArraySortingAlgorithm {
  constructor(n_size_array: number, max: number, min: number) {
    super(n_size_array, max, min);
  }

  override run(): void {
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
