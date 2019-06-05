import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  check: boolean = false;
  menu: string[] = ['Avoid Ads', 'Info', 'Sign Out'];

  constructor() { }

  ngOnInit() {
  }

}
