import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { WidgetComponent } from './widget/widget.component';
//import { WeatherContentComponent } from './weather-content/weather-content.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, WidgetComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {

  public title:string = 'ng-content-01';
	public temperature?:number = 100;
	public test?:string = 'Testing';

	public constructor(){}
}
