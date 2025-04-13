import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HoverDirective } from './hover.directive';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HoverDirective],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  public title:string = 'App (Home) Component';
}
