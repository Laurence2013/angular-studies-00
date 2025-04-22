import { Directive, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]',
	standalone: true
})
export class HoverDirective {

  public constructor(private elRef: ElementRef, private renderer: Renderer2){}
	@HostBinding('style.backgroundColor') public backgroundColour:string = '#28282B';
	@HostBinding('style.border') public border:string = 'red';
	@HostBinding('style.color') public textColour:string = 'white';
	@HostListener('mouseenter') public onMouseEnter(){
		this.backgroundColour = 'green';
	}
	@HostListener('mouseleave') public onMouseLeave(){
		this.backgroundColour = '#28282B';
	}
}
