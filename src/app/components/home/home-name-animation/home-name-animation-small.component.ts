import {Component} from '@angular/core'
import {HomeNameAnimationHelper} from './home-name-animation.helper'
import {HomeAnimation} from '@animations'
import {MatDialog} from '@angular/material/dialog'

@Component({
	selector: 'mse-home-name-animation-small',
	templateUrl: './templates/home-name-animation.component.html',
	styleUrls: ['./styles/home-name-animation.component.scss', './styles/home-name-animation-small.component.scss'],
	providers: [HomeNameAnimationHelper],
	animations: [HomeAnimation.ANIMATION_HOME_SCROLL, HomeAnimation.ANIMATION_HOME_FADE_TEXT, HomeAnimation.ANIMATION_HOME_BOUNCING_ARROW]
})
export class HomeNameAnimationSmallComponent extends HomeNameAnimationHelper {

	constructor(matDialog: MatDialog) {
		super(matDialog);
	}
}
