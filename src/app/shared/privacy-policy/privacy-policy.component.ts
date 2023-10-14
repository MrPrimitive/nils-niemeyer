import {Component} from "@angular/core";
import {LayoutService} from "@services";
import {ScreenSize} from '@constants'

@Component({
  selector: 'mse-privacy-policy',
  template: `
		<ng-template [ngIf]="layoutService.getScreenSize === screenSizeSmall"
								 [ngIfElse]="largeLayout">
			<mse-privacy-policy-small></mse-privacy-policy-small>
		</ng-template>
		<ng-template #largeLayout>
			<mse-privacy-policy-large></mse-privacy-policy-large>
		</ng-template>
	`
})
export class PrivacyPolicyComponent {
  screenSizeSmall: ScreenSize = ScreenSize.Small;

  constructor(public layoutService: LayoutService) {
  }

}
