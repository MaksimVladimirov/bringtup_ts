export class Slider {
    page:any;
    slides:any;
    slideIndex:number
    btns:any;
    constructor(page:string, btns:string){
        this.page = document.querySelector(page);
        this.slides = this.page.children;
        this.btns = document.querySelectorAll<HTMLElement>(btns);
        this.slideIndex = 1;
    }

    showSlides(n:number) {
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }

        if (n < 1) {
            this.slideIndex = this.slides.length;
        }

        this.slides.forEach((slide: HTMLElement ) => {
            slide.style.display = 'none';
        });

        this.slides[this.slideIndex - 1].style.display = 'block';
    }

    plusSlides(n:number) {
        this.showSlides(this.slideIndex += n);
    }

    render() {
        this.btns.forEach((item:any) => {
            item.addEventListener('click', () => {
                this.plusSlides(1);
            });

            item.parentNode.previousElementSibling.addEventListener('click', (e:Event) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        });

        this.showSlides(this.slideIndex);
    }
}