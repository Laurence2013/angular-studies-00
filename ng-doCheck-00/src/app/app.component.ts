import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

import { Config } from './models/config.interface';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Child1Component, Child2Component],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {

  public title:string = '#41 ngDoCheck Lifecycle Hook | Lifecycle Hooks in Angular | A Complete Angular Course';
	public inputVal?:string;
	public appConfig:Config = {name: 'Initial Config', value: 10};

	public constructor(){}
	public onBtnClicked(inputEl: HTMLInputElement):void {
		this.inputVal = inputEl.value;
	}
	public onChangeName():void {
		this.appConfig.name = 'Mutated Name ' + Math.random().toFixed(2);

		console.log('App Component - onChangeName(): Mutated config name');
	}
	public onChangeConfigObj():void {
		this.appConfig = {...this.appConfig, value: this.appConfig.value + 1};

		console.log('App Component - onChangeConfigObj(): Changed config object reference');
	}
}
