import {Component, Input, OnInit} from '@angular/core';
import { Algorithm } from "../../algorithms/algorithm";

@Component({
  selector: 'app-algconfig',
  templateUrl: './algconfig.component.html',
  styleUrls: ['./algconfig.component.scss']
})
export class AlgconfigComponent implements OnInit {
  @Input() algorithm: Algorithm | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
