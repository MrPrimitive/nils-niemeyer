import {Component} from '@angular/core'
import {FooterHelper} from './footer.helper'
import {Router} from '@angular/router'

@Component({
	selector: 'mse-footer-large',
	templateUrl: './templates/footer-large.component.html',
	styleUrls: ['./styles/footer.component.scss','./styles/footer-large.component.scss']
})
export class FooterLargeComponent extends FooterHelper {
	constructor(router: Router) {
		super(router)
	}
}
