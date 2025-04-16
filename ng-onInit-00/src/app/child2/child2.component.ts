import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component implements OnInit {

	@Input() public message?:string = 'Default Message';

	public initMessage?:string;
	
	public constructor(){
		console.log('Child2Component constructor called, Input message: ', this.message);
	}
	public ngOnInit():void {
		console.log('Child2Component ngOnInit called. Input message: ', this.message);

		this.initMessage = `Child2Component initialised at ${new Date().toLocaleTimeString()} with mesage: ${this.message}`

		this.fetchData();
	}
	public fetchData():void {
		console.log('Child2Component fetchData() pretends to fetch data based on input: ', this.message);
	}
}
