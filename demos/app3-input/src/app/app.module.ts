import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClickMeComponent } from './click-me/click-me.component';
import { KeyUpComponent } from './key-up/key-up.component';
import { LoopBackComponent } from './loop-back/loop-back.component';
import { LittleTourComponent } from './little-tour/little-tour.component';
import { KeyUp2Component } from './key-up2/key-up2.component';
import { KeyUp3Component } from './key-up3/key-up3.component';
import { KeyUp4Component } from './key-up4/key-up4.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickMeComponent,
    KeyUpComponent,
    LoopBackComponent,
    LittleTourComponent,
    KeyUp2Component,
    KeyUp3Component,
    KeyUp4Component
  ],
  imports: [
    BrowserModule
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
