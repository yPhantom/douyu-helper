import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.css']
})
export class FollowComponent implements OnInit {

  userNames: string[] = ['梅子酒青木马牛'];
  nameSize: string;
  nameColor: string;

  barrageName: string[] = [];
  barrageSize: string;
  barrageColor: string;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor() { }

  ngOnInit() {
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
