import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'key-up4',
  templateUrl: './key-up4.component.html',
  styleUrls: ['./key-up4.component.css']
})
export class KeyUp4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  value = '';

  update(value: string) { this.value = value; }

}
