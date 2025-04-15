import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnChanges {
	
	public title?:string = 'Demo Component';
	
	@Input() public message?:string;

	public constructor(){
		console.log('Demo component constructor called.');
		console.log(this.title);
		console.log(this.message);
	}
	/*public ngOnChanges():void {
		console.log('ngOnChanges Hook called.');
		console.log(this.message);
	}*/
	public ngOnChanges(changes: SimpleChanges):void {
		console.log('ngOnChanges Hook called.');
		console.log(changes);
	}
}
