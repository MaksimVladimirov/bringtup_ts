import { MainSlider } from "./modules";
import { VideoPlayer } from "./modules";

window.addEventListener("DOMContentLoaded", () => {
  const slider = new MainSlider({ btns: ".next", page: ".page" });
  slider.render();

  const player = new VideoPlayer(".showup .play", ".overlay");
  player.init();
});
