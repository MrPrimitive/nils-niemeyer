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
	HomeContentImageEducationComponent,
	HomeContentImageEducationLargeComponent,
	HomeContentImageEducationSmallComponent,
	HomeContentImageMeComponent,
	HomeContentImageMeLargeComponent,
	HomeContentImageMeSmallComponent,
	HomeNameAnimationComponent,
	HomeNameAnimationDesktopComponent,
	HomeNameAnimationMobileComponent,
	NavBarComponent,
	NavBarLargeComponent,
	NavBarSmallComponent,
	NotFoundLargeComponent,
	NotFoundSmallComponent,
	PrivacyPolicyLargeComponent,
	PrivacyPolicySmallComponent
} from '../components'
import {AboutComponent, HomeComponent, NotFoundComponent, PrivacyPolicyComponent, ProductComponent} from '../pages'

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
	HomeContentImageMeComponent,
	HomeContentImageMeLargeComponent,
	HomeContentImageMeSmallComponent,
	HomeContentImageEducationComponent,
	HomeContentImageEducationLargeComponent,
	HomeContentImageEducationSmallComponent,
	HomeContentExperienceComponent,
	HomeContentExperienceLargeComponent,
	HomeContentExperienceSmallComponent,
	HomeContentEducationComponent,
	HomeContentEducationLargeComponent,
	HomeContentEducationSmallComponent,
	PrivacyPolicyLargeComponent,
	PrivacyPolicySmallComponent
]

export const DECLARATION_MODULES_PAGES = [
	AppComponent,
	HomeComponent,
	NotFoundComponent,
	ProductComponent,
	AboutComponent,
	PrivacyPolicyComponent
]

export const DECLARATIONS_MODULES = [
	DECLARATION_MODULES_COMPONENTS,
	DECLARATION_MODULES_PAGES
]

export const BOOTSTRAP_MODULE = [
	AppComponent
]
