import {Component} from "@angular/core";
import {LayoutService} from "@services";

@Component({
  selector: 'mse-product-content',
  templateUrl: './templates/product-content.component.html',
  styleUrls: ['./styles/product-content.component.scss']
})
export class ProductContentComponent {
  constructor(layoutService: LayoutService) {
  }
}
