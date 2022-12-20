export class VideoPlayer {
  overlay: HTMLElement;
  close: HTMLElement;
  btns: NodeListOf<HTMLElement>;
  player: any;
  constructor(triggers: string, overlay: string) {
    this.btns = document.querySelectorAll(triggers) ;
    this.overlay = document.querySelector(overlay) as HTMLElement;
    this.close = this.overlay.querySelector(".close") as HTMLElement;
  }

  bindTriggers() {
    this.btns.forEach((btn: HTMLElement) => {
      btn.addEventListener("click", () => {
        if (document.querySelector("iframe#frame")) {
          this.overlay.style.display = "flex";
        } else {
          const path: any = btn.getAttribute("data-url");

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
    const firstScriptTag:any = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    this.bindTriggers();
    this.bindCloseBtn();
  }
}
