import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BehaviorSubject } from 'rxjs';

import { ChildComponent } from './child/child.component';

@Component({
    selector: 'app-root',
    imports: [CommonModule, RouterOutlet, ChildComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit {

	private dataSubject$ = new BehaviorSubject<string>('Initial');

  public title = 'Parent App';
	public valueFromChild?:string;
	public childInstanceMessage:string = '';

	@ViewChild(ChildComponent) public childComponent!: ChildComponent;

	public constructor(){}
	public ngOnInit(){
		console.log('PARENT ngOnInit: Child component reference: ', this.childComponent);
	}
	public ngAfterViewInit(){
		console.log('PARENT ngAfterViewInit: Child component reference:', this.childComponent);

		setTimeout(_ => {
			if(this.childComponent){ 
				this.childInstanceMessage = this.childComponent.childMSg; 
				this.dataSubject$.next(this.childInstanceMessage);
			}
		});
	}
	public callChildFocus():void {
		if(this.childComponent){
			this.childComponent.focusInput();
		}else{
			console.error('PARENT: Child component reference not available!');
		}
	}
	public callChildGetValue():void {
		if(this.childComponent){
			this.valueFromChild = this.childComponent.getValue();
			
			console.log('PARENT: Received value from child: ', this.valueFromChild)
		}else{
			console.error('PARENT: Child component reference not available!');
		}
	}
	public callChildSetValue():void {
		if(this.childComponent){
			const timestamp = new Date().toLocaleTimeString();

			this.childComponent.setValue(`Set by Parent @ ${timestamp}`);
		}else{
			console.error('PARENT: Child component reference not available!');
		}
	}
}
