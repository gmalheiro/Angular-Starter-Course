import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef:ElementRef, private renderer: Renderer2) { }
  
//Its better to style the element with renderer because sometimes it can be difficult to access the element directly and you cant have access to the DOM, also sometimes your app won't use the browser

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', 'bold');
  }

}
