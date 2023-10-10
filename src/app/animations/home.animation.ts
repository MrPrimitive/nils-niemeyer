import {animate, AnimationTriggerMetadata, query, stagger, state, style, transition, trigger} from '@angular/animations'

export const ANIMATION_HOME_BOUNCING_ARROW: AnimationTriggerMetadata =
  trigger('boundingArrowInOut', [
    state('in',
      style({
        transform: 'translateY(15px) scale(1)',
        opacity: 0.3
      })),
    state('out',
      style({
        transform: 'translateY(0) scale(1.2)',
        opacity: 1
      })),
    transition('in => out', [
      animate('{{time}}')
    ]),
    transition('out => in', [
      animate('{{time}}')
    ])
  ])

export const ANIMATION_HOME_FADE_TEXT: AnimationTriggerMetadata =
  trigger('fadeTextInOut', [
    state('in',
      style({
        opacity: 0.3
      })),
    state('out',
      style({
        opacity: 1
      })),
    transition('in => out', [
      animate('{{time}}')
    ]),
    transition('out => in', [
      animate('{{time}}')
    ])
  ])

export const ANIMATION_HOME_SCROLL: AnimationTriggerMetadata =
  trigger('scroll', [
    transition('* => *', [
      query(':leave', [
        stagger(50, [
          animate('0.5s',
            style({
              transform: 'scale(0)'
            }))
        ])
      ], {optional: true}),
      query(':enter', [
        style({
          transform: 'scale(1)'
        }),
        stagger(50, [
          animate('0.1s',
            style({
              transform: 'scale(1)'
            }))
        ])
      ], {optional: true})
    ])
  ])


export const ANIMATION_HOME_NAME_HELLO_SCROLL: AnimationTriggerMetadata =
  trigger('scrollHomeNameHello', [
    transition('* => *', [
      query(':leave', [
        stagger(50, [
          animate('0.5s',
            style({
              transform: 'scale(0)'
            }))
        ])
      ], {optional: true}),
      query(':enter', [
        style({
          transform: 'scale(1)'
        }),
        stagger(50, [
          animate('0.1s',
            style({
              transform: 'scale(1)'
            }))
        ])
      ], {optional: true})
    ])
  ])

export const ANIMATION_HOME_NAME_NAME_SCROLL: AnimationTriggerMetadata =
  trigger('scrollHomeNameName', [
    transition('* => *', [
      query(':leave', [
        stagger(50, [
          animate('0.5s',
            style({
              transform: 'scale(0)'
            }))
        ])
      ], {optional: true}),
      query(':enter', [
        style({
          transform: 'scale(1)'
        }),
        stagger(50, [
          animate('0.1s',
            style({
              transform: 'scale(1)'
            }))
        ])
      ], {optional: true})
    ])
  ])
