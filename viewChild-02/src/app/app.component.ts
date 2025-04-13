import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HighlightDirective } from './highlight.directive';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, CommonModule, HighlightDirective],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  public title:string = 'viewChild-02';

	@ViewChild(HighlightDirective) public highlightDir!: HighlightDirective;

	public constructor(){}
	public ngAfterViewInit(){
		//console.log('Parent directive view initialized. HighlightDirective ref:', this.highlightDir);
	}
	public triggerHighlight(){
		if(this.highlightDir){
			this.highlightDir.highlight('orange');
		}else{
			console.error('Highlight directive reference not available!');
		}
	}
	public removeHighlight(){
		if(this.highlightDir){
			this.highlightDir.removeHighlight();
		}else{
			console.error('Highlight directive reference not available!');
		}
	}
}
