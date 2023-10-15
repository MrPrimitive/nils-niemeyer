import {Injectable} from "@angular/core";
import {NavigationStart, Router, RouterEvent} from '@angular/router'
import {IPageContentNavData} from '@models'
import {NavigationUrl, PageContentNavSectionDataType} from '@constants'

@Injectable({
  providedIn: "platform"
})
export class NavBarHelper {
  navMenuState: boolean = false
  navBarMainClass: string = 'mse-nav-bar'
  pageContentNavData: IPageContentNavData[]

  constructor(protected router: Router) {
    this.pageContentNavData = PageContentNavSectionDataType.pageContentNavDataHome
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

  protected navigationEvent(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      switch (event.url) {
        case NavigationUrl.HOME :
          this.pageContentNavData = PageContentNavSectionDataType.pageContentNavDataHome
          break
        case NavigationUrl.PROJECT :
          this.pageContentNavData = PageContentNavSectionDataType.pageContentNavDataProject
          break
        case NavigationUrl.PRODUCT :
          this.pageContentNavData = PageContentNavSectionDataType.pageContentNavDataProduct
          break
        case NavigationUrl.ABOUT :
          this.pageContentNavData = PageContentNavSectionDataType.pageContentNavDataAbout
          break
      }
    }
  }
}