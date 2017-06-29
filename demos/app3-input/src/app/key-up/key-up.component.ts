import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'key-up1',
  templateUrl: './key-up.component.html',
  styleUrls: ['./key-up.component.css']
})
export class KeyUpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  values = '';

  onKey(event: KeyboardEvent) { // with type info
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }

}
