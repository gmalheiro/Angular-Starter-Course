import { Component } from '@angular/core';

@Component({
  //selector: '[app-servers]', Seleciona como atributo
  //selector: '.app-servers', Seleciona como classe
  selector: 'app-servers',
  //template: '<app-server></app-server><app-server></app-server>', Temmplate inline
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';

  constructor() {
     setTimeout(() => {
       this.allowNewServer = true;
     }, 2000);

    // setInterval(() => {
    //   this.allowNewServer ? this.allowNewServer = false : this.allowNewServer = true;
    //   console.log(`I'm ${this.allowNewServer}`);
    // } ,2000);

  }

  onCreateServer() {
    this.allowNewServer ? this.serverCreationStatus = 'Server was created' : this.serverCreationStatus = 'No server was created';
  }

  onUpdateServerName (event : Event){
    this.serverName = (<HTMLInputElement>event.target).value;  
  }

}