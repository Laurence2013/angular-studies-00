import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements AfterViewInit {

	public isFocused:boolean = false;

	@ViewChild('interalInput') inputElementRef!: ElementRef<HTMLInputElement>;

	public constructor(){}
	public ngAfterViewInit(){
		console.log('CHILD ngAfterViewInit: Input ElementRef is ready.', this.inputElementRef);
	}
	public focusInput():void {
		if(this.inputElementRef){
			this.inputElementRef.nativeElement.focus();
			this.isFocused = true;

			console.log('CHILD component method: focusInput() called.');
		}else{
			console.error('CHILD: Input reference not ready in focusInput()');
		}
	}
	public getValue():string {
		if(this.inputElementRef){
			console.log('CHILD component method: getValue() called.');

			return this.inputElementRef.nativeElement.value;
		}else{
			console.error('CHILD: Input reference not ready in getValue()');

			return '';
		}
	}
	public setValue(newValue: string):void {
		if(this.inputElementRef){
			this.inputElementRef.nativeElement.value = newValue;

			console.log(`CHILD component: setValue() called with "${newValue}"`);
		}else{
			console.error('CHILD: Input reference not ready in setValue()');
		}
	}
	public get childMSg():string {
		return "Hello from the child component's public getter!";
	}
}
