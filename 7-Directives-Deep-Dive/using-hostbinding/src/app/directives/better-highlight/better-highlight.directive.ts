import { Directive, ElementRef, OnInit, Renderer2,HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elRef:ElementRef, private renderer: Renderer2) { }
  
//Its better to style the element with renderer because sometimes it can be difficult to access the element directly and you cant have access to the DOM, also sometimes your app won't use the browser

  //HostListener listens to the  events where the directive sits on

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  ngOnInit() {
   
  }

  @HostListener('mouseenter') mouseover(eventData:Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = 'blue';
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', 'bold');
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
    this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', 'normal');
  }

}
