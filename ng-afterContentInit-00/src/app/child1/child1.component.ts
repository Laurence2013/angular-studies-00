import { Component, Input, OnChanges, SimpleChanges, 
	OnInit, ViewChild, ElementRef, DoCheck, AfterContentInit, ContentChild } from '@angular/core';

@Component({
  selector: 'app-child1',
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component implements OnChanges, OnInit, DoCheck, AfterContentInit {
	
	public title:string = 'Child1 Component';
	
	@Input() public message?:string;

	@ViewChild('temp00') public tempPara?:ElementRef;

	@ContentChild('temp00') public paraContent?:ElementRef;

	public constructor(){}
	public ngOnChanges(changes: SimpleChanges):void {
		console.log('Child1Component ngOnChanges() fired! ', changes)
	}
	public ngOnInit():void {
		console.log('Child1Component ngOnInit() fired!');
	}
	public ngDoCheck():void {
		console.log('Child1Component ngDoCheck() fired!', this.paraContent);
	}
	public ngAfterContentInit():void {
		console.log('Child1Component ngAfterContentInit() fired!', this.paraContent?.nativeElement);
	}
}
