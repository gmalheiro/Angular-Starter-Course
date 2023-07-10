import { Component } from "@angular/core";

@Component({
    selector: "app-assignment",
    templateUrl: "./assignment.component.html",
    styleUrls: [ "../../../node_modules/bootstrap/scss/bootstrap.scss","./assignment.component.scss"]
})

export class AssignmentComponent {

    showSecret:boolean = false;
    //log = [0];
    log = [new Date()];

    onToggleDetails(){
        this.showSecret = !this.showSecret;
        //this.log.push(this.log.length + 1);
        this.log.push(new Date());
    }
}