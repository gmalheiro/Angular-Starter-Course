import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BasicHighlight } from './directives/basic-highlight/basic-higlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight/better-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlight,
    BetterHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
