import {BrowserModule} from '@angular/platform-browser'
import {AppRoutingModule} from './app-routing.module'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatButtonModule} from '@angular/material/button'
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import {MatCardModule} from '@angular/material/card'
import {MatListModule} from '@angular/material/list'
import {MatProgressBarModule} from '@angular/material/progress-bar'
import {MatIconModule} from '@angular/material/icon'
import {NgOptimizedImage} from '@angular/common'
import {MatTooltipModule} from '@angular/material/tooltip'
import {MatDialogModule} from '@angular/material/dialog'

export const APP_IMPORT_MODULES = [
	BrowserModule,
	AppRoutingModule,
	BrowserAnimationsModule,
	MatButtonModule,
	MatSlideToggleModule,
	MatCardModule,
	MatListModule,
	MatProgressBarModule,
	MatIconModule,
	NgOptimizedImage,
	MatTooltipModule,
	MatDialogModule
]
