import {Component, OnDestroy, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {HomeImageMeHelper} from './home-image-me.helper'

@Component({
	selector: 'mse-home-image-me-desktop',
	templateUrl: './templates/home-image-me-desktop.component.html',
	styleUrls: ['./styles/home-image-me-desktop.component.scss']
})
export class HomeImageMeDesktopComponent extends HomeImageMeHelper implements OnInit, OnDestroy {

	constructor(router: Router) {
		super(router)
	}


	ngOnInit(): void {
	}

	ngOnDestroy(): void {
	}
}