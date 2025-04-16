import { Component, Input, SimpleChanges, OnInit, OnChanges, DoCheck } from '@angular/core';

import { Config } from '../models/config.interface';

@Component({
  selector: 'app-child2',
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component implements OnInit, OnChanges, DoCheck {

	@Input() public childConfig?:Config;

	private previousConfigName?:string;
	private doCheckCount:number = 0;

	public constructor(){}
	public ngOnChanges(changes: SimpleChanges):void {
		console.log('Child2Component - ngOnChanges() fired!', changes);

		if(changes['config']){
			console.log('Child2Component - ngOnChanges() detected config reference changes.')

			this.previousConfigName = changes['config'].currentValue.name;
		}
	}
	public ngOnInit():void {
		if(this.childConfig){
			this.previousConfigName = this.childConfig?.name
		}
		console.log('Child2Component - ngOnInit() fired. Initial config name: ', this.previousConfigName)
	}
	public ngDoCheck():void {
		this.doCheckCount++;

		if(this.childConfig && this.childConfig.name !== this.previousConfigName){
			console.warn(`Child2Component - ngDoCheck() detected interval appConfig.name change!`);
			console.log(`Previous Name: "${this.previousConfigName}"`);
			console.log(`Current Name: "${this.childConfig.name}"`);

			this.previousConfigName = this.childConfig.name;
		}
	}
}
