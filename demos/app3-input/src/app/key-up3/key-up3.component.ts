import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'key-up3',
  templateUrl: './key-up3.component.html',
  styleUrls: ['./key-up3.component.css']
})
export class KeyUp3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  value = '';

  onEnter(value: string) { this.value = value; }

}
