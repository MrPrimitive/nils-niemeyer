import {Component, OnDestroy, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {HomeNameAnimationHelper} from './home-name-animation.helper'

@Component({
	selector: 'mse-home-name-animation-desktop',
	templateUrl: './templates/home-name-animation-desktop.component.html',
	styleUrls: ['./styles/home-name-animation-desktop.component.scss']
})
export class HomeNameAnimationDesktopComponent extends HomeNameAnimationHelper implements OnInit, OnDestroy {

	constructor(router: Router) {
		super(router)
	}


	ngOnInit(): void {
	}

	ngOnDestroy(): void {
	}
}