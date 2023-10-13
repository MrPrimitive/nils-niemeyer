import {Component, OnDestroy, OnInit} from '@angular/core'
import {CommonUtil} from "@helpers";

@Component({
  selector: 'mse-home-content-image-me-small',
  templateUrl: './templates/home-content-image-me-small.component.html',
  styleUrls: ['./styles/home-content-image-me.component.scss', './styles/home-content-image-me-small.component.scss']
})
export class HomeContentImageMeSmallComponent implements OnInit, OnDestroy {
  constructor() {
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollEvent)
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollEvent)
  }

  private scrollEvent(event: any): void {
    const imageElement: HTMLElement | null = document.getElementById('mse-home-background-image-animation')
    if (imageElement) {
      const rect: DOMRect = imageElement.getBoundingClientRect()
      imageElement.style.opacity = String(1 - CommonUtil.normalize(rect.top, 0, screen.height))
    }
  }

}
