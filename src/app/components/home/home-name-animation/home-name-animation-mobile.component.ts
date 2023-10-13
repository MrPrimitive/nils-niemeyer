import {Component, OnDestroy, OnInit} from '@angular/core'

@Component({
  selector: 'mse-home-name-animation-mobile',
  templateUrl: './templates/home-name-animation-mobile.component.html',
  styleUrls: ['./styles/home-name-animation-mobile.component.scss']
})
export class HomeNameAnimationMobileComponent implements OnInit, OnDestroy {
  constructor() {
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollEvent);
  }

  ngOnDestroy(): void {
  }

  private scrollEvent(event: any) {
    const halfScreenHeight: number = window.screen.height / 2
    const quadScreenHeight: number = halfScreenHeight / 2
    const screenHeight: number = window.screen.height;
    const screenHeightTimesFive: number = window.screen.height * 5;

    const mseHomeNameMyNameAnimationElement: HTMLElement | null = document.getElementById('mse-home-name-my-name-animation')
    if (mseHomeNameMyNameAnimationElement) {
      const paddingTop: string = (40 - ((window.scrollY / halfScreenHeight) * 20)) + 'px';
      mseHomeNameMyNameAnimationElement.style.paddingTop = paddingTop;
    }

    const mseHomeNameTitleAnimationElement: HTMLElement | null = document.getElementById('mse-home-name-title-text-animation')
    if (mseHomeNameTitleAnimationElement) {
      mseHomeNameTitleAnimationElement.style.opacity = String(1 - window.scrollY / quadScreenHeight);
    }

    const mseHomeAnimationElement: HTMLElement | null = document.getElementById('mse-home-name-animation')
    if (mseHomeAnimationElement) {
      mseHomeAnimationElement.style.opacity = String(1 - window.scrollY / halfScreenHeight);
      mseHomeAnimationElement.style.scale = String(1 - window.scrollY / screenHeightTimesFive);
    }
  }
}
