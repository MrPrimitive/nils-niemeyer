import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable({
  providedIn: "platform"
})
export class NavBarHelper {
  navMenuState: boolean = false
  navBarMainClass: string = 'mse-nav-bar'

  constructor(private router: Router) {
  }

  openNavMenu(): void {
    this.navMenuState = !this.navMenuState
    this.navBarMainClass = this.navMenuState
      ? 'mse-nav-bar'
      : 'mse-nav-bar-expand';
  }

  navigateTo(url: string): void {
    this.router.navigate([url])
      .then((state: boolean) => this.navMenuState = !state)
  }

}