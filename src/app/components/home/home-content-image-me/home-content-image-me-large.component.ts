import {Component, OnDestroy, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {normalize} from '../../../_helper/function.util'

@Component({
	selector: 'mse-home-content-image-me-large',
	templateUrl: './templates/home-content-image-me-large.component.html',
	styleUrls: ['./styles/home-content-image-me.component.scss', './styles/home-content-image-me-large.component.scss']
})
export class HomeContentImageMeLargeComponent implements OnInit, OnDestroy {

	constructor(router: Router) {
	}


	ngOnInit(): void {
		window.addEventListener('scroll', this.scrollEvent)
	}

	ngOnDestroy(): void {
	}

	private scrollEvent(event: any): void {
		const imageElement: HTMLElement | null = document.getElementById('mse-home-background-image-animation')
		if (imageElement) {
			const rect: DOMRect = imageElement.getBoundingClientRect()
			imageElement.style.opacity = String(1 - normalize(rect.top, 0, screen.height))
		}
	}

}

