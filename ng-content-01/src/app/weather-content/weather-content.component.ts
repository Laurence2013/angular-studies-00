import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-content',
  imports: [],
  templateUrl: './weather-content.component.html',
  styleUrl: './weather-content.component.css'
})
export class WeatherContentComponent {

	@Input() public temperature?:number;
	
	public constructor(){}
}
