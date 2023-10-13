import {Component} from "@angular/core";
import {LayoutService} from "@services";

@Component({
  selector: 'mse-project-content',
  templateUrl: './templates/project-content.component.html',
  styleUrls: ['./styles/project-content.component.scss']
})
export class ProjectContentComponent {

  constructor(public layoutService: LayoutService) {
  }
}
