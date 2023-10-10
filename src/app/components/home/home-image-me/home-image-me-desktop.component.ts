import {Component, OnDestroy, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {HomeImageMeHelper} from './home-image-me.helper'
import {normalize} from '../../../_helper/function.util'

@Component({
	selector: 'mse-home-image-me-desktop',
	templateUrl: './templates/home-image-me-desktop.component.html',
	styleUrls: ['./styles/home-image-me.component.scss', './styles/home-image-me-desktop.component.scss']
})
export class HomeImageMeDesktopComponent extends HomeImageMeHelper implements OnInit, OnDestroy {

	constructor(router: Router) {
		super(router)
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

