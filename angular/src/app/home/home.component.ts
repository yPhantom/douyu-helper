/// <reference types="chrome"/>
import {Component, OnInit, NgZone} from '@angular/core';
import {MatDialog} from "@angular/material";
import {SettingDialogComponent} from "./setting-dialog/setting-dialog.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  // The block ads flag
  isBlockAds: boolean;
  // background.js
  bg: any;
  //
  danMuSavePath: string;

  constructor(private ngZone: NgZone,
              public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.bg = chrome.extension.getBackgroundPage();

    // Every time we open the popup, we need to read the settings saved in local storage.
    chrome.storage.sync.get("isBlockAds", item => {
      // Because the data-bind won't update the view in time. We need ngZone to update the view.
      this.ngZone.run(()=> {
        this.isBlockAds = item['isBlockAds'];
      })
    });
  }

  /**
   * If trigger toggleChange or dragChange event, we will
   * call this function.
   */
  onSlideChange(): void {
    this.isBlockAds = !this.isBlockAds; // change the flag value
    this.bg.isBlockAds = this.isBlockAds; // save the value in background.js
    chrome.storage.sync.set({"isBlockAds": this.isBlockAds});
  }

  openSettingDialog(): void {
    const dialogRef = this.dialog.open(SettingDialogComponent, {
      width: '600px',
      height: '400px',
      data: {path: this.danMuSavePath}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`path is : ${result}`);
      this.danMuSavePath = result;
    })
  }
}
