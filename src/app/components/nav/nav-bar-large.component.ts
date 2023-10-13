import {Component} from '@angular/core';
import {NavBarHelper} from "./nav-bar.helper";
import {Router} from "@angular/router";

@Component({
  selector: 'mse-nav-large',
  templateUrl: './templates/nav-bar-large.component.html',
  styleUrls: ['./styles/nav-bar.component.scss', './styles/nav-bar-large.component.scss'],
  providers: [NavBarHelper]
})
export class NavBarLargeComponent extends NavBarHelper {

  constructor(router: Router) {
    super(router);
  }
}
