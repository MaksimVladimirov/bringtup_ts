import {
  MainSlider,
  Form,
  Difference,
  MiniSlider,
  VideoPlayer,
} from "./modules";

window.addEventListener("DOMContentLoaded", () => {
  const slider = new MainSlider({ container: ".page", btns: ".next" });
  slider.render();

  try {
    const modulePageSlider = new MainSlider({
      container: ".moduleapp",
      btns: ".next",
    });
    modulePageSlider.render();
  } catch (e) {}

  const showUpSlider = new MiniSlider({
    container: ".showup__content-slider",
    prev: ".showup__prev",
    next: ".showup__next",
    activeClass: "card-active",
    animate: true,
  });
  showUpSlider.init();

  const modulesSlider = new MiniSlider({
    container: ".modules__content-slider",
    prev: ".modules__info-btns .slick-prev",
    next: ".modules__info-btns .slick-next",
    activeClass: "card-active",
    animate: true,
    autoplay: true,
  });
  modulesSlider.init();

  const feedSlider = new MiniSlider({
    container: ".feed__slider",
    prev: ".feed__slider .slick-prev",
    next: ".feed__slider .slick-next",
    activeClass: "feed__item-active",
  });
  feedSlider.init();

  new VideoPlayer(".showup .play", ".overlay").init();
  new VideoPlayer(".module__video-item .play", ".overlay").init();
  new Difference(".officerold", ".officernew", ".officer__card-item").init();
  new Form(".form").init();
});
