import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Child1Component } from './child1/child1.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Child1Component],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {

  public title:string = '#42 ngAfterContentInit Lifecycle Hook | Lifecycle Hooks in Angular | A Complete Angular Course';
	public inputVal?:string;

	//@ViewChild(Child1Component) public child1?:Child1Component;
	@ViewChild('temp00', {read: ElementRef}) public child1?:ElementRef;

	public constructor(){}
	public onBtnClicked(inputEl: HTMLInputElement):void {
		this.inputVal = inputEl.value;

		//console.log('App Component - onBtnClicked(): ', this.child1);
		console.log('App Component - onBtnClicked(): ', this.child1?.nativeElement.innerText);
	}
	public ngAfterViewInit():void {
		//console.log('App Component - ngAfterViewInit(): ', this.child1);
		console.log('App Component - ngAfterViewInit(): ', this.child1?.nativeElement.innerText);
	}
}
