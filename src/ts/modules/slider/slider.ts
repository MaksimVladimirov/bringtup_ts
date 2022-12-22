export class Slider {
  container: HTMLElement;
  slides: HTMLCollection;
  btns: any;
  prev: any;
  next: any;
  slideIndex: number;
  activeClass: string;
  animate: boolean;
  autoplay: boolean;
  constructor({
    container = "",
    btns = null,
    next = null,
    prev = null,
    activeClass = "",
    animate = false,
    autoplay = false,
  } = {}) {
    this.container = document.querySelector(container) as HTMLElement;
    this.slides = this.container.children;
    this.btns = document.querySelectorAll(btns);
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.activeClass = activeClass;
    this.animate = animate;
    this.autoplay = autoplay;
    this.slideIndex = 1;
  }
}
