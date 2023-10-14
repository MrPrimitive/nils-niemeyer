import {Injectable} from '@angular/core'
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout'
import {Subject, takeUntil} from 'rxjs'
import {ScreenSize} from '@constants'

@Injectable({
	providedIn: 'root'
})
export class LayoutService {
	getScreenSize: ScreenSize = ScreenSize.Small
	destroyed: Subject<void> = new Subject<void>()
	displayNameMap: Map<string, string> = new Map([
		[Breakpoints.XSmall, 'XSmall'],
		[Breakpoints.Small, 'Small'],
		[Breakpoints.Medium, 'Medium'],
		[Breakpoints.Large, 'Large'],
		[Breakpoints.XLarge, 'XLarge']
	])
	breakToObserve: string[] = [
		Breakpoints.XSmall,
		Breakpoints.Small,
		Breakpoints.Medium,
		Breakpoints.Large,
		Breakpoints.XLarge
	]

	constructor(breakpointObserver: BreakpointObserver) {
		breakpointObserver
			.observe(this.breakToObserve)
			.pipe(takeUntil(this.destroyed))
			.subscribe((result: BreakpointState): void => this.updateScreenSize(result))
	}

	updateScreenSize(result: BreakpointState): void {
		for (const query of Object.keys(result.breakpoints)) {
			if (result.breakpoints[query]) {
				switch (this.displayNameMap.get(query)) {
					case ScreenSize.XSmall :
					case ScreenSize.Small :
						this.getScreenSize = ScreenSize.Small
						break
					case ScreenSize.Medium :
						this.getScreenSize = ScreenSize.Medium
						break
					case ScreenSize.XLarge :
					case ScreenSize.Large :
						this.getScreenSize = ScreenSize.Large
						break
				}
			}
		}
	}

}
