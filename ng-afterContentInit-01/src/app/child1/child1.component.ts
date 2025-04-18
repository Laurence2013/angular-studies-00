import { Component, AfterContentInit, ContentChild, OnInit, OnDestroy } from '@angular/core';

import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-child1',
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
	standalone: true
})
export class Child1Component implements OnInit, AfterContentInit, OnDestroy {

	public title:string = 'Child1Component';

	@ContentChild(Child2Component) public projectedItemRef?: Child2Component;

	public constructor(){
		console.log('%cWrapper - Child1Component - constructor()', 'color: blue');
	}
	public ngOnInit():void {
    console.log('%cWrapper - Child1Component - ngOnInit() - Projected Item Ref:', 'color: blue', this.projectedItemRef);
	}
	public ngAfterContentInit():void {
    console.log('%cWrapper Child1Component - ngAfterContentInit() - Projected Item Ref:', 'color: blue; font-weight: bold', this.projectedItemRef);

		if (this.projectedItemRef) {
      const label = this.projectedItemRef?.label;
      console.log(`%cWrapper-  Child1Component - ngAfterContentInit() - Projected item's label: ${label}`, 'color: blue; font-weight: bold');

      const statusReport = this.projectedItemRef?.reportStatus();
      console.log(`%cWrapper - Child1Component - ngAfterContentInit() - Received report: "${statusReport}"`, 'color: blue; font-weight: bold');
    } else {
      console.log('%cWrapper - Child1Component - ngAfterContentInit() - No ProjectedItemComponent was found in the content.', 'color: blue; font-weight: bold');
    }
	}
	public ngOnDestroy():void {
		console.log('%cWrapper - Child1Component - ngOnDestroy()', 'color: red');
	}
}
