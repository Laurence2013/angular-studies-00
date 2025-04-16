import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, ChildComponent, Child2Component, Child3Component],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {

  public title:string = '#40 ngOnInit Lifecycle Hook | Lifecycle Hooks in Angular | A Complete Angular Course';
	public inputVal?:string;
	//public inputVal?:string[] = ['Hello', 'World'];
	public initialItems?:string[] = ['Apple', 'Banana', 'Cherry'];

	public constructor(){}
	public onBtnClicked(inputEl: HTMLInputElement):void {
		this.inputVal = inputEl.value;
		//this.inputVal?.push(inputEl.value);
	}
}
