/// <reference types="chrome"/>
import {Component, OnInit, NgZone, AfterViewInit} from '@angular/core';
import {Router} from '@angular/router';
import {StorageManager} from '../common/storage.manager';
import {RouterManager} from '../common/router.manager';
import { HomeConstants } from '../common/home.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit{
  // The block ads flag
  isBlockAds: boolean;
  isCatchBarrage: boolean;
  // background.js
  bg: any;
  barrageCount = '';
  badgeSize = 'small';

  constructor(private ngZone: NgZone,
              private router: Router
  ) {}

  ngOnInit() {
    this.bg = chrome.extension.getBackgroundPage();
  }

  /**
   * Call this handler to clear ads.
   */
  clearAdsHandler(): void {
    this.isBlockAds = !this.isBlockAds; // change the flag value
    this.bg.isBlockAds = this.isBlockAds; // save the value in chrome.js
    chrome.storage.sync.set({isBlockAds: this.isBlockAds});
  }

  /**
   * Call this handler to catch barrage.
   */
  catchBarrageHandler(): void {
    this.isCatchBarrage = !this.isCatchBarrage; // change the flag value
    this.bg.isCatchBarrage = this.isCatchBarrage; // save the value in chrome.js
    chrome.storage.sync.set({isCatchBarrage: this.isCatchBarrage});

    if (!this.isCatchBarrage) {
      this.bg.sendMessageToContentScript({cmd: 'cancelCatch'}, res => {
        // to do log
      });
    }
    
  }

  /**
   * If we click the catch icon button, navigate to barrage catch page.
   */
  navigateToBarrageCatch(): void {
    this.router.navigate([RouterManager.BARRAGE_CATCH], {
      queryParams: {
        path: this.isCatchBarrage,
        barrageCount: this.barrageCount
      }
    });
  }

  ngAfterViewInit(): void {
    // Every time we open the popup, we need to read the settings saved in local storage.
    const storageKeys = [StorageManager.BLOCK_ADS_KEY, StorageManager.CATCH_BARRAGE_KEY];
    chrome.storage.sync.get(storageKeys, items => {
      // Because the data-bind won't update the view in time. We need ngZone to update the view.
      this.ngZone.run(() => {
        this.isBlockAds = items.isBlockAds;
        this.isCatchBarrage = items.isCatchBarrage;
      });
    });

    // chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    //   if (this.isCatchBarrage && request.cmd === 'updateBarrage') {
    //     this.ngZone.run(() => {
    //       if (this.badgeSize === 'small' && request.params > 100) {
    //         this.badgeSize = 'medium';
    //       }
    //       this.barrageCount = String(request.params);
    //     });
    //     sendResponse(HomeConstants.OK);
    //   }
    // });
  }
}
