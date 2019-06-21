import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {RouterManager} from "./common/router.manager";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular';
  bg: any = chrome.extension.getBackgroundPage();

  constructor(
    private router: Router
  ) {

  }
  ngOnInit(): void {
    if (this.bg.tabRouterFlag === RouterManager.HOME) {
      this.router.navigate([RouterManager.HOME]);
    } else {
      this.router.navigate([RouterManager.CUSTOM]);
    }
  }
}
