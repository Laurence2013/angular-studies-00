import { Component, Input, OnChanges, OnInit, DoCheck, SimpleChanges, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child1',
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component implements OnInit, OnChanges, DoCheck {

	public title?:string = 'Child1 Component';

	@Input() public message?:string;

	@ViewChild('temp') public tempPara?:ElementRef;

	public constructor(){
		console.log('Child1Component constructor called.');
	}
	public ngOnChanges(changes: SimpleChanges):void {
		console.log('Child1Component ngOnChanges Hook called.', this.message);
	}
	public ngOnInit():void {
		console.log('Child1Component ngOnInit Hook called.');
	}
	public ngDoCheck():void {
		console.log('Child1Component ngDoCheck Hook called.');
	}
}
