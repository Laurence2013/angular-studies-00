import { Directive, Input, ElementRef, HostListener, Renderer2, OnInit, AfterViewInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHighlights]',
	standalone: true
})
export class HighlightsDirective implements OnInit, AfterViewInit, OnChanges {

	private originalColour?:string;

	//@Input('appHighlights') public highlightsColour?:string;
	//@Input('appHighlights') public highlightsColour:string = 'yellow';
	//@Input('appHighlights') public highlightsColour:string = 'transparent';
	//@Input() public highlightsColour:string = 'yellow';
	@Input() public highlightsColour:string = 'transparent';

  public constructor(private elRef: ElementRef, private renderer: Renderer2){
		//this.highlightsColour = 'yellow';
		//this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', this.highlightsColour);
	}
	public ngOnInit(){
		//this.highlightsColour = 'yellow';
		console.log('ngOnInit():', this.highlightsColour);	
		//this.changeBackgroundColour(this.highlightsColour);
	}
	public ngAfterViewInit(){
		//this.highlightsColour = 'yellow';
		//this.elRef.nativeElement.style.backgroundColor = this.highlightsColour;
	}
	public ngOnChanges(){
		//console.log('ngOnChanges():', this.highlightsColour);	
	}
	@HostListener('mouseenter') public onMouseEnter(){
		console.log('onMouseEnter(): ', this.highlightsColour);

		if(!this.elRef.nativeElement.style.backgroundColor || this.elRef.nativeElement.style.backgroundColor === this.originalColour){
			this.originalColour = this.elRef.nativeElement.style.backgroundColor || '';
		};
		this.changeBackgroundColour00(this.highlightsColour || null);
	}
	@HostListener('mouseleave') public onMouseLeave(){
		console.log('onMouseLeave(): ', this.highlightsColour);

		this.changeBackgroundColour00(this.originalColour || null);
	}
	private changeBackgroundColour00(colour: string | null){
			this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', colour);
	}
	private changeBackgroundColour01(colour: string | null){
		console.log(this.highlightsColour);
		if(colour === null){
			console.log('changeBackgroundColour(): ', colour);
			this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'yellow');
		}else{
			this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', colour);
		}
	}
}
