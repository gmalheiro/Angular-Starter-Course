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
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];

  constructor() {
     setTimeout(() => {
       this.allowNewServer = true;
     }, 2000);

    //setInterval(() => {
    //   console.log(this.serverName);
    //} ,2000);

  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created ! Name is ' + this.serverName;
    //Com isso estou utilizando todas as formas de binding
    //Event binding no botão
    //Property binding para habilitar o botão em 2 segundos
    // E two way binding no input
  }

  onUpdateServerName (event : Event){
    this.serverName = (<HTMLInputElement>event.target).value;  
  }

}