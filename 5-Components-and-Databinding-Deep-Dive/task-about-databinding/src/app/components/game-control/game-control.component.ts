import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-game-control',
    templateUrl: './game-control.component.html',
    styleUrls: ['./game-control.component.css'],
})

export class GameControlComponent{
    interval;
    lastNumber:number = 0;
    @Output() gameStarted = new EventEmitter<number>();
   

    logConsoleNumber(){
        this.interval = setInterval(() => {
            this.gameStarted
            .emit(this.lastNumber++);
        },1000);
    }

    stopConsoleNumber(){
        clearInterval(this.interval);
    }
    
}