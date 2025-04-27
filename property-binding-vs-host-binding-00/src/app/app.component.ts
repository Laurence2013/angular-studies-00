import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Child1Component } from './child1/child1.component';

import { HighlightDirective } from './directives/highlight.directive';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Child1Component, HighlightDirective],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {

  public title:string = '#51 Property Binding vs @HostBinding | Creating & Using Custom Directive | A Complete Angular Course';
	public textValue:string = 'Hello World!';

	public constructor(){}
	public logValue(){
		console.log('Input has been focused from App Directive');
	}
}

