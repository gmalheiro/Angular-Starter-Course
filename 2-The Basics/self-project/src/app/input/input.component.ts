import { Component } from "@angular/core";

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})

export class InputComponent {
    personName = '';
    personAddedStatus = 'No person was created';
    personStatus = '';
    timesClicked = 0;
    allowNewPerson = true;

    constructor() { 
    }

    onPersonAdded(){
      if(this.personName == ''){
        this.allowNewPerson = true;
        this.personStatus = 'offline';
        this.personAddedStatus = ` No one was created! Everyone is ${this.personStatus} `;
      }else{
        this.timesClicked++;
        this.timesClicked === 3 ? this.allowNewPerson = false : this.allowNewPerson = true;
        this.personStatus = 'online';
        this.personAddedStatus = `${this.personName} is ${this.personStatus}, he has been called ${this.timesClicked} times!`;
      }
    }


}