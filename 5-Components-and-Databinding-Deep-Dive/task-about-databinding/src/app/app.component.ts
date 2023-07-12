import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  Odds:any = [];
  Evens:any = [];
  numberToBeLogged:number;
  OddNumber:number = this.Odds[1] ;

  onNumberAdded(something:any){
    this.numberToBeLogged = something;
    console.log('Logging the number: '+this.numberToBeLogged);
  }

  oddOrEven(something:any){
    if(something != 0){
    if(something % 2 == 0){
      this.Evens.push(something);
    }else{
      this.Odds.push(something);
    }
    }
  }



  
}
