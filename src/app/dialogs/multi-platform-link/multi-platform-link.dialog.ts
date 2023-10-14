import {Component, Inject} from '@angular/core'
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog'
import {NgForOf, NgIf} from '@angular/common'
import {IMultiPlatformLinkData} from '@models'
import {MatTooltipModule} from '@angular/material/tooltip'

@Component({
	selector: 'mse-multi-platform-link-dialog',
	templateUrl: './templates/multi-platform-link.dialog.html',
	styleUrls: ['./styles/multi-platform-link.dialog.scss'],
	standalone: true,
	imports: [MatDialogModule, NgIf, NgForOf, MatTooltipModule]
})
export class MultiPlatformLinkDialog {

	constructor(@Inject(MAT_DIALOG_DATA) public data: IMultiPlatformLinkData) {
	}
}