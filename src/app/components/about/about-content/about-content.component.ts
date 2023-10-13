import {Component} from "@angular/core";
import {LayoutService} from "@services";

@Component({
  selector: 'mse-about-content',
  templateUrl: './templates/about-content.component.html',
  styleUrls: ['./styles/about-content.component.scss']
})
export class AboutContentComponent {

  constructor(public layoutService: LayoutService) {
  }

}
