import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child2',
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
	standalone: true
})
export class Child2Component implements OnInit, OnChanges {

	public title:string = 'Child2Component';
	public status?:string = 'Not Initialised Yet';

	@Input() public label?:string = 'Default Label';

	public constructor(){
		console.log(`%cProjectedItem - Child2Component - constructor() - (label: ${this.label})`, 'color: green');
	}
	public ngOnChanges(changes: SimpleChanges):void {
		if(changes['label']){
      console.log(`%cProjectedItem - Child2Component - ngOnChanges() - Label changed to: ${changes['label'].currentValue}`, 'color: green');
    }
	}
	public ngOnInit():void {
		console.log(`%cProjectedItem - Child2Component - ngOnInit() - (label: ${this.label})`, 'color: green');
    this.status = 'Initialised';
	}
	public reportStatus():string {
		const message = `ProjectedItem reporting: My label is '${this.label}' and my status is '${this.status}'.`;

    console.log(`%c${message}`, 'color: darkgreen; font-weight: bold');
    return message;
	}
}
