import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable({
  providedIn: "platform"
})
export class NavBarHelper {
  navMenuState: boolean = false

  constructor(private router: Router) {
  }


  openNavMenu(): void {
    this.navMenuState = !this.navMenuState
  }

  navigateTo(url: string): void {
    this.router.navigate([url])
      .then((state: boolean) => this.navMenuState = !state)
  }

}
