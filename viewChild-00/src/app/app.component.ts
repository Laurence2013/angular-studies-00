import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ChildCompComponent } from './child-comp/child-comp.component';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, CommonModule, ChildCompComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
	standalone: true
})
export class AppComponent implements AfterViewInit {

  public title = 'viewChild-00';
	public lastReadCount?:number;

	@ViewChild(ChildCompComponent) childCounter!:ChildCompComponent;

	public constructor(){}
	public ngAfterViewInit(){}
	public resetChildReset():number | undefined{
		if(this.childCounter){
			console.log('Resetting from Parent to Child');
			return this.childCounter.count = 0;
		}else{
			return 0;
		}
	}
	public readChildReset():number | undefined{
		if(this.childCounter){
			this.lastReadCount = this.childCounter.getCurrentCount();
			console.log('Reading current counter!', this.lastReadCount);
		}
		return 0;
	}
}
