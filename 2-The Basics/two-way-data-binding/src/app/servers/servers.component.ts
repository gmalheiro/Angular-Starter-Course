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
  serverName = 'TestServer';

  constructor() {
     setTimeout(() => {
       this.allowNewServer = true;
     }, 2000);

    //setInterval(() => {
    //   console.log(this.serverName);
    //} ,2000);

  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created';
  }

  onUpdateServerName (event : Event){
    this.serverName = (<HTMLInputElement>event.target).value;  
  }

}