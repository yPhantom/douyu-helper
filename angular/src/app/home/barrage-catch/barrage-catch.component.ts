import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { HomeConstants } from 'src/app/common/home.constants';

@Component({
  selector: 'app-barrage-catch',
  templateUrl: './barrage-catch.component.html',
  styleUrls: ['./barrage-catch.component.css']
})
export class BarrageCatchComponent implements OnInit {

  isDownload: boolean;
  barrageCount = 0;

  bg: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.activateRoute.queryParams.subscribe(queryParams => {
      this.isDownload = queryParams.isDownloadDanMus;
      this.barrageCount = queryParams.barrageCount;
    });
  }

  ngOnInit() {
    this.bg = chrome.extension.getBackgroundPage();
  }

  showDefaultFolder(): void {
    chrome.downloads.showDefaultFolder();
  }

  downloadBarrage(): void {
    this.bg.sendMessageToContentScript({cmd: 'download'}, response => {
      if (response === HomeConstants.OK) {
        console.log('[Angular] Download successfully');
      }
    });
  }
}
