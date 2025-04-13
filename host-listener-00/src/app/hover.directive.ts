import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true
})
export class HoverDirective {

  public constructor(private element: ElementRef, private renderer: Renderer2){}
	@HostListener('mouseenter') public onmouseover(){
		this.renderer.setStyle(this.element.nativeElement, 'margin', '5px 30px');
		this.renderer.setStyle(this.element.nativeElement, 'padding', '30px 30px');
		this.renderer.setStyle(this.element.nativeElement, 'transition', '0.5s');
	}
	@HostListener('mouseleave') public onmouseout(){
		this.renderer.setStyle(this.element.nativeElement, 'margin', '30px 30px');
		this.renderer.setStyle(this.element.nativeElement, 'padding', '40px 40px');
		this.renderer.setStyle(this.element.nativeElement, 'transition', '0.5s');
	}
}
