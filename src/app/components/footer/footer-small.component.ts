import {Component} from '@angular/core'
import {LayoutService} from '../../_services/layout.service'
import {FooterHelper} from './footer.helper'
import {Router} from '@angular/router'

@Component({
	selector: 'mse-footer-small',
	templateUrl: './template/footer-small.component.html',
	styleUrls: ['./styles/footer.component.scss','./styles/footer-small.component.scss']
})
export class FooterSmallComponent extends FooterHelper {
	constructor(router: Router) {
		super(router)
	}
}
