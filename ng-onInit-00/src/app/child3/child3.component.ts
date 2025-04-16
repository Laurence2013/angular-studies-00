import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child3',
  imports: [CommonModule],
  templateUrl: './child3.component.html',
  styleUrl: './child3.component.css'
})
export class Child3Component implements OnInit {

	@Input() public itemsList?:string[];

	public receivedItemCount:number = 0;
	public firstItem:string | undefined = undefined;

	public constructor(){
		console.log('Child3Component constructor called - itemsList: ', this.itemsList);
	}
	public ngOnInit():void {
		console.log('Child3Component ngOnInit - itemslist: ', this.itemsList);

		if(this.itemsList && this.itemsList.length > 0){
			this.receivedItemCount = this.itemsList.length;
			this.firstItem = this.itemsList[0];

			this.processItems();
		}else{
			console.log('Child3Component ngOnInit - No Items received or itemsList is empty');
			this.receivedItemCount = 0;
			this.firstItem = 'None';
		}
	}
	public processItems():void {
		console.log('Child3Component Processing received items: ', this.itemsList?.map(itm99 => itm99.toUpperCase()));
	}
}
