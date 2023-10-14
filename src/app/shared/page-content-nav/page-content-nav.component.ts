import {Component, Input} from '@angular/core'
import {IPageContentNavData} from '@models'

@Component({
	selector: 'mse-page-content-selector',
	templateUrl: './templates/page-content-nav.component.html',
	styleUrls: ['./styles/page-content-nav.component.scss'],
})
export class PageContentNavComponent {
	@Input() pageContentNavData: IPageContentNavData[] | undefined;
}