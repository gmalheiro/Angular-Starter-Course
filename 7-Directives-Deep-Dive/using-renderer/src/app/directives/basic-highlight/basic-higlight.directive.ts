import { Directive, OnInit,ElementRef } from "@angular/core";
@Directive({
    //The square is telling angular, please select it as an attribute
    selector: '[appBasicHighlight]'
})

export class BasicHighlight implements OnInit{
    
    constructor(private ElementRef: ElementRef) {        
    }

    ngOnInit(){
        this.ElementRef.nativeElement.style.backgroundColor = 'green'
        this.ElementRef.nativeElement.style.fontWeight = 'bold'
        this.ElementRef.nativeElement.style.color = 'white';
    }
}