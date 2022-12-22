export class Slider {
  container: HTMLElement;
  slides: HTMLCollection;
  btns: NodeListOf<HTMLElement>;
  prev: HTMLElement;
  next: HTMLElement;
  slideIndex: number;
  activeClass: string;
  animate: boolean;
  autoplay: boolean;
  constructor({
    container = "",
    btns = "",
    next = "",
    prev = "",
    activeClass = "",
    animate = false,
    autoplay = false,
  } = {}) {
    this.container = document.querySelector(container) as HTMLElement;
    this.slides = this.container.children;
    this.btns = document.querySelectorAll(btns);
    this.next = document.querySelector(next) as HTMLElement;
    this.prev = document.querySelector(prev) as HTMLElement;
    this.activeClass = activeClass;
    this.animate = animate;
    this.autoplay = autoplay;
    this.slideIndex = 1;
  }
}
