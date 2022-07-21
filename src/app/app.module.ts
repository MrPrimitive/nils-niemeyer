import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LandingPageComponent} from './pages/landing-page/landing-page.component';
import {NavComponent} from './nav/nav.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MakotoCursorComponent} from "./_helper/cursor/makoto-cursor.component";
import {MatTabsModule} from "@angular/material/tabs";
import {AboutPageComponent} from './pages/about-page/about-page.component';
import { MyWorkPageComponent } from './pages/my-work-page/my-work-page.component';
import { MakotoStudioPageComponent } from './pages/makoto-studio-page/makoto-studio-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavComponent,
    MakotoCursorComponent,
    AboutPageComponent,
    MyWorkPageComponent,
    MakotoStudioPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
