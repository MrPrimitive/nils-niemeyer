import {Component} from '@angular/core'
import {LayoutService} from '../../_services/layout.service'

@Component({
	selector: 'mse-footer-small',
	templateUrl: './template/footer-small.component.html',
	styleUrls: ['styles/footer-small.component.scss']
})
export class FooterSmallComponent {
	constructor(public layoutService: LayoutService) {
	}
}
