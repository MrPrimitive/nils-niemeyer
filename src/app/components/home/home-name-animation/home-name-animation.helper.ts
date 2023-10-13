export class HomeNameAnimationHelper {
  public bouncingArrowState: boolean = true
  public animationTime: string = '1s'
  public animationState: string = 'out'
  public scrollHint: boolean = true
  public scrollHomeNameHello: boolean = true

  Init(): void {
    this.scrollHint = true
    this.scrollHomeNameHello = true;
    this.bouncingArrow()
    setInterval((): void => {
      this.bouncingArrow()
    }, 1000)
  }

  bouncingArrow(): void {
    this.bouncingArrowState = !this.bouncingArrowState
    this.animationState = this.bouncingArrowState ? 'out' : 'in'
  }

  scrollEvent(event: any): void {
    const screenHeight: number = window.screen.height;
    const halfScreenHeight: number = screenHeight / 2
    const quadScreenHeight: number = halfScreenHeight / 2
    const screenHeightTimesFive: number = screenHeight * 5;

    const mseHomeNameMyNameAnimationElement: HTMLElement | null = document.getElementById('mse-home-name-my-name-animation')
    if (mseHomeNameMyNameAnimationElement) {
      const paddingTop: string = (40 - ((window.scrollY / halfScreenHeight) * 20)) + 'px';
      mseHomeNameMyNameAnimationElement.style.paddingTop = paddingTop;
    }

    const mseHomeNameTitleAnimationElement: HTMLElement | null = document.getElementById('mse-home-name-title-text-animation')
    if (mseHomeNameTitleAnimationElement) {
      mseHomeNameTitleAnimationElement.style.opacity = String(1 - window.scrollY / quadScreenHeight);
    }

    const mseHomeAnimationElement: HTMLElement | null = document.getElementById('mse-home-name-animation')
    if (mseHomeAnimationElement) {
      mseHomeAnimationElement.style.opacity = String(1 - window.scrollY / halfScreenHeight);
      mseHomeAnimationElement.style.scale = String(1 - window.scrollY / screenHeightTimesFive);
    }
  }
}
