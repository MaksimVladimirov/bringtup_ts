export class VideoPlayer {
  overlay: any;
  close: HTMLElement;
  btns: any;
  player: any;
  constructor(triggers: string, overlay: string) {
    this.btns = document.querySelectorAll<HTMLElement>(triggers);
    this.overlay = document.querySelector<HTMLElement>(overlay);
    this.close = this.overlay.querySelector(".close");
  }

  bindTriggers() {
    this.btns.forEach((btn: any) => {
      btn.addEventListener("click", () => {
        if (document.querySelector("iframe#frame")) {
          this.overlay.style.display = "flex";
        } else {
          const path = btn.getAttribute("data-url");

          this.createPlayer(path);
        }
      });
    });
  }

  bindCloseBtn() {
    this.close.addEventListener("click", () => {
      this.overlay.style.display = "none";
      this.player.stopVideo();
    });
  }

  createPlayer(url: string) {
    this.player = new YT.Player("frame", {
      height: "100%",
      width: "100%",
      videoId: `${url}`,
    });

    this.overlay.style.display = "flex";
  }

  init() {
    const tag = document.createElement("script");

    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag: any = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    this.bindTriggers();
    this.bindCloseBtn();
  }
}
