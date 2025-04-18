import { Component, AfterContentChecked, AfterContentInit, ContentChild, ElementRef, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
	standalone: true
})
export class Child2Component implements OnInit, DoCheck, AfterContentInit, AfterContentChecked {

	public lastCheckedTimestamp?:number;

	@ContentChild('projectedParagraphRef') public projectedParagraphRef?: ElementRef;

	public constructor(){
		console.log('Child2Component - constructor() fired!');
	}
	public ngOnInit():void {
		console.log('Child2Component - ngOnInit() fired!');
	}
	public ngDoCheck():void {
		console.log('Child2Component - ngDoCheck() fired!');
	}
	public ngAfterContentInit():void {
		console.log('Child2Component - ngAfterContentInit() fired!');

		if(this.projectedParagraphRef){
			console.log('Child2Component (ngAfterContentInit): Projected paragraph found:', this.projectedParagraphRef.nativeElement.textContent);
		}else{
			console.log('Child2Component (ngAfterContentInit): Projected paragraph ref not found yet.');
		}
	}
	public ngAfterContentChecked():void {
		console.log('Child2Component: ngAfterContentChecked() - Projected content checked.');

		this.lastCheckedTimestamp = Date.now();

		if(this.projectedParagraphRef){
			console.log('Child2Component (ngAfterContentChecked): Projected paragraph found:', this.projectedParagraphRef.nativeElement.textContent);
		}else{
			console.log('Child2Component (ngAfterContentChecked): Projected paragraph ref not found yet.');
		}
	}
}
