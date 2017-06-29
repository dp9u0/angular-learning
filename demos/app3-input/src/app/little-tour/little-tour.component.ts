import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'little-tour',
  templateUrl: './little-tour.component.html',
  styleUrls: ['./little-tour.component.css']
})
export class LittleTourComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }

}
