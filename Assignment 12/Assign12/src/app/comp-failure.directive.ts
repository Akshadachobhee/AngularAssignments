import { Directive } from '@angular/core';
import {ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective {

  constructor(private ele:ElementRef) 
  {

  }

@HostListener('mouseenter') onmouseenter()
  {
    this.setcolor('Red');
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
