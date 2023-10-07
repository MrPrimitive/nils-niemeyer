import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {ANIMATION_NAV_EXPAND_MENU, ANIMATION_NAV_TURN_ARROW} from '../../animations';
import {NavBarHelper} from "./nav-bar.helper";

@Component({
  selector: 'mse-nav-small',
  templateUrl: './templates/nav-bar-small.component.html',
  styleUrls: ['./styles/nav-bar-small.component.scss', './styles/nav-bar.component.scss'],
  animations: [ANIMATION_NAV_TURN_ARROW, ANIMATION_NAV_EXPAND_MENU],
  providers: [NavBarHelper]
})
export class NavBarSmallComponent extends NavBarHelper implements OnInit, OnDestroy {
  @ViewChild('navMenuElement') navMenuElement: ElementRef | undefined
  @ViewChild('navMenuButtonElement') navMenuButtonElement: ElementRef | undefined


  constructor(router: Router) {
    super(router)
  }

  ngOnInit(): void {
    document.addEventListener('click', (evt: MouseEvent): void => {
      this.closeNavClick(evt)
    })
  }

  ngOnDestroy(): void {
    document.removeEventListener('click', (evt: MouseEvent): void => {
      this.closeNavClick(evt)
    })
  }


  closeNavClick(evt: MouseEvent): void {
    if (!this.navMenuButtonElement?.nativeElement.contains(evt.target)
      && !this.navMenuElement?.nativeElement.contains(evt.target)) {
      this.navMenuState = false;
    }
  }

}
