import {Component, OnInit} from '@angular/core';
import {trigger, state, style, transition, animate} from "@angular/animations";

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
        animate('{{time}}')
      ]),
      transition('out => in', [
        animate('{{time}}')
      ]),
    ])
  ]
})
export class LandingPageComponent implements OnInit {
  public bouncingArrowState: boolean
  public animationTime: string = '1.5s'
  public animationState: string = 'out'

  public firstContentTrigger: string = 'out';

  constructor() {
    this.bouncingArrowState = false;
  }

  ngOnInit(): void {
    this.fadeInEvent()
    window.addEventListener('scroll', this.scrollEvent);
    setInterval(() => {
      this.fadeInEvent();
    }, 1200);
  }

  fadeInEvent() {
    this.bouncingArrowState = !this.bouncingArrowState;
    this.animationState = this.bouncingArrowState ? 'out' : 'in'
  }

  scrollEvent(event: any) {
    const screenHeight = window.screen.height
    const screenHeightQatar = screenHeight / 4
    const screenHeightThreeQatar = screenHeight - screenHeightQatar

    const iconElement = document.getElementById("nin-scroll-icon");
    if (iconElement) {
      iconElement.style.opacity = String(1 - window.scrollY / screenHeightQatar);
    }

    const titleElement = document.getElementById("nin-title-text");
    if (titleElement) {
      titleElement.style.opacity = String(1 - window.scrollY / screenHeight);
      titleElement.style.top = (40 + window.scrollY / screenHeightQatar) + '%';
    }

    const firstImageElement = document.getElementById("nin-background-first-image");
    if (firstImageElement) {
      firstImageElement.style.opacity = String(window.scrollY / screenHeightThreeQatar);
    }

    const secondImageElement = document.getElementById("nin-background-second-image");
    if (secondImageElement) {
      secondImageElement.style.opacity = String(window.scrollY / screenHeightThreeQatar);
    }

    const myNameElement = document.getElementById('nin-my-name')
    if (myNameElement) {
      myNameElement.style.paddingTop = (5 - window.scrollY / screenHeightQatar) + '%';
    }

    // const elementHTMLCollectionOf = document.getElementsByClassName('nin-scroll-content');

    const firstElement = document.getElementById('nin-first-content')
    if(firstElement) {
      if(window.scrollY > 1350){
        this.firstContentTrigger = 'out';
      } else {
        this.firstContentTrigger = 'in';
      }
    }

    console.log(this.firstContentTrigger)








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



// var secondElme = document.getElementById('nin-second-content')
// if (firstElme != null) {
//   var first = GetElementOffSet(firstElme)
//   console.log("First Element: [" + first + "] Scroll Value: [" + window.scrollY + "]")
// }
// if (secondElme != null) {
//   var second: number = GetElementOffSet(secondElme)
//   console.log("Second Element: " + second + "] Scroll Value: [" + window.scrollY + "]")
// }
//
//
// function GetElementOffSet(elem: HTMLElement) {
//
//   var distance = 0;
//
//   if (elem != null) {
//
//     do {
//       // Increase our distance counter
//       distance += elem.offsetTop;
//
//       // Set the element to it's parent
//       elem = <HTMLElement>elem.offsetParent;
//
//     } while (elem);
//     distance = distance < 0 ? 0 : distance;
//   }
//   return distance;
// }
