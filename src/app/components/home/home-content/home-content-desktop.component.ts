import {Component, OnDestroy, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {HomeContentHelper} from './home-content.helper'

@Component({
	selector: 'mse-home-content-desktop',
	templateUrl: './templates/home-content-desktop.component.html',
	styleUrls: ['./styles/home-content-desktop.component.scss']
})
export class HomeContentDesktopComponent extends HomeContentHelper implements OnInit, OnDestroy {

	constructor(router: Router) {
		super(router)
	}


	ngOnInit(): void {
	}

	ngOnDestroy(): void {
	}
}
