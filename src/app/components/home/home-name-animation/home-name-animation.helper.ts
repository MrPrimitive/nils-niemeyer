import {Injectable} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";

@Injectable({
	providedIn: 'root'
})
export class HomeNameAnimationHelper {
	playAnimation: boolean = true

	constructor(private router: Router) {
		// @ts-ignore
		this.router.events.subscribe((event: Event_2) => this.addEventListener(event))
	}

	// @ts-ignore
	private addEventListener(event: Event_2): void {
		if (event instanceof NavigationEnd && event.urlAfterRedirects === '/') {
			this.playAnimation = true
		}
	}
}