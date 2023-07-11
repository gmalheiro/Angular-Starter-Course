import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server',name:'TestServer',content:'Just a test!'}];
  serverElementName:string;

  onServerAdded(serverData: {serverName:string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
   onBlueprintAdded(bluePrintData: {serverName:string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    });
  }
  
  onChangeFirst(){
    this.serverElements[0].name = 'Changed!';
    //this.serverElementName = this.serverElements[0].name;
    //console.log(`this is my name: ${this.serverElementName}`);
  }

  onDestroyFirst(){
    this.serverElements.splice(0,1);
  }

}
