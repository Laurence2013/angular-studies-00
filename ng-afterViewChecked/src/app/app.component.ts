import { Component, ViewChild, ElementRef, AfterViewInit, AfterViewChecked } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Child1Component } from './child1/child1.component';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, Child1Component],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
	standalone: true
})
export class AppComponent implements AfterViewInit, AfterViewChecked {

  public title:string = '#45 ngAfterViewChecked Lifecycle Hook | Lifecycle Hooks in Angular | A Complete Angular Course';
	public inputVal?:string;
	public projectedValue:number = 0;

	@ViewChild(Child1Component) public child1_00?:Child1Component;	
	@ViewChild('temp00') public tempPara00?:ElementRef;

	public constructor(){}
	public ngAfterViewInit():void {
		//console.log('AppComponent - ngAfterViewInit() hook called!');
	}
	public ngAfterViewChecked():void {
		//console.log('AppComponent - ngAfterViewChecked() hook called!', this.tempPara00?.nativeElement.innerText);
		console.log('AppComponent - ngAfterViewChecked() hook called!', this.child1_00);
	}
	public onBtnClicked(inputEl: HTMLInputElement):void {
		this.inputVal = inputEl.value;
	}
	public updateProjectedData(){
		this.projectedValue++;

		console.log(`AppComponent: Updated projectedValue to ${this.projectedValue}`);
	}
}
