import {Injectable} from '@angular/core'
import {Router} from '@angular/router'


@Injectable({
	providedIn: 'root'
})
export class FooterHelper {

	constructor(private router: Router) {

	}

	viewPage(url: string): void {
		this.router.navigate([url]);
	}

	openLink(url: string): void {
		window.open(url,'_blank');
	}
}