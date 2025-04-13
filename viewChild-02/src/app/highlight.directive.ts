import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
	standalone: true,
	exportAs: 'appHighlight'
})
export class HighlightDirective {

	@Input('appHighlight') public highlightColour:string = 'yellow';

	private originalColour!:string;

  public constructor(private el: ElementRef, private renderer: Renderer2){}

	@HostListener('mounseenter') onMouseEnter(){
		//this.originalColour = this.el.nativeElement.style.backgroundColor;
		//this.highlight(this.highlightColour || 'yellow');

		this.renderer.setStyle(this.el.nativeElement, 'margin', '5px 10px');
		this.renderer.setStyle(this.el.nativeElement, 'padding', '5px 10px');
		this.renderer.setStyle(this.el.nativeElement, 'transition', '0.5s');
	}
	@HostListener('mouseleave') onMouseLeave(){
		this.highlight(this.originalColour);

		this.renderer.setStyle(this.el.nativeElement, 'margin', '5px 10px');
		this.renderer.setStyle(this.el.nativeElement, 'padding', '5px 10px');
		this.renderer.setStyle(this.el.nativeElement, 'transition', '0.5s');
	}
	public highlight(colour: string):void {
		this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', colour);
		
		console.log(`Directive highlighting with: ${colour}`);
	}
	public removeHighlight():void {
		this.highlight(this.originalColour || '');
	}
}
