import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {Category} from "../../algorithms/category";
import {Application, Text} from 'pixi.js';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  currentCategory: Category = Category.Arrays;

  @ViewChild('pixi') pixi: any;
  pixiApp: any;
  pixiResizeObserver: ResizeObserver | undefined;

  constructor(private router: Router, private zone: NgZone) {
    this.router.events.subscribe(change => {
      if (change instanceof NavigationEnd) {
        switch (change['url']) {
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

  ngOnDestroy() {
    this.pixiResizeObserver?.unobserve(this.pixi.nativeElement);
  }

  ngAfterViewInit(): void {
    this.pixiApp = new Application({
      width: this.pixi.nativeElement.offsetWidth,
      height: this.pixi.nativeElement.offsetHeight,
      backgroundColor: 0x2980b9
    });
    this.pixi.nativeElement.appendChild(this.pixiApp.view);
    this.pixiApp.loader.load(() => this.onAssetsLoaded());

    this.pixiResizeObserver = new ResizeObserver(entry => {
      this.zone.run(() => {
        const pixiParentDiv = entry[0];
        this.pixiApp.renderer.resize(
          pixiParentDiv.contentRect.width,
          pixiParentDiv.contentRect.height
        );
      });
    });
    this.pixiResizeObserver.observe(this.pixi.nativeElement);
  }

  onAssetsLoaded() {
    const basicText = new Text('Some text here');
    basicText.x = 5;
    basicText.y = 5;
    this.pixiApp.stage.addChild(basicText);
  }
}
