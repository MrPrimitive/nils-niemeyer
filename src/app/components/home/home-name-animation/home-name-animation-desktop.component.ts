import {Component, OnDestroy, OnInit} from '@angular/core'

@Component({
  selector: 'mse-home-name-animation-desktop',
  templateUrl: './templates/home-name-animation-desktop.component.html',
  styleUrls: ['./styles/home-name-animation-desktop.component.scss'],
})
export class HomeNameAnimationDesktopComponent implements OnInit, OnDestroy {
  public scrollHomeNameHello: number = 20;
  public scrollHomeNameName: number = 20;

  constructor() {
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
    const screenHeightTimesFive: number = screenHeight * 5;

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
