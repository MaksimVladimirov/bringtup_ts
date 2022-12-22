import { Slider } from "./slider";

export class MainSlider extends Slider {
  hanson: any;
  constructor({ container, btns }: { container: string; btns: any }) {
    super({ container, btns });
  }

  showSlides(n: number) {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }

    if (n < 1) {
      this.slideIndex = this.slides.length;
    }

    try {
      this.hanson.style.opacity = "0";

      if (n == 3) {
        this.hanson.classList.add("animated");
        setTimeout(() => {
          this.hanson.style.opacity = "1";
          this.hanson.classList.add("slideInUp");
        }, 3000);
      } else {
        this.hanson.classList.remove("slideInUp");
      }
    } catch (e) {}

    Array.from(this.slides).forEach((slide: any) => {
      slide.style.display = "none";
    });

    (this.slides[this.slideIndex - 1] as HTMLElement).style.display = "block";
  }

  plusSlides(n: number) {
    this.showSlides((this.slideIndex += n));
  }

  render() {
    try {
      this.hanson = document.querySelector(".hanson");
    } catch (e) {}

    Array.from(this.btns).forEach((item: any) => {
      item.addEventListener("click", () => {
        this.plusSlides(1);
      });

      item.parentNode.previousElementSibling.addEventListener(
        "click",
        (e: Event) => {
          e.preventDefault();
          this.slideIndex = 1;
          this.showSlides(this.slideIndex);
        }
      );
    });

    this.showSlides(this.slideIndex);
  }
}
