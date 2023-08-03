import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PracticeComponent } from './practice/practice.component';
import { CardComponent } from './card/card.component';
import { HblcalculatorComponent } from './hblcalculator/hblcalculator.component';


@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent,
    CardComponent,
    HblcalculatorComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
