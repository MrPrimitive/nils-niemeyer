import {Component, OnDestroy, OnInit} from '@angular/core'
import {LayoutService} from '@services'
import {ScreenSize} from '@constants'

@Component({
	selector: 'mse-product-content',
	templateUrl: './templates/product-content.component.html',
	styleUrls: ['./styles/product-content.component.scss']
})
export class ProductContentComponent implements OnInit, OnDestroy {
	screenSizeSmall: ScreenSize = ScreenSize.Small

	constructor(public layoutService: LayoutService) {
	}

	ngOnInit(): void {
	}

	ngOnDestroy(): void {
	}
}
