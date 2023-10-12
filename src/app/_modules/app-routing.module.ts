import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {AboutComponent, HomeComponent, NotFoundComponent, PrivacyPolicyComponent} from '../pages'

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'about',
		component: AboutComponent
	},
	{
		path: 'privacy-policy',
		component: PrivacyPolicyComponent
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
