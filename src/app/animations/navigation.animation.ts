import {animate, AnimationTriggerMetadata, state, style, transition, trigger} from "@angular/animations";

export class NavigationAnimation {

  static ANIMATION_NAV_TURN_ARROW: AnimationTriggerMetadata = trigger('turnArrow', [
    state('up', style({
      transform: 'rotate(0deg)',
    })),
    state('down', style({
      transform: 'rotate(270deg)',
    })),
    transition('up => down', [
      animate('0.2s')
    ]),
    transition('down => up', [
      animate('0.2s')
    ]),
  ])

  static ANIMATION_NAV_EXPAND_MENU: AnimationTriggerMetadata =
    trigger('expandMenu', [
      state('in', style({
        visibility: 'hidden',
        height: '0px',
        opacity: 0,
      })),
      state('out', style({
        visibility: 'visible',
        height: '200px',
        opacity: 0.8,
      })),
      transition('in => out', [
        animate('0.5s')
      ]),
      transition('out => in', [
        animate('0.2s')
      ])
    ])

}
