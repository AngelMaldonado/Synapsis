/**
 * TODO: Set default type string based on url user selection
 * TODO: Set algorithm and data configuration correctly to the correct Algorithm instance
 */
import { Component, Input } from '@angular/core';
import { Category } from "../../algorithms/category";
import { Algorithm } from "../../algorithms/algorithm";
import { ArraySortingAlgorithm } from "../../algorithms/array/array.sorting";
import { SortSelection } from "../../algorithms/array/sort.selection";

@Component({
  selector: 'app-algconfig',
  templateUrl: './algconfig.component.html',
  styleUrls: ['./algconfig.component.scss']
})

export class AlgconfigComponent {
  @Input() category: Category | undefined;

  type: string = "Sorting";
  algorithm: Algorithm = new SortSelection(10, 1, 10);
  arrayDataConfig = {
    n_size_array: 50,
    min: 0,
    max: 10
  };

  constructor() {
  }

  ngOnInit(): void {
    this.algorithm.run();
  }

  generateArray(): void {
    (this.algorithm as ArraySortingAlgorithm).generateArray(this.arrayDataConfig);
  }
}
