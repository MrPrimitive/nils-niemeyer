import {Component, OnDestroy, OnInit} from '@angular/core'
import {LayoutService} from '@services'

@Component({
  selector: 'mse-home-content-experience',
  template: `
    <div>
      <ng-template [ngIf]="layoutService.getScreenSize === 'Medium' || layoutService.getScreenSize === 'Large'"
                   [ngIfElse]="smallLayout">
        <mse-home-content-experience-large></mse-home-content-experience-large>
      </ng-template>

      <ng-template #smallLayout>
        <mse-home-content-experience-small>></mse-home-content-experience-small>
      </ng-template>
    </div>
  `,
  styleUrls: ['./styles/home-content-experience.component.scss'],
})
export class HomeContentExperienceComponent implements OnInit, OnDestroy {

  constructor(public layoutService: LayoutService) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

}
