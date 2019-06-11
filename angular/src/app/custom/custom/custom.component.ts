import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  ngOnInit() {
    this.bg.isLoadCustom = false;
  }


}
