import {Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
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

  private rendere: Renderer2;

  constructor(router: Router, render: Renderer2) {
    super(router)
    this.rendere = render;
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
    const element: HTMLElement | null = document.getElementById('mse-nav-bar');
    if (this.navMenuState) {
      // this.rendere.removeClass(element, 'mse-nav-bar')
      this.rendere.addClass(element, 'mse-nav-bar-expand')
    } else {
      this.rendere.removeClass(element, 'mse-nav-bar-expand')
    }
  }

}
