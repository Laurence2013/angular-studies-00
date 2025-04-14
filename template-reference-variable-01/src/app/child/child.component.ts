import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

	public message:string = 'Default message from Child';
	
	public constructor(){}
	public showAlert(newMsg: string):void {
		this.message =  newMsg;
		alert(`Child component says: ${this.message}`);
	}
}
