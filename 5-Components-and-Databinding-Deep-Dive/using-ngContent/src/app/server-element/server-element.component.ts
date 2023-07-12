import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
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
export class ServerElementComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck,
   AfterContentInit,
   AfterContentChecked,
   AfterViewInit,
   AfterContentInit,
   OnDestroy
{
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
    //this.name != "" ? console.log("name is not empty" + this.name) : console.log("name is empty" + this.name);
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log('Text content: '+this.header.nativeElement.textContent);
  }
  //ngDoCheck gets called anytime angular checks for any changes
  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    console.log('Text content: '+this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }

}