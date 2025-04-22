import { Component } from '@angular/core';

import { HoverDirective } from '../directives/hover.directive';

@Component({
  selector: 'app-child1',
  imports: [HoverDirective],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
	standalone: true
})
export class Child1Component {

	public title:string = 'Child1 Component';
}
