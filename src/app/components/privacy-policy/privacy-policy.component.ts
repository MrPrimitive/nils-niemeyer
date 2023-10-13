import {Component} from "@angular/core";
import {LayoutService} from "@services";

@Component({
  selector: 'mse-privacy-policy',
  template: `
      <ng-template [ngIf]="layoutService.getScreenSize === 'Small'" [ngIfElse]="largeLayout">
          <mse-privacy-policy-small></mse-privacy-policy-small>
      </ng-template>
      <ng-template #largeLayout>
          <mse-privacy-policy-large></mse-privacy-policy-large>
      </ng-template>
  `
})
export class PrivacyPolicyComponent {

  constructor(public layoutService: LayoutService) {
  }

}
