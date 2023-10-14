import {MatDialog} from '@angular/material/dialog'
import {Injectable, OnInit} from '@angular/core'

@Injectable({
	providedIn: 'platform'
})
export class HomeNameAnimationHelper implements OnInit {
	public dialogOpen: boolean = false
	public bouncingArrowState: boolean = true
	public animationTime: string = '1s'
	public animationState: string = 'out'
	public scrollHint: boolean = true
	public scrollHomeNameHello: boolean = true
	matDialog: MatDialog

	constructor(matDialog: MatDialog) {
		this.matDialog = matDialog

	}

	ngOnInit(): void {
		this.scrollHint = true
		this.scrollHomeNameHello = true
		this.matDialog.afterOpened.subscribe(() => {
			this.dialogOpen = true
		})
		this.matDialog.afterAllClosed.subscribe(() => {
			this.dialogOpen = false
		})
		window.addEventListener('scroll', (): void => {
			this.scrollHint = window.scrollY <= 50
			this.scrollHomeNameHello = window.scrollY <= 50
			this.scrollEvent()
		})

		this.bouncingArrow()
		setInterval((): void => {
			this.bouncingArrow()
		}, 1000)
	}

	bouncingArrow(): void {
		this.bouncingArrowState = !this.bouncingArrowState
		this.animationState = this.bouncingArrowState ? 'out' : 'in'
	}

	scrollEvent(): void {
		const screenHeight: number = window.screen.height
		const halfScreenHeight: number = screenHeight / 2
		const quadScreenHeight: number = halfScreenHeight / 2
		const screenHeightTimesFive: number = screenHeight * 5

		const mseHomeNameMyNameAnimationElement: HTMLElement | null = document.getElementById('mse-home-name-my-name-animation')
		if (mseHomeNameMyNameAnimationElement) {
			mseHomeNameMyNameAnimationElement.style.paddingTop = (40 - ((window.scrollY / halfScreenHeight) * 20)) + 'px'
		}

		const mseHomeNameTitleAnimationElement: HTMLElement | null = document.getElementById('mse-home-name-title-text-animation')
		if (mseHomeNameTitleAnimationElement) {
			mseHomeNameTitleAnimationElement.style.opacity = String(1 - window.scrollY / quadScreenHeight)
		}

		const mseHomeAnimationElement: HTMLElement | null = document.getElementById('mse-home-name-animation')
		if (mseHomeAnimationElement) {
			mseHomeAnimationElement.style.opacity = String(1 - window.scrollY / halfScreenHeight)
			mseHomeAnimationElement.style.scale = String(1 - window.scrollY / screenHeightTimesFive)
		}
	}
}
