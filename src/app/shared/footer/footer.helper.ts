import {Router} from '@angular/router'
import {MatDialog} from '@angular/material/dialog'
import {MultiPlatformLinkLargeDialog, MultiPlatformLinkSmallDialog} from '@dialogs'
import {IMultiPlatformLinkData} from '@models'
import {ScreenSize} from "@constants";

export class FooterHelper {
  emailLinkData: IMultiPlatformLinkData = {
    platform: 'Mail @ Makoto Studio Entertainment',
    platformLogo: 'assets/icons/email_icon.svg',
    links: [
      {
        name: 'Nils Niemeyer',
        link: 'mailto:nils.niemeyer@makotostudio.ch'
      },
      {
        name: 'Makoto Studio Entertainment',
        link: 'mailto:info@makotostudio.ch'
      }
    ]
  }
  gitHubLinkData: IMultiPlatformLinkData = {
    platform: 'GitHub',
    platformLogo: 'assets/icons/github_logo.svg',
    links: [
      {
        name: 'MrPrimitive',
        link: 'https://github.com/MrPrimitive'
      },
      {
        name: 'Makoto Studio Entertainment',
        link: 'https://github.com/MakotoStudio-Entertainment'
      }
    ]
  }
  twitterLinkData: IMultiPlatformLinkData = {
    platform: 'Twitter',
    platformLogo: 'assets/icons/twitter_logo.svg',
    links: [
      {
        name: 'Makoto Studio Entertainment',
        link: 'https://twitter.com/MakotoStudioEnt'
      }
    ]
  }
  instagramLinkData: IMultiPlatformLinkData = {
    platform: 'Instagram',
    platformLogo: 'assets/icons/instagram_logo.svg',
    links: [
      {
        name: 'Makoto Studio Entertainment',
        link: 'https://www.instagram.com/makoto.studio/'
      }
    ]
  }
  linkedInLinkData: IMultiPlatformLinkData = {
    platform: 'LinkedIn',
    platformLogo: 'assets/icons/linkedin_logo.svg',
    links: [
      {
        name: 'Nils Niemeyer',
        link: 'https://www.linkedin.com/in/niemeyer-nils/'
      }
    ]
  }
  redditLinkData: IMultiPlatformLinkData = {
    platform: 'Reddit',
    platformLogo: 'assets/icons/reddit_logo.svg',
    links: [
      {
        name: 'Nils Niemeyer',
        link: 'https://www.reddit.com/user/MrPrimitive_MSE'
      },
      // {
      // 	name: 'Makoto Studio Entertainment',
      // 	link: 'https://www.reddit.com/user/MrPrimitive_MSE'
      // }
    ]
  }
  youtubeLinkData: IMultiPlatformLinkData = {
    platform: 'YouTube',
    platformLogo: 'assets/icons/youtuble_logo.svg',
    links: [
      {
        name: 'MrPrimitive',
        link: 'https://www.youtube.com/@mr.primitive1063/videos'
      },
      {
        name: 'Makoto Studio Entertainment',
        link: 'https://www.youtube.com/@MakotoStudioEntertainment/videos'
      }
    ]
  }

  screenSizeSmall: ScreenSize = ScreenSize.Small;
  screenSizeLarge: ScreenSize = ScreenSize.Large;

  constructor(private router: Router, public dialog: MatDialog) {
  }

  viewPage(url: string): void {
    this.router.navigate([url])
  }

  openMultiLink(multiPlatformLinkData: IMultiPlatformLinkData, screenSize: ScreenSize): void {
    switch (screenSize) {
      case ScreenSize.Small :
        this.dialog.open(MultiPlatformLinkSmallDialog, {
          data: multiPlatformLinkData,
          autoFocus: false
        })
        break;
      case ScreenSize.Large:
      case ScreenSize.Medium:
      default:
        this.dialog.open(MultiPlatformLinkLargeDialog, {
          data: multiPlatformLinkData,
          autoFocus: false
        })
        break;
    }
  }

  openLink(url: string): void {
    window.open(url, '_blank')
  }
}
