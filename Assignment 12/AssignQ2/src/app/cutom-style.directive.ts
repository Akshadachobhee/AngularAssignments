import { Directive } from '@angular/core';
import {ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appCutomStyle]'
})
export class CutomStyleDirective {

  constructor(private ele:ElementRef)
   { 
    ele.nativeElement.style.background='yellow'
   }

}
