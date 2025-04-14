import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, CommonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  public title:string = "In Angular give code examples and explain 'Template Reference Variable'.";
	public loggedName?:string;

	public constructor(){}
	public logName(inputEl: HTMLInputElement){
		this.loggedName = inputEl.value;
		console.log('Input value: ', inputEl.value)
	}
}
