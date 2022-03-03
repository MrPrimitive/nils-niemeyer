import {Component, OnInit} from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.scrollFunction();
    // (function ($) {
    //   $(window).scroll(function () {
    //     $(".titelText").css("opacity", 1 - $(window).scrollTop() / 1050);
    //     $(".scrollIcon").css("opacity", 1 - $(window).scrollTop() / 250);
    //     $(".yesThatsMe").css("opacity", 0 + $(window).scrollTop() / 850);
    //   });
    //
    //   $(document).ready(function () {
    //     $('.indexMyName').hide().fadeIn(3000);
    //     $('.scrollIcon').hide().fadeIn(3000);
    //   });
    //
    //   $(document).ready(function () {
    //     $(window).scroll(function () {
    //       $('.content').each(function (i) {
    //         var bottom_of_object = $(this).position().top + $(this).outerHeight();
    //         var bottom_of_window = $(window).scrollTop() + $(window).height();
    //
    //         if (bottom_of_window > bottom_of_object) {
    //           $(this).animate({'opacity': '1'}, 2000);
    //         }
    //       });
    //     });
    //   });
    // })(jQuery);
  }

  scrollFunction(): void {
    // window.scroll((jQuery: any) => {
    //   $(".titelText").css("opacity", 1 - $(window).scrollTop() / 1050);
    //   $(".scrollIcon").css("opacity", 1 - $(window).scrollTop() / 250);
    //   $(".yesThatsMe").css("opacity", 0 + $(window).scrollTop() / 850);
    // });
  }

}
