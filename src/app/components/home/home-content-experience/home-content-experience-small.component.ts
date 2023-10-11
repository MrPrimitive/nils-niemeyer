import {Component, OnDestroy, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {HomeContentHelper} from './home-content.helper'

@Component({
	selector: 'mse-home-content-experience-small',
	templateUrl: './templates/home-content-experience-small.component.html',
	styleUrls: ['./styles/home-content-experience-small.component.scss']
})
export class HomeContentExperienceSmallComponent extends HomeContentHelper implements OnInit, OnDestroy {
	constructor(router: Router) {
		super(router)
	}

	ngOnDestroy(): void {
	}

	ngOnInit(): void {
	}

}