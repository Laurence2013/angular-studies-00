import { Component } from '@angular/core';

import { AppHighlightDirective } from '../directives/app-highlight.directive';

@Component({
  selector: 'app-child1',
  imports: [AppHighlightDirective],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {
	
	public title:string = 'Child1 Component';
}
