import {Component, OnInit} from '@angular/core';
import {Router, Routes} from "@angular/router";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('turnArrow', [
      state('up', style({
        transform: 'rotate(0deg)',
      })),
      state('down', style({
        transform: 'rotate(180deg)',
      })),
      transition('up => down', [
        animate('0.2s')
      ]),
      transition('down => up', [
        animate('0.2s')
      ]),
    ]),
    trigger('expandMenu', [
      state('in', style({
        visibility: 'hidden',
        opacity: 0,
      })),
      state('out', style({
        visibility: 'visible',
        opacity: 1,
      })),
      transition('in => out', [
        animate('1s')
      ]),
      transition('out => in', [
        animate('0.1s')
      ])
    ])
  ]
})
export class NavComponent {
  isShowNavContent = false;

  constructor(public router: Router) {
  }

  showNavContent($event: Event) {
    this.isShowNavContent = !this.isShowNavContent
  }

  changePage(targetPage: string) {
    this.router.navigateByUrl(targetPage).then(r =>
      this.isShowNavContent = !this.isShowNavContent
    )
  }

  openLinkAt(targetUrl: string){
    window.open(targetUrl, "_blank");
  }
}
