import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

	@HostBinding('value') public inputValue:string = 'Hello from Highlight Directive';

	@HostListener('focus') public logMesssage(){
		console.log('Input has been focused from Highlight Directive');
	}
  public constructor(){}
}
