import { Directive, ElementRef, OnInit, Renderer2,HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elRef:ElementRef, private renderer: Renderer2) { }
  
//Its better to style the element with renderer because sometimes it can be difficult to access the element directly and you cant have access to the DOM, also sometimes your app won't use the browser

  //FOR PROPERTY BINDING WE USE [] AND FOR EVENT BINDING WE USE () [defaultColor]='transparent'
  // With strings you can use property binding without [] like: defaultColor="transparent" 

  //HostListener listens to the  events where the directive sits on
  @Input() defaultColor : string = 'transparent';
  @Input() highlightColor : string = 'blue';
  // @Input('appBetterHighLight') highlightColor : string = 'blue'; By using this approach you can set the value of the property in the html file like this: [appBetterHighLight]="'green'"
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  ngOnInit() {
   this.defaultColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData:Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', 'bold');
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
    this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', 'normal');
  }

}
