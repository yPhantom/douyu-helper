import {Component, NgZone, OnInit} from '@angular/core';
import {StorageManager} from "../common/storage.manager";

@Component({
  selector: 'app-block-ads',
  templateUrl: './block-ads.component.html',
  styleUrls: ['./block-ads.component.css']
})
export class BlockAdsComponent implements OnInit {

  isHideFansCard: boolean;

  constructor(private ngZone: NgZone) { }

  ngOnInit() {
    const storageKeys = [StorageManager.HIDE_FANS_CARD_KEY];
    chrome.storage.sync.get(storageKeys, items => {
      // Because the data-bind won't update the view in time. We need ngZone to update the view.
      this.ngZone.run(() => {
        this.isHideFansCard = items.isHideFansCard;
      });
    });
  }

  onHideFansCardClick() {
    this.isHideFansCard = !this.isHideFansCard;
    chrome.storage.sync.set({isHideFansCard: this.isHideFansCard});
  }
}
