import {Component, OnInit} from '@angular/core';
import {Router, Routes} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  isShowNavContent = false;

  constructor(public router: Router) {
  }

  ngOnInit(): void {
  }

  openLinkNewTab(link: string) {
    window.open(link)
  }

  showNavContent($event: Event) {
    this.isShowNavContent = !this.isShowNavContent
  }

  changePage(targetPage: string) {
    this.router.navigateByUrl(targetPage).then(r =>
      this.isShowNavContent = !this.isShowNavContent
    )
  }
}
