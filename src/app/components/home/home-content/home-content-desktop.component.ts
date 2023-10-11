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
    const helloWorldElement: HTMLElement | null = document.getElementById('mse-home-experience-content-hello-world')
    if (helloWorldElement) {
      const helloWorldElementDOMRect: DOMRect = helloWorldElement.getBoundingClientRect();
      console.log("TOP:" + helloWorldElementDOMRect.top)
      console.log("CALC ONE: " + (screenHeight - (screenHeight / 8)))
      console.log("CALC TWO: " + screenHeight / 2)
      if (helloWorldElementDOMRect.top < (screenHeight - (screenHeight / 4)) && helloWorldElementDOMRect.top > screenHeight / 8) {
        helloWorldElement.style.opacity = '1';
      } else {
        helloWorldElement.style.opacity = '0';
      }
    }
  }
}
