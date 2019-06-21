import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {RouterManager} from "../../common/router.manager";

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  bg: any = chrome.extension.getBackgroundPage();
  title = 'Default';

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activateRoute.queryParams.subscribe(queryParams => {
    });
  }

  // router https://blog.csdn.net/erciyuan_nuonuo/article/details/54604311
  ngOnInit() {
    if (this.bg.tabRouterFlag === RouterManager.BARRAGE_SKIN) {
      this.router.navigate([RouterManager.CUSTOM, RouterManager.BARRAGE_SKIN]);
    } else if (this.bg.tabRouterFlag === RouterManager.BARRAGE_SEARCH) {
      this.router.navigate([RouterManager.CUSTOM, RouterManager.BARRAGE_SEARCH]);
    }
    this.bg.tabRouterFlag = RouterManager.HOME;

  }


}
