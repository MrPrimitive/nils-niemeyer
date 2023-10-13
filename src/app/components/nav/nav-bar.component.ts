import {Component} from "@angular/core";
import {LayoutService} from "@services";

@Component({
  selector: 'mse-nav-bar',
  template: `
      <div class="nav-bar-component">
          <ng-template [ngIf]="layoutService.getScreenSize === 'Medium' || layoutService.getScreenSize === 'Large'"
                       [ngIfElse]="smallLayout">
              <mse-nav-large></mse-nav-large>
          </ng-template>

          <ng-template #smallLayout>
              <mse-nav-small></mse-nav-small>
          </ng-template>
      </div>
	`,
	styleUrls: ['styles/nav-bar.component.scss']
})
export class NavBarComponent {
  constructor(public layoutService: LayoutService) {
  }
}
