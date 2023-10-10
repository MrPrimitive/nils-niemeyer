import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {LandingPageComponent} from '../LAGACY/landing-page/landing-page.component'
import {AboutComponent, HomeComponent, NotFoundComponent} from '../pages'

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'home',
		component: LandingPageComponent
	},
	{
		path: 'about',
		component: AboutComponent
	},
	{
		path: '**',
		component: NotFoundComponent
	}
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
