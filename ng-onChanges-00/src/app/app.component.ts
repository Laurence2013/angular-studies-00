import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ChildComponent } from './child/child.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, ChildComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {

  public title:string = '#39 nOnChanges Lifecycle Hook';
	public inputVal?:string;

	public constructor(){}
	public onBtnClicked(inputEl: HTMLInputElement){
		this.inputVal = inputEl.value;
	}
}
