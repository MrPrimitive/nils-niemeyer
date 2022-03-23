import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-open-close',
  templateUrl: 'app-open-close.component.html',
  styleUrls: ['app-open-close.component.scss']
})
export class AppOpenCloseComponent {
  isOpen = true;

  toggle() {
    console.log(this.isOpen)
    this.isOpen = !this.isOpen;
  }

}
