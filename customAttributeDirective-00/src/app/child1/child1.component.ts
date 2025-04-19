import { Component } from '@angular/core';

import { HighlightsDirective } from '../directives/highlights.directive';

@Component({
  selector: 'app-child1',
	standalone: true,
  imports: [HighlightsDirective],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
})
export class Child1Component {
	
	public componentAColour:string = 'lightblue';

	public constructor(){}
}
