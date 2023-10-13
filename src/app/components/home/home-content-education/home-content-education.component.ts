import {Component, OnDestroy, OnInit} from '@angular/core'
import {LayoutService} from '@services'

@Component({
  selector: 'mse-home-content-education',
  template: `
    <div>
      <ng-template [ngIf]="layoutService.getScreenSize === 'Medium' || layoutService.getScreenSize === 'Large'"
                   [ngIfElse]="smallLayout">
        <mse-home-content-education-large></mse-home-content-education-large>
      </ng-template>

      <ng-template #smallLayout>
        <mse-home-content-education-small></mse-home-content-education-small>
      </ng-template>
    </div>
  `,
  styleUrls: ['./styles/home-content-education.component.scss'],
})
export class HomeContentEducationComponent implements OnInit, OnDestroy {

  constructor(public layoutService: LayoutService) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

}
