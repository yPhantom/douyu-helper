import {Component, NgZone, OnInit} from '@angular/core';
import {StorageManager} from "../common/storage.manager";

@Component({
  selector: 'app-block-ads',
  templateUrl: './block-ads.component.html',
  styleUrls: ['./block-ads.component.css']
})
export class BlockAdsComponent implements OnInit {

  isHideFansCard: boolean;
  isHideUserLevel: boolean;
  isHideMotor: boolean;
  isHideEnter: boolean;

  constructor(private ngZone: NgZone) { }

  ngOnInit() {
    const storageKeys = [StorageManager.HIDE_FANS_CARD_KEY,
      StorageManager.HIDE_USER_LEVEL_KEY,
      StorageManager.HIDE_MOTOR_KEY,
      StorageManager.HIDE_ENTER_KEY];

    chrome.storage.sync.get(storageKeys, items => {
      // Because the data-bind won't update the view in time. We need ngZone to update the view.
      this.ngZone.run(() => {
        this.isHideFansCard = items.isHideFansCard;
        this.isHideUserLevel = items.isHideUserLevel;
        this.isHideMotor = items.isHideMotor;
        this.isHideEnter = items.isHideEnter;
      });
    });
  }

  onHideFansCardClick() {
    this.isHideFansCard = !this.isHideFansCard;
    chrome.storage.sync.set({isHideFansCard: this.isHideFansCard});
  }

  onHideUserLevelClick() {
    this.isHideUserLevel = !this.isHideUserLevel;
    chrome.storage.sync.set({isHideUserLevel: this.isHideUserLevel});
  }

  onHideMotorClick() {
    this.isHideMotor = !this.isHideMotor;
    chrome.storage.sync.set({isHideMotor: this.isHideMotor});
  }

  onHideEnterClick() {
    this.isHideEnter = !this.isHideEnter;
    chrome.storage.sync.set({isHideEnter: this.isHideEnter});
  }
}
