/// <reference types="chrome"/>
import {Component, OnInit, NgZone} from '@angular/core';
import {StorageManager} from '../common/storage.manager';
import {RouterManager} from '../common/router.manager';
import { HomeConstants } from '../common/home.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  // The block ads flag
  isBlockAds: boolean;
  // background.js
  bg: any = chrome.extension.getBackgroundPage();

  constructor(private ngZone: NgZone,
  ) {}

  ngOnInit() {
    const storageKeys = [StorageManager.BLOCK_ADS_KEY];
    chrome.storage.sync.get(storageKeys, items => {
      // Because the data-bind won't update the view in time. We need ngZone to update the view.
      this.ngZone.run(() => {
        this.isBlockAds = items.isBlockAds;
      });
    });
  }

  /**
   * Call this handler to clear ads.
   */
  clearAdsHandler(): void {
    this.isBlockAds = !this.isBlockAds; // change the flag value
    this.bg.isBlockAds = this.isBlockAds; // save the value in chrome.js
    chrome.storage.sync.set({isBlockAds: this.isBlockAds});
  }

  customBarrageHandler(event): void {
    //console.log(event);
    this.bg.isLoadCustom = true;
    chrome.tabs.create({url: 'dist/angular/index.html'});
  }
}
