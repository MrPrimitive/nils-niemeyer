import {Component, OnDestroy, OnInit} from '@angular/core';
import {HomeLogoAnimationHelper} from "./home-logo-animation.helper";
import {Router} from "@angular/router";

@Component({
  selector: 'mse-home-logo-animation-mobile',
  templateUrl: './templates/home-logo-animation-mobile.component.html',
  styleUrls: ['./styles/home-logo-animation-mobile.component.scss']
})
export class HomeLogoAnimationMobileComponent extends HomeLogoAnimationHelper implements OnInit, OnDestroy {
  constructor(router: Router) {
    super(router);
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

}
