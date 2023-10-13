import {Component} from "@angular/core";
import {LayoutService} from "@services";

@Component({
  selector: 'mse-nav-bar',
  template: `
      <div class="nav-bar-component">
          <ng-template [ngIf]="layoutService.getScreenSize === 'Small'"
                       [ngIfElse]="smallLayout">
              <mse-nav-small></mse-nav-small>
          </ng-template>

          <ng-template #smallLayout>
              <mse-nav-large></mse-nav-large>
          </ng-template>
      </div>
  `,
	styleUrls: ['styles/nav-bar.component.scss']
})
export class NavBarComponent {
  constructor(public layoutService: LayoutService) {
  }
}
