import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private element:ElementRef) { 
    this.element.nativeElement.style.fontFamily = "cursive"
    this.element.nativeElement.style.textTransform= "uppercase"
    this.element.nativeElement.style.weight = "700"
    this.element.nativeElement.style.color = "yellow";
       
  }

}
