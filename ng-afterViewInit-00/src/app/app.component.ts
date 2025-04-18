import { Component, ViewChild, ElementRef, AfterContentChecked, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Child1Component } from './child1/child1.component';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, Child1Component],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
	standalone: true
})
export class AppComponent implements AfterContentChecked, AfterViewInit {

  public title:string = '#44 ngAfterViewInit Lifecycle Hook | Lifecycle Hooks in Angular | A Complete Angular Course';
	public inputVal?:string;
	public projectedValue:number = 0;

	@ViewChild('temp00') public tempPara00?:ElementRef;
	@ViewChild('temp00') public tempPara01?:Child1Component;
	@ViewChild(Child1Component) public tempPara02?:Child1Component;

	public constructor(){}
	public onBtnClicked(inputEl: HTMLInputElement):void {
		this.inputVal = inputEl.value;
	}
	public updateProjectedData(){
		this.projectedValue++;

		console.log(`AppComponent: Updated projectedValue to ${this.projectedValue}`);
	}
	public ngAfterContentChecked():void {
		console.log('AppComponent - ngAfterContentChecked() hook called!', this.tempPara00);
	}
	public ngAfterViewInit():void {
		console.log('AppComponent - ngAfterViewInit() hook called!', this.tempPara00);
	}
}
