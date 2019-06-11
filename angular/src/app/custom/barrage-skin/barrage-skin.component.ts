import { Component, OnInit } from '@angular/core';
import {MatChipInputEvent} from "@angular/material";
import {COMMA, ENTER} from "@angular/cdk/keycodes";

@Component({
  selector: 'app-barrage-skin',
  templateUrl: './barrage-skin.component.html',
  styleUrls: ['./barrage-skin.component.css']
})
export class BarrageSkinComponent implements OnInit {

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
