import { Component } from '@angular/core';

import { Highlight01Directive } from '../directives/highlight01.directive';

@Component({
  selector: 'app-child2',
  imports: [Highlight01Directive],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
	standalone: true
})
export class Child2Component {

	public title:string = 'Child2Component';
	public child2Colour:string = 'violet';
	public customHighlightColour = 'green';

	public constructor(){}
}
