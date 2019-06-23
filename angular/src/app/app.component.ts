import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {RouterManager} from "./common/router.manager";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular';
  bg: any = chrome.extension.getBackgroundPage();

  // router
  block = RouterManager.BLOCK_ADS;
  follow = RouterManager.FOLLOW;
  search = RouterManager.SEARCH;
  setting = RouterManager.SETTING;

  constructor(
    private router: Router
  ) {

  }
  ngOnInit(): void {}
}
