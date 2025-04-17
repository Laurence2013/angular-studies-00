import { Component, Input, OnInit, OnChanges, DoCheck, SimpleChanges } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child3',
  imports: [CommonModule],
  templateUrl: './child3.component.html',
  styleUrl: './child3.component.css'
})
export class Child3Component implements OnInit, OnChanges, DoCheck {

	@Input() public itemsArray?:string[];

	private previousItemsLength:number = 0;

	public constructor(){}
	public ngOnChanges(changes: SimpleChanges):void {
		console.log('Child3Component - ngOnChanges() fired!', changes);
	}
	public ngOnInit():void {
		this.previousItemsLength = this.itemsArray?.length ?? 0;

    console.log('Child3Component - Child Array: ngOnInit. Initial length:', this.previousItemsLength);
	}
	public ngDoCheck():void {
		console.log(`Child3Component - ngDoCheck() fired!`);

		const currentLength = this.itemsArray?.length ?? 0;
		if(currentLength !== this.previousItemsLength){
			console.warn(`Child3Component - Child Array: ngDoCheck detected length change!`);
      console.log(`Previous Length: ${this.previousItemsLength}`);
			console.log(`Current Length:  ${currentLength}`);

			this.previousItemsLength = currentLength;
		}
	}
}
