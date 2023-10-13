import {Component, OnDestroy, OnInit} from '@angular/core'
import {LayoutService} from '@services'

@Component({
  selector: 'mse-home-content-image-me',
  template: `
    <div>
      <ng-template [ngIf]="layoutService.getScreenSize === 'Medium' || layoutService.getScreenSize === 'Large'"
                   [ngIfElse]="smallLayout">
        <mse-home-content-image-me-large></mse-home-content-image-me-large>
      </ng-template>

      <ng-template #smallLayout>
        <mse-home-content-image-me-small></mse-home-content-image-me-small>
      </ng-template>
    </div>
  `,
  styleUrls: ['./styles/home-content-image-me.component.scss'],
})
export class HomeContentImageMeComponent implements OnInit, OnDestroy {

  constructor(public layoutService: LayoutService) {
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
  }

}
