import {Component} from "@angular/core";
import {LayoutService} from "../../_services/layout.service";

@Component({
  selector: 'mse-footer-large',
  templateUrl: './template/footer-large.component.html',
  styleUrls: ['styles/footer-large.component.scss']
})
export class FooterLargeComponent {
  constructor(public layoutService: LayoutService) {
  }
}
