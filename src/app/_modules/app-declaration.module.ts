import {AppComponent} from '../app.component'
import {
  // NEW
  HomeNameAnimationComponent,
  HomeNameAnimationDesktopComponent,
  HomeNameAnimationMobileComponent,
  NavBarComponent,
  NavBarLargeComponent,
  NavBarSmallComponent,
  NotFoundLargeComponent,
  NotFoundSmallComponent,
    // OLD
  HomeLogoAnimationComponent,
  HomeLogoAnimationDesktopComponent,
  HomeLogoAnimationMobileComponent,
} from '../components'
import {AboutComponent, HomeComponent, NotFoundComponent, ProductComponent} from '../pages'

export const DECLARATION_MODULES_COMPONENTS = [

  NavBarComponent,
  NavBarLargeComponent,
  NavBarSmallComponent,
  HomeNameAnimationComponent,
  HomeNameAnimationDesktopComponent,
  HomeNameAnimationMobileComponent,
  NotFoundLargeComponent,
  NotFoundSmallComponent,
    // OLD
  HomeLogoAnimationComponent,
  HomeLogoAnimationDesktopComponent,
  HomeLogoAnimationMobileComponent,
]

export const DECLARATION_MODULES_PAGES = [
  AppComponent,
  HomeComponent,
  NotFoundComponent,
  ProductComponent,
  AboutComponent
]

export const DECLARATIONS_MODULES = [
  DECLARATION_MODULES_COMPONENTS,
  DECLARATION_MODULES_PAGES
]

export const BOOTSTRAP_MODULE = [
  AppComponent
]