import {Component, OnDestroy, OnInit} from '@angular/core'
import {CommonUtil} from "@helpers";

@Component({
  selector: 'mse-home-content-image-me-large',
  templateUrl: './templates/home-content-image-me-large.component.html',
  styleUrls: ['./styles/home-content-image-me.component.scss']
})
export class HomeContentImageMeLargeComponent implements OnInit, OnDestroy {
  constructor() {
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollEvent)
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollEvent)
  }

  private scrollEvent(): void {
    const imageElement: HTMLElement | null = document.getElementById('mse-home-background-image-animation')
    if (imageElement) {
      const rect: DOMRect = imageElement.getBoundingClientRect()
      imageElement.style.opacity = String(1 - CommonUtil.normalize(rect.top, 0, screen.height))
    }
  }

}

