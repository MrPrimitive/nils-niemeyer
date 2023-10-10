import {Component, OnDestroy, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {HomeImageMeHelper} from './home-image-me.helper'

@Component({
	selector: 'mse-home-image-me-mobile',
	templateUrl: './templates/home-image-me-mobile.component.html',
	styleUrls: ['./styles/home-image-me.component.scss','./styles/home-image-me-mobile.component.scss']
})
export class HomeImageMeMobileComponent extends HomeImageMeHelper implements OnInit, OnDestroy {
	constructor(router: Router) {
		super(router)
	}

	ngOnDestroy(): void {
	}

	ngOnInit(): void {
	}

}
