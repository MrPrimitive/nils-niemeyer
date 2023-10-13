import {Component, OnDestroy, OnInit} from '@angular/core'

@Component({
  selector: 'mse-home-content-experience-large',
  templateUrl: './templates/home-content-experience-large.component.html',
  styleUrls: ['./styles/home-content-experience-large.component.scss']
})
export class HomeContentExperienceLargeComponent implements OnInit, OnDestroy {

  constructor() {
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
      if (helloWorldElementDOMRect.top < (screenHeight - (screenHeight / 4)) && helloWorldElementDOMRect.top > screenHeight / 8) {
        helloWorldElement.style.opacity = '1';
      } else {
        helloWorldElement.style.opacity = '0';
      }
    }
  }
}
