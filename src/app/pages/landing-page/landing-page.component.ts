import {Component, OnInit} from '@angular/core';
import {trigger, state, style, transition, animate} from "@angular/animations";
import {concatMap} from "rxjs";
import {ScreenSize} from "../../_helper/ScreenWindow/ScreenSizeCalculator";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [
    trigger('bouncingArrow', [
      state('in', style({
        opacity: 0.5,
        transform: 'translateY(20px) scale(1)',

      })),
      state('out', style({
        opacity: 1,
        transform: 'translateY(0) scale(1.2)',
      })),
      transition('in => out', [
        animate('1.5s')
      ]),
      transition('out => in', [
        animate('1.5s')
      ]),
    ])
  ]
})
export class LandingPageComponent implements OnInit {
  public bouncingArrowState: boolean
  screenHeight: number
  screenHeightQatar: number
  screenHeightThreeQatar: number

  constructor() {
    this.bouncingArrowState = false;
    this.screenHeight = window.screen.height;
    console.log(this.screenHeight)
    this.screenHeightQatar = this.screenHeight / 4
    console.log(this.screenHeightQatar)
    this.screenHeightThreeQatar = this.screenHeight - this.screenHeightQatar
    console.log(this.screenHeightThreeQatar)
  }

  ngOnInit(): void {
    this.screenHeight = window.screen.height;
    console.log(this.screenHeight)
    this.screenHeightQatar = this.screenHeight / 4
    console.log(this.screenHeightQatar)
    this.screenHeightThreeQatar = this.screenHeight - this.screenHeightQatar
    console.log(this.screenHeightThreeQatar)

    this.fadeInEvent()
    window.addEventListener('scroll', this.scrollEvent);
    setInterval(() => {
      this.fadeInEvent();
    }, 1200);
  }

  fadeInEvent() {
    this.bouncingArrowState = !this.bouncingArrowState;
  }

  scrollEvent(event: any) {
    const iconElement = document.getElementById("nin-scroll-icon");
    if (iconElement) {
      iconElement.style.opacity = String(1 - window.scrollY / this.screenHeightQatar);
    }

    const titleElement = document.getElementById("nin-title-text");
    if (titleElement) {
      titleElement.style.opacity = String(1 - window.scrollY / this.screenHeight);
      titleElement.style.top = (40 + window.scrollY / this.screenHeightQatar) + '%';
    }

    const firstImageElement = document.getElementById("nin-background-first-image");
    if (firstImageElement) {
      firstImageElement.style.opacity = String(window.scrollY / this.screenHeightThreeQatar);
    }

    const secondImageElement = document.getElementById("nin-background-second-image");
    if (secondImageElement) {
      secondImageElement.style.opacity = String(window.scrollY / this.screenHeightThreeQatar);
    }

    const myNameElement = document.getElementById('nin-my-name')
    if (myNameElement) {
      myNameElement.style.paddingTop = (5 - window.scrollY / this.screenHeightQatar) + '%';
    }

    // const elementHTMLCollectionOf = document.getElementsByClassName('scroll-content');
    //
    // for (let i = 0; i < elementHTMLCollectionOf.length; i++) {
    //   const element = elementHTMLCollectionOf.item(i)
    //   if (element) {
    //     const bottom = (element.getBoundingClientRect().top + window.innerHeight) - 750;
    //     const bottomWindow = element.scrollTop + window.innerHeight;
    //     if (bottomWindow > bottom) {
    //       console.log(element, "ON")
    //       element.animate({
    //         opacity: 1,
    //         transform: 'translateY(0) scale(1)',
    //       }, 1000)
    //     } else if (bottomWindow < bottom) {
    //       console.log(element, "OFF")
    //       element.animate({
    //         opacity: 0,
    //         transform: 'translateY(-40px) scale(0.5)',
    //       }, 500)
    //     }
    //   }
    // }


    // const scrollContentOne = document.getElementById('scroll-content-one');
    // if (scrollContentOne) {
    //   const elementToBottom = scrollContentOne.getBoundingClientRect().top + window.outerHeight;
    //   const bottomToWindow = scrollContentOne.scrollTop + scrollContentOne.getBoundingClientRect().bottom;
    //
    //   // console.log(elementToBottom)
    //   // console.log(bottomToWindow)
    //
    //   if (elementToBottom < 2000) {
    //     // console.log(scrollContentOne, "ON")
    //     this.fadeContent = true;
    //     let eff = new KeyframeEffect(
    //       scrollContentOne,
    //       [
    //         {opacity: 1},
    //         {transform: 'translate(0)'},
    //         {transform: 'scale(1)'}
    //       ],
    //       { duration: 1000, composite: 'add'}
    //     )
    //
    //     // scrollContentOne.animate({
    //     //   opacity: 1,
    //     //   transform: 'translateY(0) scale(1)',
    //     // }, 1000).scrollContentOne.style.opacity = '1';
    //     // scrollContentOne.style.transform = 'scale(1)';
    //   } else {
    //     this.fadeContent = false;
    //     // console.log(scrollContentOne, "OFF")
    //     // scrollContentOne.animate({
    //     //   opacity: 0,
    //     //   transform: 'translateY(-40px) scale(0.5)',
    //     // }, 500)
    //   }
    // }

  }
}
