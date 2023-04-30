import { Directive } from '@angular/core';
import {ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective {

  constructor(private ele:ElementRef) 
  {

  }
  @HostListener('mouseenter') onmouseenter()
  {
    this.setcolor('Green');
  }
  @HostListener('mouseleave') onmouseleave()
  {
    this.setcolor('Black');
  }
  setcolor(color:string)
  {
    this.ele.nativeElement.style.background=color;
  }


}
