import {AppComponent} from '../app.component'
import {
	AboutContentComponent,
	AboutContentHistoryLargeComponent,
	AboutContentHistorySmallComponent,
	AboutContentMeLargeComponent,
	AboutContentMeSmallComponent,
	HomeContentComponent,
	HomeContentEducationLargeComponent,
	HomeContentEducationSmallComponent,
	HomeContentExperienceLargeComponent,
	HomeContentExperienceSmallComponent,
	HomeContentImageMeComponent,
	HomeNameAnimationLargeComponent,
	HomeNameAnimationSmallComponent,
	ProductContentComponent,
	ProjectContentComponent,
	ProjectEnigmaAdventureLargeComponent,
	ProjectEnigmaAdventureSmallComponent,
	ProjectOutrunUndeathLargeComponent,
	ProjectOutrunUndeathSmallComponent
} from '@components'
import {
	FooterComponent,
	FooterLargeComponent,
	FooterSmallComponent,
	NavBarLargeComponent,
	NavBarSmallComponent,
	NotFoundComponent,
	PrivacyPolicyComponent,
	PrivacyPolicyLargeComponent,
	PrivacyPolicySmallComponent,
} from '@shared'
import {
	AboutPageComponent,
	HomePageComponent,
	NotFoundPageComponent,
	PrivacyPolicyPageComponent,
	ProductPageComponent,
	ProjectPageComponent
} from '@pages'

export const DECLARATION_MODULES_COMPONENTS = [
	AboutContentComponent,
	AboutContentHistoryLargeComponent,
	AboutContentHistorySmallComponent,
	AboutContentMeLargeComponent,
	AboutContentMeSmallComponent,
	FooterComponent,
	FooterLargeComponent,
	FooterSmallComponent,
	HomeContentComponent,
	HomeContentEducationLargeComponent,
	HomeContentEducationSmallComponent,
	HomeContentExperienceLargeComponent,
	HomeContentExperienceSmallComponent,
	HomeContentImageMeComponent,
	HomeNameAnimationLargeComponent,
	HomeNameAnimationSmallComponent,
	NavBarLargeComponent,
	NavBarSmallComponent,
	NotFoundComponent,
	PrivacyPolicyComponent,
	PrivacyPolicyLargeComponent,
	PrivacyPolicySmallComponent,
	ProductContentComponent,
	ProjectContentComponent,
	ProjectEnigmaAdventureLargeComponent,
	ProjectEnigmaAdventureSmallComponent,
	ProjectOutrunUndeathLargeComponent,
	ProjectOutrunUndeathSmallComponent,
]

export const DECLARATION_MODULES_PAGES = [
	AppComponent,
	HomePageComponent,
	NotFoundPageComponent,
	ProductPageComponent,
	AboutPageComponent,
	PrivacyPolicyPageComponent,
	ProjectPageComponent
]

export const DECLARATIONS_MODULES = [
	DECLARATION_MODULES_COMPONENTS,
	DECLARATION_MODULES_PAGES
]

export const BOOTSTRAP_MODULE = [
	AppComponent
]
