import {Component} from '@angular/core'
import {Router} from '@angular/router'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {


	constructor(private router: Router) {
		// @ts-ignore
		this.router.events.subscribe((event: Event_2) => this.scrollToTop(event))
	}

	// @ts-ignore
	private scrollToTop(event: Event_2): void {
		window.scroll(0, 0)
	}
}
