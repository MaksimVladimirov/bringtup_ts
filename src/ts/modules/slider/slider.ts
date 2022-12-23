export class Slider {
  container: HTMLElement;
  slides: HTMLCollection;
  btns: NodeListOf<HTMLElement>  | null;
  prev: HTMLElement | null;
  next: HTMLElement | null;
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
    this.btns = btns ? document.querySelectorAll(btns) : null;
    this.next = next ? document.querySelector(next) : null;
    this.prev = prev ? document.querySelector(prev) : null;
    this.activeClass = activeClass;
    this.animate = animate;
    this.autoplay = autoplay;
    this.slideIndex = 1;
  }
}
