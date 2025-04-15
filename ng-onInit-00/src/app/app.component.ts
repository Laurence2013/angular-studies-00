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

  public title:string = '#40 ngOnInit Lifecycle Hook | Lifecycle Hooks in Angular | A Complete Angular Course';
	//public inputVal?:string;
	public inputVal?:string[] = ['Hello', 'World'];

	public constructor(){}
	public onBtnClicked(inputEl: HTMLInputElement):void {
		this.inputVal?.push(inputEl.value);
	}
}
