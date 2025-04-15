import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ElementRef } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnChanges, OnInit {
	
	public title?:string = 'Demo Component';
	
	@Input() public message?:string[];

	@ViewChild('temp') public tempPara?:ElementRef;

	public constructor(){
		console.log('Demo component constructor called.');
	}
	public ngOnChanges(changes: SimpleChanges):void {
		console.log('ngOnChanges Hook called.');
	}
	public ngOnInit():void {
		console.log('ngOnInit Hook called.');
		console.log(this.tempPara?.nativeElement.innerHTML);
	}
}
