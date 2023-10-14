import {Component} from '@angular/core'
import {NavigationEnd, Router, RouterEvent} from '@angular/router'
import {LayoutService} from '@services'
import {ScreenSize} from '@constants'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	screenSizeSmall: ScreenSize = ScreenSize.Small

	constructor(private router: Router,
							public layoutService: LayoutService) {
		this.router.events.subscribe((event: any) => this.scrollToTop(event))
	}

	private scrollToTop(event: RouterEvent): void {
		if (event instanceof NavigationEnd) {
			// window.scroll(0, 0)
		}
	}
}
