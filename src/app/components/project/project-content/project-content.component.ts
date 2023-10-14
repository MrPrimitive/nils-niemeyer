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
  pageContentNavData: IPageContentNavData[] = [
    {
      hrefLink: 'project#top',
      displayName: 'TOP',
    },
    {
      hrefLink: 'project#enigma-adventure',
      displayName: 'ENIGMA ADVENTURE',
    },
    {
      hrefLink: 'project#outrun-undeath',
      displayName: 'OUTRUN UNDEATH',
    },
    {
      hrefLink: 'project#makoto-studio-engine',
      displayName: 'MAKOTO STUDIO ENGINE',
    }
  ];

  constructor(public layoutService: LayoutService) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
