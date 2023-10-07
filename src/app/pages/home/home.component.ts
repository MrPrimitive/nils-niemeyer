import { Component } from '@angular/core';
import {LayoutService} from '../../_services/layout.service'

@Component({
  selector: 'mse-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public layoutService: LayoutService) {
  }
}
