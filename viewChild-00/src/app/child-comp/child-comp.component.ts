import { Component } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  imports: [],
  templateUrl: './child-comp.component.html',
  styleUrl: './child-comp.component.css',
	standalone: true
})
export class ChildCompComponent {

	public count:number = 0
	
	public constructor(){}
	public increment(){
		this.count++;
		
		console.log('Child incremented count to: ', this.count);
	}
	public resetCounter(){
		this.count = 0;

		console.log('Child counter reset by parent.');
	}
	public getCurrentCount(){
		return this.count;
	}
}
