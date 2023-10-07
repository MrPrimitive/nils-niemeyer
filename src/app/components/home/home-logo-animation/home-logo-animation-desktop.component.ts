import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {HomeLogoAnimationHelper} from "./home-logo-animation.helper";

@Component({
  selector: 'mse-home-logo-animation-desktop',
  templateUrl: './templates/home-logo-animation-desktop.component.html',
  styleUrls: ['./styles/home-logo-animation-desktop.component.scss']
})
export class HomeLogoAnimationDesktopComponent extends HomeLogoAnimationHelper implements OnInit, OnDestroy {


  constructor(router: Router) {
    super(router)
  }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
