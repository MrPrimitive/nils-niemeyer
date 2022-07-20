import {Component} from "@angular/core";

@Component({
  selector: 'app-makoto-cursor',
  templateUrl: './makoto-cursor.component.html'
})
export class MakotoCursorComponent {
  constructor() {
  }

  ngOnInit() {
    this.cursorAnimation();
  }

  cursorAnimation() {
    const cursor = document.getElementById('cursor');
    const darkElements = document.querySelectorAll('.nin-dark-background');
    const buttonElements = document.querySelectorAll('.nin-button');
    const linkElements = document.querySelectorAll('.nin-link');

    if (cursor) {
      cursor.style.opacity = '1';
      darkElements.forEach(e => e.addEventListener('mouseenter', () => handleMouseEnter(cursor)));
      darkElements.forEach(e => e.addEventListener('mouseleave', () => handleMouseLeave(cursor)));

      buttonElements.forEach(e => e.addEventListener('mouseenter', () => handleMouseButtonEnter(cursor)))
      buttonElements.forEach(e => e.addEventListener('mouseleave', () => handleMouseButtonLeave(cursor)))

      linkElements.forEach(e => e.addEventListener('mouseenter', () => handleMouseButtonEnter(cursor)))
      linkElements.forEach(e => e.addEventListener('mouseleave', () => handleMouseButtonLeave(cursor)))

      window.addEventListener('mousemove', (e) => handleMouseMove(e, cursor));
      window.addEventListener('scroll', (e) => {
        handleMouseRemove(e, cursor)
      });
    }


    function handleMouseMove(event: MouseEvent, cursor: HTMLElement) {
      if (cursor) {
        cursor.style.opacity = '1';
        const top = event.pageY - (cursor.offsetHeight / 2);
        const left = event.pageX - (cursor.offsetWidth / 2);
        cursor.style.top = top + 'px';
        cursor.style.left = left + 'px';
      }
    }

    function handleMouseEnter(cursor: HTMLElement) {
      cursor.classList.add('nin-dark-background-cursor');

    }

    function handleMouseLeave(cursor: HTMLElement) {
      cursor.classList.remove('nin-dark-background-cursor');
    }

    function handleMouseButtonEnter(cursor: HTMLElement) {
      cursor.classList.add('hovered-button');
    }

    function handleMouseButtonLeave(cursor: HTMLElement) {
      cursor.classList.remove('hovered-button');
    }

    function handleMouseRemove(event: Event, cursor: HTMLElement) {
      cursor.style.opacity = '0';
    }
  }


}
