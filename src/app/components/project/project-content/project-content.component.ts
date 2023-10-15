import {Component, OnDestroy, OnInit} from '@angular/core'
import {LayoutService} from '@services';
import {ScreenSize} from '@constants'
import {IPageContentNavData} from '@models'

@Component({
  selector: 'mse-project-content',
  templateUrl: './templates/project-content.component.html',
  styleUrls: ['./styles/project-content.component.scss']
})
export class ProjectContentComponent implements OnInit, OnDestroy {
  screenSizeSmall: ScreenSize = ScreenSize.Small

  constructor(public layoutService: LayoutService) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
