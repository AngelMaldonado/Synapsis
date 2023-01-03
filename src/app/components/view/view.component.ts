import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {Category} from "../../algorithms/category";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  currentCategory: Category = Category.Arrays;

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

  ngOnInit(): void {
  }
}
