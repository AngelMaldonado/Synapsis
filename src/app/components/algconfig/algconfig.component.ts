/**
 * TODO: Set default type string based on url user selection
 * TODO: Set algorithm and data configuration correctly to the correct Algorithm instance
 */
import {Component, Input} from '@angular/core';
import {Category} from "../../algorithms/category";
import {Algorithm} from "../../algorithms/algorithm";
import {ArraySortingAlgorithm} from "../../algorithms/array/array.sorting";
import {SortSelection} from "../../algorithms/array/sort.selection";

@Component({
  selector: 'app-algconfig',
  templateUrl: './algconfig.component.html',
  styleUrls: ['./algconfig.component.scss']
})

export class AlgconfigComponent {
  /** Class reference for static fields **/
  public algconfigComponent = AlgconfigComponent;
  /** Default array algorithms configurations **/
  static readonly ARRAY_MIN = 10;
  static readonly ARRAY_MAX = 1000;
  static readonly ARRAY_VAL_MIN = -100;
  static readonly ARRAY_VAL_MAX = 100;
  arrayDataConfig = {
    n_size_array: this.algconfigComponent.ARRAY_MIN,
    min: this.algconfigComponent.ARRAY_VAL_MIN/2,
    max: this.algconfigComponent.ARRAY_VAL_MAX/2
  };
  @Input() category: Category | undefined;

  type: string = "Sorting";
  algorithm: Algorithm | undefined;

  constructor() {
    this.type = "Sorting";
    this.algorithm = new SortSelection(this.arrayDataConfig);
  }

  ngOnInit(): void {
  }

  generateArray(): void {
    console.log(this.arrayDataConfig);
    (this.algorithm as ArraySortingAlgorithm).generateArray(this.arrayDataConfig);
  }
}
