import {Component, OnDestroy, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {HomeContentHelper} from './home-content.helper'

@Component({
  selector: 'mse-home-content-desktop',
  templateUrl: './templates/home-content-desktop.component.html',
  styleUrls: ['./styles/home-content-desktop.component.scss']
})
export class HomeContentDesktopComponent extends HomeContentHelper implements OnInit, OnDestroy {

  constructor(router: Router) {
    super(router)
  }


  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollEvent);
  }

  ngOnDestroy(): void {
  }

  private scrollEvent(event: any): void {
    const screenHeight: number = window.screen.height;
    const halfScreenHeight: number = screenHeight / 2
    const quadScreenHeight: number = halfScreenHeight / 2

    const mseHomeNameMyNameAnimationElement: HTMLElement | null = document.getElementById('content-dot-animation')
    if (mseHomeNameMyNameAnimationElement) {
      // const paddingTop: string = (40 - ((window.scrollY / halfScreenHeight) * 20)) + 'px';
      mseHomeNameMyNameAnimationElement.style.paddingTop = ;
    }
  }
}
