import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'click-me',
  templateUrl: './click-me.component.html',
  styleUrls: ['./click-me.component.css']
})
export class ClickMeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  text = 'click';
  count = 0;
  clickMessage = '';

  onClickMe() {
    this.clickMessage = `clicked: ${this.count}`;
    this.text = `click ${++this.count}`;
  }

}
