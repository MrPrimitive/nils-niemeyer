import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {AboutPageComponent} from "./pages/about-page/about-page.component";
import {MyWorkPageComponent} from "./pages/my-work-page/my-work-page.component";
import {MakotoStudioPageComponent} from "./pages/makoto-studio-page/makoto-studio-page.component";

const routes: Routes = [
  // {path: '**', component: LandingPageComponent},
  {path: '', component: LandingPageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'work', component: MyWorkPageComponent},
  {path: 'makoto-studio', component: MakotoStudioPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
