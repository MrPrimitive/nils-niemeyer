import {Component, OnDestroy, OnInit} from '@angular/core'
import {Router} from '@angular/router'

@Component({
	selector: 'mse-home-content-image-me-small',
	templateUrl: './templates/home-content-image-me-small.component.html',
	styleUrls: ['./styles/home-content-image-me.component.scss','./styles/home-content-image-me-small.component.scss']
})
export class HomeContentImageMeSmallComponent implements OnInit, OnDestroy {
	constructor(router: Router) {
	}

	ngOnDestroy(): void {
	}

	ngOnInit(): void {
	}

}
