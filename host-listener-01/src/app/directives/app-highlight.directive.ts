import { Directive, Input, HostListener, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
	standalone: true
})
export class AppHighlightDirective implements OnInit {

  public constructor(private elRef: ElementRef, private renderer: Renderer2){}
	public ngOnInit(){}
	@HostListener('mouseenter') public onMouseEnter(){
		this.renderer.addClass(this.elRef.nativeElement, 'highlight-product');
	}
	/*@HostListener('mouseout') public onMouseOut(){
		this.renderer.removeClass(this.elRef.nativeElement, 'highlight-product');
	}*/
	@HostListener('mouseleave') public onMouseLeave(){
		this.renderer.removeClass(this.elRef.nativeElement, 'highlight-product');
	}
}
