import { Component, Input } from '@angular/core';
import { Category } from "../../algorithms/category";

@Component({
  selector: 'app-algconfig',
  templateUrl: './algconfig.component.html',
  styleUrls: ['./algconfig.component.scss']
})

export class AlgconfigComponent {
  @Input() category: Category | undefined;
  type: string | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  setType() {
    const types = document.querySelector('[aria-label="Types list"]') as HTMLSelectElement;
    const type = types.options[types.selectedIndex].value;
    switch(this.category) {
      case Category.Arrays:
        switch(type) {
          case "Sorting":
            break;
          case "Search":
            break;
          default:
            break;
        }
        break;
    }
  }
}
