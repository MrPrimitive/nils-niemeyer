import {Component} from "@angular/core";
import {LayoutService} from "@services";

@Component({
  selector: 'mse-about-content-me',
  template: `
    <div>
      <ng-template [ngIf]="layoutService.getScreenSize === 'Medium' || layoutService.getScreenSize === 'Large'"
                   [ngIfElse]="smallLayout">
        <mse-about-content-me-large></mse-about-content-me-large>
      </ng-template>

      <ng-template #smallLayout>
        <mse-about-content-me-small></mse-about-content-me-small>
      </ng-template>
    </div>`,
  styleUrls: ['./styles/about-content-me.component.scss']
})
export class AboutContentMeComponent {
  constructor(public layoutService: LayoutService) {
  }


}
