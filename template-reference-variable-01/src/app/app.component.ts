import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ChildComponent } from './child/child.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, ChildComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  public title:string = "Example 2: Calling a Child Component's Method";

	public constructor(){}
}
