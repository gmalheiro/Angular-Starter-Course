import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GameControlComponent } from './components/game-control/game-control.component';
import { OddNumbersComponent } from './components/odd-numbers/odd-numbers.component';
import { EvenNumbersComponent } from './components/even-numbers/even-numbers.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    OddNumbersComponent,
    EvenNumbersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
