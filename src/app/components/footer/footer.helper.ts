import {Router} from '@angular/router'


export class FooterHelper {

  constructor(private router: Router) {

  }

  viewPage(url: string): void {
    this.router.navigate([url]);
  }

  openLink(url: string): void {
    window.open(url, '_blank');
  }
}
