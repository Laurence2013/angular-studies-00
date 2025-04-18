import { Component, Input, OnChanges, SimpleChanges, OnInit, 
	ViewChild, ElementRef, DoCheck , AfterContentInit, ContentChild, AfterContentChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
	standalone: true
})
export class Child1Component implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit {

	public title?:string = 'Child1Component';

	@Input() public message?:string;
	@ViewChild('temp00') public tempPara00!:ElementRef;
	@ViewChild('temp00') public tempPara01!:Child1Component;
	@ViewChild(Child1Component) public tempPara02!:Child1Component;
	@ContentChild('temp00') public paraContent?:ElementRef;
	
	public constructor(){
		//console.log('Child1Component - constructor() called');
	}
	public ngOnChanges(changes: SimpleChanges):void {
		//console.log('Child1Component - ngOnChanges() hook called!');
	}
	public ngOnInit():void {
		//console.log('Child1Component - ngOnInit() hook called!');
	}
	public ngDoCheck():void {
		//console.log('Child1Component - ngDoCheck() hook called!', this.paraContent);
	}
	public ngAfterContentInit():void {
		//console.log('Child1Component - ngAfterContentInit() hook called!', this.paraContent?.nativeElement);
	}
	public ngAfterContentChecked():void {
		//console.log('Child1Component - ngAfterContentChecked() hook called!', this.paraContent?.nativeElement);
		console.log('Child1Component - ngAfterContentChecked() hook called!', this.tempPara00);
	}
	public ngAfterViewInit():void {
		console.log('Child1Component - ngAfterViewInit() hook called!', this.tempPara00);
	}
}
