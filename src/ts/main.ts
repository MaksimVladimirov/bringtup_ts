import { Slider } from "./modules";
import { VideoPlayer } from "./modules";

window.addEventListener("DOMContentLoaded", () => {
  const slider = new Slider(".page", ".next");
  slider.render();

  const player = new VideoPlayer(".showup .play", ".overlay");
  player.init();
});
