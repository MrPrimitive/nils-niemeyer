import {Component} from "@angular/core";
import {LayoutService} from "@services";

@Component({
  selector: 'mse-footer',
  template: `
      <div class="mse-footer-component">
          <ng-template [ngIf]="layoutService.getScreenSize === 'Medium' || layoutService.getScreenSize === 'Large'"
                       [ngIfElse]="smallLayout">
              <mse-footer-large></mse-footer-large>
          </ng-template>

          <ng-template #smallLayout>
              <mse-footer-small></mse-footer-small>
          </ng-template>
      </div>
	`,
  styleUrls: ['styles/footer.component.scss']
})
export class FooterComponent {
  constructor(public layoutService: LayoutService) {
  }
}
