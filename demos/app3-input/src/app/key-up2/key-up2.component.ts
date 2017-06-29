import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'key-up2',
  templateUrl: './key-up2.component.html',
  styleUrls: ['./key-up2.component.css']
})
export class KeyUp2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  values = '';

  onKey(value: string) {
    this.values += value + ' | ';
  }

}
