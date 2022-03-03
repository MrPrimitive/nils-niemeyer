import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {MyWorkComponent} from "./my-work/my-work.component";

const routes: Routes = [
  // {path: '**', component: LandingPageComponent},
  {path: '', component: LandingPageComponent},
  {path: 'work', component: MyWorkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
