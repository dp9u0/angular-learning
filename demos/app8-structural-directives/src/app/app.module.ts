import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }         from './app.component';
import { heroSwitchComponents } from './hero-switch.components';
import { UnlessDirective }    from './unless.directive';
import { RangeDirective } from "./range.directive";

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [
    AppComponent,
    heroSwitchComponents,
    UnlessDirective,
    RangeDirective
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
