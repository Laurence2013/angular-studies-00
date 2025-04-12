import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-widget',
  imports: [],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.css'
})
export class WidgetComponent {

	@Input() public test?:string;

	public constructor(){}
}
