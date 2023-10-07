import {Component, OnDestroy, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {HomeContentHelper} from './home-content.helper'

@Component({
	selector: 'mse-home-content-mobile',
	templateUrl: './templates/home-content-mobile.component.html',
	styleUrls: ['./styles/home-content-mobile.component.scss']
})
export class HomeContentMobileComponent extends HomeContentHelper implements OnInit, OnDestroy {
	constructor(router: Router) {
		super(router)
	}

	ngOnDestroy(): void {
	}

	ngOnInit(): void {
	}

}