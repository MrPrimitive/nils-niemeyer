import {Component, OnInit} from '@angular/core'
import {NavBarHelper} from './nav-bar.helper'
import {Router} from '@angular/router'
import {NavigationUrl} from '@constants'

@Component({
	selector: 'mse-nav-large',
	templateUrl: './templates/nav-bar-large.component.html',
	styleUrls: ['./styles/nav-bar.component.scss', './styles/nav-bar-large.component.scss'],
	providers: [NavBarHelper]
})
export class NavBarLargeComponent extends NavBarHelper implements OnInit {

	protected readonly NavigationUrl = NavigationUrl

	constructor(router: Router) {
		super(router)
	}

	ngOnInit(): void {
		this.router.events.subscribe((event: any) => this.navigationEvent(event))
	}
}

