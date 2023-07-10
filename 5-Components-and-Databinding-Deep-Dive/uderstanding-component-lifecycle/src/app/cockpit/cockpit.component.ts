import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName:string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

    //ngOnChanges = Called after a bound input property changes [Properties decorated with @Input()]
  //ngOnInit = Called once the component is initialized//ngOnInit will run after the constructor
  //ngDoCheck = Called during every change detection run
  //ngAfterContentInit = Called after content (ng-content) has been projected into view
  //ngAfterContentChecked = Called every time the projected content has been checked
  //ngAfterViewInit = Called after the component's view (and child views) has been initialized
  //ngAfterViewChecked = Called every time the view (and child views) have been checked
  //ngOnDestroy = Called once, before the instance is destroyed.

   onAddServer(nameInput: HTMLInputElement) {
    //console.log(this.serverContentInput); Will log as an element ref with a native element property with this we can use the .value property
    this.serverCreated.emit({
      serverName:nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });     
  }
    onAddBlueprint(nameInput: HTMLInputElement) {
      this.blueprintCreated.emit({
        serverName:nameInput.value,
         serverContent: this.serverContentInput.nativeElement.value
      });
   }

}
