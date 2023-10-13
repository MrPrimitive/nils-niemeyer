import {Component, OnDestroy, OnInit} from '@angular/core'
import {HomeNameAnimationHelper} from "./home-name-animation.helper";
import {HomeAnimation} from "@animations";

@Component({
  selector: 'mse-home-name-animation-large',
  templateUrl: './templates/home-name-animation.component.html',
  styleUrls: ['./styles/home-name-animation.component.scss', './styles/home-name-animation-large.component.scss'],
  animations: [HomeAnimation.ANIMATION_HOME_SCROLL, HomeAnimation.ANIMATION_HOME_FADE_TEXT, HomeAnimation.ANIMATION_HOME_BOUNCING_ARROW]
})
export class HomeNameAnimationLargeComponent extends HomeNameAnimationHelper implements OnInit, OnDestroy {

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.Init();
    window.addEventListener('scroll', this.scrollEvent);
    window.addEventListener('scroll', (): void => {
      this.scrollHint = window.scrollY <= 50
      this.scrollHomeNameHello = window.scrollY <= 50;
    })
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollEvent)
  }
}
