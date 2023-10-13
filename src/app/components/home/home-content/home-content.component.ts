import {Component, OnDestroy, OnInit} from "@angular/core";
import {LayoutService} from "@services";

@Component({
  selector: 'mse-home-content',
  templateUrl: './templates/home-content.component.html',
  styleUrls: ['./styles/home-content.component.scss']
})
export class HomeContentComponent implements OnInit, OnDestroy {
  constructor(public layoutService: LayoutService) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
