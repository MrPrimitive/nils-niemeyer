import {Component, OnInit} from '@angular/core';
import {trigger, state, style, transition, animate} from "@angular/animations";
import {concatMap} from "rxjs";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [
    trigger('fadeInOut', [
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
    ]),
  ]
})
export class LandingPageComponent implements OnInit {
  public fading: boolean
  public fadeContent = true;

  constructor() {
    this.fading = false;
    // this.fadeContent = false;
  }

  ngOnInit(): void {
    this.fadeInEvent()
    window.addEventListener('scroll', this.scrollEvent);

    setInterval(() => {
      this.fadeInEvent();
    }, 1200);

  }

  fadeInEvent() {
    if (this.fading) {
      this.fading = !this.fading;
    } else {
      this.fading = !this.fading;
    }
    return this.fading;
  }

  scrollEvent(event: any) {
    const iconElement = document.getElementById("nin-scroll-icon");
    if (iconElement) {
      iconElement.style.opacity = String(1 - window.scrollY / 250);
    }

    const titleElement = document.getElementById("nin-title-text");
    if (titleElement) {
      titleElement.style.opacity = String(1 - window.scrollY / 1050);
      titleElement.style.top = (40 + window.scrollY / 250) + '%';
    }

    const imageElement = document.getElementById("nin-background-image");
    if (imageElement) {
      const opa = window.scrollY / 850;
      // console.log(opa);

      imageElement.style.opacity = String(window.scrollY / 850);
    }

    const myNameElement = document.getElementById('nin-my-name')
    if (myNameElement) {
      myNameElement.style.paddingTop = (5 - window.scrollY / 250) + '%';
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
