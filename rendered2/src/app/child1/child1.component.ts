import { Component } from '@angular/core';

import { Highlight00Directive } from '../directives/highlight00.directive';

@Component({
  selector: 'app-child1',
  imports: [Highlight00Directive],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
	standalone: true
})
export class Child1Component {

	public childColour:string = 'green';

	public title:string = 'Child1Component';

	public constructor(){}
}
