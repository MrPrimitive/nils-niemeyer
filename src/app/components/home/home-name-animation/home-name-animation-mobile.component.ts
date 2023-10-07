import {Component, OnDestroy, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {HomeNameAnimationHelper} from './home-name-animation.helper'

@Component({
	selector: 'mse-home-name-animation-mobile',
	templateUrl: './templates/home-name-animation-mobile.component.html',
	styleUrls: ['./styles/home-name-animation-mobile.component.scss']
})
export class HomeNameAnimationMobileComponent extends HomeNameAnimationHelper implements OnInit, OnDestroy {
	constructor(router: Router) {
		super(router)
	}

	ngOnDestroy(): void {
	}

	ngOnInit(): void {
	}

}