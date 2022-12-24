export class VideoPlayer {
  overlay: HTMLElement;
  close: HTMLElement;
  btns: NodeListOf<HTMLElement>;
  player!: YT.Player;
  path: any;
  activeBtn: any;

  constructor(triggers: string, overlay: string) {
    this.btns = document.querySelectorAll(triggers);
    this.overlay = document.querySelector(overlay) as HTMLElement;
    this.close = this.overlay.querySelector(".close") as HTMLElement;
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
  }

  bindTriggers() {
    this.btns.forEach((btn: any, i: number) => {
      try {
        const blockedELem = btn.closest(
          ".module__video-item"
        ).nextElementSibling;

        if (i % 2 == 0) {
          blockedELem?.setAttribute("data-disabled", "true");
        }
      } catch (e) {}

      btn.addEventListener("click", () => {
        if (
          !btn.closest(".module__video-item") ||
          btn.closest(".module__video-item").getAttribute("data-disabled") !==
            "true"
        ) {
          this.activeBtn = btn;

          if (document.querySelector("iframe#frame")) {
            this.overlay.style.display = "flex";
            if (this.path !== btn.getAttribute("data-url")) {
              this.path = btn.getAttribute("data-url");
              this.player.loadVideoById({ videoId: this.path });
            }
          } else {
            this.path = btn.getAttribute("data-url");

            this.createPlayer(this.path);
          }
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
      events: {
        onStateChange: this.onPlayerStateChange,
      },
    });

    this.overlay.style.display = "flex";
  }

  onPlayerStateChange(state: any) {
    try {
      const blockedELem = this.activeBtn.closest(
        ".module__video-item"
      ).nextElementSibling;
      const playBtn = this.activeBtn.querySelector("svg").cloneNode(true);

      if ( state.data === 0 && blockedELem.querySelector(".play__circle").classList.contains("closed")) {
        blockedELem.querySelector(".play__circle").classList.remove("closed");
        blockedELem.querySelector("svg").remove();
        blockedELem.querySelector(".play__circle").appendChild(playBtn);
        blockedELem.querySelector(".play__text").textContent = "play video";
        blockedELem.querySelector(".play__text").classList.remove("attention");
        blockedELem.style.opacity = 1;
        blockedELem.style.filter = "none";
        blockedELem.setAttribute("data-disabled", "false");
      }
    } catch (e) {}
  }

  init() {
    if (this.btns.length > 0) {
      const tag = document.createElement("script");

      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag: any = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      this.bindTriggers();
      this.bindCloseBtn();
    }
  }
}
