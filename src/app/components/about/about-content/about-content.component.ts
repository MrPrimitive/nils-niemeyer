import {Component} from '@angular/core'
import {LayoutService} from '@services'
import {ScreenSize} from '@constants'

@Component({
  selector: 'mse-about-content',
  templateUrl: './templates/about-content.component.html',
  styleUrls: ['./styles/about-content.component.scss']
})
export class AboutContentComponent {
  screenSizeSmall: ScreenSize = ScreenSize.Small;

  constructor(public layoutService: LayoutService) {
  }

}
