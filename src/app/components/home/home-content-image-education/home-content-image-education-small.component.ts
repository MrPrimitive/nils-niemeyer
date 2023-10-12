import {Component, OnDestroy, OnInit} from '@angular/core'
import {Router} from '@angular/router'

@Component({
	selector: 'mse-home-content-image-education-small',
	templateUrl: './templates/home-content-image-education-small.component.html',
	styleUrls: ['./styles/home-content-image-education.component.scss','./styles/home-content-image-education-small.component.scss']
})
export class HomeContentImageEducationSmallComponent implements OnInit, OnDestroy {
	constructor(router: Router) {
	}

	ngOnDestroy(): void {
	}

	ngOnInit(): void {
	}

}
