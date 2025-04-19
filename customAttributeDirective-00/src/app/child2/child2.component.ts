import { Component } from '@angular/core';

import { HighlightsDirective } from '../directives/highlights.directive';

@Component({
  selector: 'app-child2',
	standalone: true,
  imports: [HighlightsDirective],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
})
export class Child2Component {

	public alertColour:string = 'tomato';

	public constructor(){}
}
