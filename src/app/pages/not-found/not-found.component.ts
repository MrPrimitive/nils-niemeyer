import {Component} from '@angular/core';
import {LayoutService} from "../../_services/layout.service";

@Component({
  selector: 'mse-not-found',
  template: `
    <ng-template [ngIf]="layoutService.getScreenSize === 'Small'" [ngIfElse]="largeLayout">
        <mse-not-found-small></mse-not-found-small>
    </ng-template>
    <ng-template #largeLayout>
        <mse-not-found-large></mse-not-found-large>
    </ng-template>
  `
})
export class NotFoundComponent {

  constructor(public layoutService: LayoutService) {
  }
}
