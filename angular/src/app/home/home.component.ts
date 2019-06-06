/// <reference types="chrome"/>
import {Component, OnInit, NgZone} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  // the block ads flag
  isBlockAds: boolean;

  // background.js
  bg: any;

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    this.bg = chrome.extension.getBackgroundPage();

    // every time we open the popup, we need to read the settings saved in local storage
    chrome.storage.sync.get("isBlockAds", item => {
      this.ngZone.run(()=> {
        this.isBlockAds = item['isBlockAds'];
      })
    });
  }

  /**
   * If trigger toggleChange or dragChange event, we will
   * call this function.
   */
  onSlideChange() {
    this.isBlockAds = !this.isBlockAds; // change the flag value
    this.bg.isBlockAds = this.isBlockAds; // save the value in background.js
    chrome.storage.sync.set({"isBlockAds": this.isBlockAds});
  }
}
