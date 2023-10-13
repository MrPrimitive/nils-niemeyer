import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {
  AboutPageComponent,
  HomePageComponent,
  NotFoundPageComponent,
  PrivacyPolicyPageComponent,
  ProductPageComponent,
  ProjectPageComponent
} from '../pages'

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'project',
    component: ProjectPageComponent
  },
  // {
  //   path: 'product',
  //   component: ProductPageComponent
  // },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyPageComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
