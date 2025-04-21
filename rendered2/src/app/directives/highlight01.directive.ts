import { Directive, Input, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight01]'
})
export class Highlight01Directive implements OnInit {

	//@Input('appHighlight011') public higlightColour:string = 'yellow';
	@Input('appHighlight01') public higlightColour:string = 'yellow';

	private defaultBackgroundColour?:string;

  public constructor(private el: ElementRef, private renderer: Renderer2){}
	public ngOnInit(){
		//this.defaultBackgroundColour = this.el.nativeElement.style.backgroundColor || 'transparent';
		this.defaultBackgroundColour = this.el.nativeElement.style.backgroundColor || this.higlightColour;

		this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 0.3s ease-in-out');
		this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
	}
	@HostListener('mouseenter') public onMouseEnter(){
		this.changeAppearance(this.higlightColour, '2px solid darkgray');
	}
	@HostListener('mouseleave') public onMouseLeave(){
		this.changeAppearance(this.defaultBackgroundColour = '', 'none');
	}
	private changeAppearance(bgColour: string, borderStyle:  string){
		this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', bgColour);
		this.renderer.setStyle(this.el.nativeElement, 'border', borderStyle);

		if(bgColour !== this.defaultBackgroundColour){
			this.renderer.addClass(this.el.nativeElement, 'highlighted-by-directive');
		}else{
			this.renderer.removeClass(this.el.nativeElement, 'highlighted-by-directive');
		}
	}
}
