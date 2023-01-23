import {Component, OnInit, ViewChild} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {Category} from "../../algorithms/category";
import * as PIXI from 'pixi.js';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  currentCategory: Category = Category.Arrays;

  @ViewChild('pixi') pixi: any;
  pixiApp: any;

  constructor(private router: Router) {
    this.router.events.subscribe(change => {
      if(change instanceof NavigationEnd) {
        switch(change['url']) {
          case "/Arrays":
            this.currentCategory = Category.Arrays;
            break;
          case "/Graphs":
            this.currentCategory = Category.Graphs;
            break;
          case "/AI":
            this.currentCategory = Category.AI;
            break;
          default:
            this.currentCategory = Category.Arrays;
            break;
        }
      }
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log(PIXI.VERSION);
    this.pixiApp = new PIXI.Application({
      width: 400,
      height: 56,
      backgroundColor: 0x2980b9
    });
    this.pixi.nativeElement.appendChild(this.pixiApp.view);
    this.pixiApp.loader.load(() => this.onAssetsLoaded())
  }

  onAssetsLoaded() {
    const basicText = new PIXI.Text('Some text here');
    basicText.x = 5;
    basicText.y = 5;
    this.pixiApp.stage.addChild(basicText);
  }
}
