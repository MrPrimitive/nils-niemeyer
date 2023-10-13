import {Component, OnDestroy, OnInit} from '@angular/core'
import {LayoutService} from '@services'

@Component({
  selector: 'mse-home-content-image-education',
  template: `
    <div>
      <ng-template [ngIf]="layoutService.getScreenSize === 'Medium' || layoutService.getScreenSize === 'Large'"
                   [ngIfElse]="smallLayout">
        <mse-home-content-image-education-large></mse-home-content-image-education-large>
      </ng-template>

      <ng-template #smallLayout>
        <mse-home-content-image-education-small></mse-home-content-image-education-small>
      </ng-template>
    </div>
  `,
  styleUrls: ['./styles/home-content-image-education.component.scss'],
})
export class HomeContentImageEducationComponent implements OnInit, OnDestroy {

  constructor(public layoutService: LayoutService) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
