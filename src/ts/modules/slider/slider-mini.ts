import { Slider } from "./slider";
export class MiniSlider extends Slider {
  constructor({
    container,
    next,
    prev,
    activeClass,
    animate,
    autoplay,
  }: {
    container: string;
    next: any;
    prev: any;
    activeClass: string;
    animate?: boolean;
    autoplay?: boolean;
  }) {
    super({ container, next, prev, activeClass, animate, autoplay });
  }

  decorizaSlides() {
    Array.from(this.slides).forEach(slide => {
      slide.classList.remove(this.activeClass);
      if (this.animate) {
        (slide.querySelector(".card__title") as HTMLElement).style.opacity = '0.4';
        (slide.querySelector(".card__controls-arrow") as HTMLElement).style.opacity = '0';
      }
    });

    if (!this.slides[0].closest('button')) {
        this.slides[0].classList.add(this.activeClass);
    }
    
    if (this.animate) {
      (this.slides[0].querySelector(".card__title") as HTMLElement).style.opacity = '1';
      (this.slides[0].querySelector(".card__controls-arrow") as HTMLElement).style.opacity = '1';
    }
  }

  nextSlide() {
    if (this.slides[1].tagName == "BUTTON" && this.slides[2].tagName == "BUTTON" ) {
        this.container.appendChild(this.slides[0]); //Slide
        this.container.appendChild(this.slides[1]); //Button
        this.container.appendChild(this.slides[2]); //Button
        this.decorizaSlides();

    } else if (this.slides[1].tagName == "BUTTON") {
        this.container.appendChild(this.slides[0]); //Slide
        this.container.appendChild(this.slides[1]); //Button
        this.decorizaSlides();

    } else {
        this.container.appendChild(this.slides[0]);
        this.decorizaSlides();
    }
  }

  bindTriggers() {
    this.next?.addEventListener("click", () => this.nextSlide());

    this.prev?.addEventListener("click", () => {

      for (let i = this.slides.length -1; i > 0; i--) {
           if (this.slides[i].tagName !== "BUTTON") {
            const active = this.slides[i];
            this.container.insertBefore(active, this.slides[0]);
            this.decorizaSlides();
            break
           }
      }

      const active = this.slides[this.slides.length - 1];
      this.container.insertBefore(active, this.slides[0]);
      this.decorizaSlides();
    });
  }

  init() {
    this.container.style.cssText = `
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    align-items: flex-start;
    `;

    this.bindTriggers();
    this.decorizaSlides();

    if (this.autoplay) {
        setInterval(() => this.nextSlide(), 5000);
    }
  }
}
