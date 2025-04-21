import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
	standalone: true
})
export class HighlightDirective00 {

	@Input() appHighlight?:string;
	@Input() defaultColur?:string;

  public constructor(private el: ElementRef, private renderer: Renderer2){}

	@HostListener('mouseenter') public onMouseEnter():void {
		this.highlight01(this.appHighlight || this.defaultColur || 'yellow');
	}
	@HostListener('mouseleave') public onMouseLeave():void {
		this.highlight01('');
	}
	private highlight00(colour: string){
		console.log('highlight00()', colour);
		this.el.nativeElement.style.backgroundColor = colour;
	}
	private highlight01(colour: string){
		console.log('highlight01()', colour);
		this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', colour);
	}
}
