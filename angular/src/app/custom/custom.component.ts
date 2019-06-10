import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {
  userNames: string[] = ['梅子酒青木马牛'];
  nameSize: string;
  nameColor: string;

  barrageName: string[] = [];
  barrageSize: string;
  barrageColor: string;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  bg: any = chrome.extension.getBackgroundPage();

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

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our userName
    if ((value || '').trim()) {
      this.userNames.push(value);
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(userName: string): void {
    const index = this.userNames.indexOf(userName);

    if (index >= 0) {
      this.userNames.splice(index, 1);
    }
  }

  saveHandler() {

  }
}
