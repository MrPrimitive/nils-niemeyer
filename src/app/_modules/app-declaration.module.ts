import {AppComponent} from '../app.component'
import {
	FooterComponent,
	FooterLargeComponent,
	FooterSmallComponent,
	HomeContentEducationComponent,
	HomeContentEducationLargeComponent,
	HomeContentEducationSmallComponent,
	HomeContentExperienceComponent,
	HomeContentExperienceLargeComponent,
	HomeContentExperienceSmallComponent,
	HomeImageMeComponent,
	HomeImageMeDesktopComponent,
	HomeImageMeMobileComponent,
	HomeNameAnimationComponent,
	HomeNameAnimationDesktopComponent,
	HomeNameAnimationMobileComponent,
	NavBarComponent,
	NavBarLargeComponent,
	NavBarSmallComponent,
	NotFoundLargeComponent,
	NotFoundSmallComponent
} from '../components'
import {AboutComponent, HomeComponent, NotFoundComponent, ProductComponent} from '../pages'

export const DECLARATION_MODULES_COMPONENTS = [
	NavBarComponent,
	NavBarLargeComponent,
	NavBarSmallComponent,
	FooterComponent,
	FooterLargeComponent,
	FooterSmallComponent,
	NotFoundLargeComponent,
	NotFoundSmallComponent,
	HomeNameAnimationComponent,
	HomeNameAnimationDesktopComponent,
	HomeNameAnimationMobileComponent,
	HomeImageMeComponent,
	HomeImageMeDesktopComponent,
	HomeImageMeMobileComponent,
	HomeContentExperienceComponent,
	HomeContentExperienceLargeComponent,
	HomeContentExperienceSmallComponent,
	HomeContentEducationComponent,
	HomeContentEducationLargeComponent,
	HomeContentEducationSmallComponent
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
