import {Component} from '@angular/core'
import {FooterHelper} from './footer.helper'
import {Router} from '@angular/router'
import {MatDialog} from '@angular/material/dialog'

@Component({
	selector: 'mse-footer-small',
	templateUrl: './templates/footer-small.component.html',
	styleUrls: ['./styles/footer.component.scss', './styles/footer-small.component.scss']
})
export class FooterSmallComponent extends FooterHelper {
	constructor(router: Router, dialog: MatDialog) {
		super(router, dialog)
	}
}
