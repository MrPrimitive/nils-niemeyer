import {Component, OnDestroy, OnInit} from '@angular/core'
import {LayoutService} from '../../../_services/layout.service'
import {ANIMATION_HOME_BOUNCING_ARROW, ANIMATION_HOME_FADE_TEXT, ANIMATION_HOME_SCROLL} from '../../../animations'

@Component({
  selector: 'mse-home-content-education',
  template: `
    <div>
      <ng-template [ngIf]="layoutService.getScreenSize === 'Medium' || layoutService.getScreenSize === 'Large'"
                   [ngIfElse]="smallLayout">
        <mse-home-content-education-large></mse-home-content-education-large>
      </ng-template>

      <ng-template #smallLayout>
        <mse-home-content-education-small>></mse-home-content-education-small>
      </ng-template>
    </div>
  `,
  styleUrls: ['./styles/home-content-education.component.scss'],
  animations: [ANIMATION_HOME_BOUNCING_ARROW, ANIMATION_HOME_FADE_TEXT, ANIMATION_HOME_SCROLL]
})
export class HomeContentEducationComponent implements OnInit, OnDestroy {
  public bouncingArrowState: boolean = true
  public animationState: string = 'out'
  public scrollHint: boolean = true

  constructor(public layoutService: LayoutService) {
  }

  ngOnInit(): void {
    this.scrollHint = true
    this.bouncingArrow()
    setInterval((): void => {
      this.bouncingArrow()
    }, 1000)
    window.addEventListener('scroll', this.scrollEvent)
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollEvent)
  }

  private scrollEvent(event: any): void {
    this.scrollHint = window.scrollY <= 50
  }

  private bouncingArrow(): void {
    this.bouncingArrowState = !this.bouncingArrowState
    this.animationState = this.bouncingArrowState ? 'out' : 'in'
  }
}
