import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None,
  // The default is: encapsulation:ViewEncapsulation.Emulated
  //If  you apply encapsulation:ViewEncapsulation.None, the
})
export class ServerElementComponent implements OnInit, OnChanges,DoCheck {
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called");
    console.log(changes);
    //this.name != "" ? console.log("name is not empty" + this.name) : console.log("name is empty" + this.name);
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }
  //ngDoCheck gets called anytime angular checks for any changes  
  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

}
