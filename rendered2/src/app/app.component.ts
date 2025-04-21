import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Child1Component, Child2Component],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {

  public title:string = '#48 Renderer2 in Angular | Creating & Using Custom Directive | A Complete Angular Course';
	public constructor(){}
}
