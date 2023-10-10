import {Component, OnDestroy, OnInit} from '@angular/core'
import {LayoutService} from '../../../_services/layout.service'
import {
  ANIMATION_HOME_BOUNCING_ARROW,
  ANIMATION_HOME_FADE_TEXT,
  ANIMATION_HOME_NAME_HELLO_SCROLL,
  ANIMATION_HOME_SCROLL
} from '../../../animations'

@Component({
  selector: 'mse-home-name-animation',
  templateUrl: './templates/home-name-animation.component.html',
  styleUrls: ['./styles/home-name-animation.component.scss'],
  animations: [ANIMATION_HOME_BOUNCING_ARROW, ANIMATION_HOME_FADE_TEXT, ANIMATION_HOME_SCROLL]
})
export class HomeNameAnimationComponent implements OnInit, OnDestroy {
  public bouncingArrowState: boolean = true
  public animationTime: string = '1s'
  public animationState: string = 'out'
  public scrollHint: boolean = true
  public scrollHomeNameHello: boolean = true

  constructor(public layoutService: LayoutService) {
  }

  ngOnInit(): void {
    this.scrollHint = true
    this.scrollHomeNameHello = true;
    this.bouncingArrow()
    setInterval((): void => {
      this.bouncingArrow()
    }, 1000)
    window.addEventListener('scroll', (): void => {
      this.scrollHint = window.scrollY <= 50
      this.scrollHomeNameHello = window.scrollY <= 50;
    })
  }

  ngOnDestroy(): void {
  }

  private bouncingArrow(): void {
    this.bouncingArrowState = !this.bouncingArrowState
    this.animationState = this.bouncingArrowState ? 'out' : 'in'
  }
}
