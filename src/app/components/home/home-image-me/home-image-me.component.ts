import {Component, OnDestroy, OnInit} from '@angular/core'
import {LayoutService} from '../../../_services/layout.service'
import {ANIMATION_HOME_BOUNCING_ARROW, ANIMATION_HOME_FADE_TEXT, ANIMATION_HOME_SCROLL} from '../../../animations'

@Component({
	selector: 'mse-home-image-me',
	template: `
      <div>
          <ng-template [ngIf]="layoutService.getScreenSize === 'Medium' || layoutService.getScreenSize === 'Large'"
                       [ngIfElse]="smallLayout">
              <mse-home-image-me-desktop></mse-home-image-me-desktop>
          </ng-template>

          <ng-template #smallLayout>
              <mse-home-image-me-mobile></mse-home-image-me-mobile>
          </ng-template>
      </div>
	`,
	styleUrls: ['./styles/home-image-me.component.scss'],
	animations: [ANIMATION_HOME_BOUNCING_ARROW, ANIMATION_HOME_FADE_TEXT, ANIMATION_HOME_SCROLL]
})
export class HomeImageMeComponent implements OnInit, OnDestroy {
	public bouncingArrowState: boolean = true
	public animationTime: string = '1s'
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
		window.addEventListener('scroll', (): void => {
			this.scrollHint = window.scrollY <= 50
		})
	}

	ngOnDestroy(): void {
	}

	private bouncingArrow(): void {
		this.bouncingArrowState = !this.bouncingArrowState
		this.animationState = this.bouncingArrowState ? 'out' : 'in'
	}
}
