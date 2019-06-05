/// <reference types="chrome"/>
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // the block ads flag
  isBlockAds: boolean;

  // background.js
  bg: any;

  constructor() { }

  ngOnInit() {
    this.bg = chrome.extension.getBackgroundPage();

    // every time we open the popup, we need read the settings saved in background.js
    this.isBlockAds = this.bg.isBlockAds;
  }

  /**
   * If trigger toggleChange or dragChange event, we will
   * call this function.
   */
  onSlideChange() {
    this.isBlockAds = !this.isBlockAds; // change the flag value
    this.bg.isBlockAds = this.isBlockAds; // save the value in background.js
  }
}
