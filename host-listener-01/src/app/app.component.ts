import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Child1Component } from './child1/child1.component';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, Child1Component],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
	standalone: true
})
export class AppComponent {
  public title:string = '#49 @HostListner in Angular | Creating & Using Custom Directive | A Complete Angular Course';
}
