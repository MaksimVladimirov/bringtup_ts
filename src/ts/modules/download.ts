export class Download {
  path;
  btns;
  constructor(triggers: string) {
    this.btns = document.querySelectorAll(triggers);
    this.path = "assets/img/mainbg.jpg";
  }

  downloadItem(path:string) {
    const element = document.createElement("a");

    element.setAttribute("href", path);
    element.setAttribute("download", "nice_picture");

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  init() {
    this.btns.forEach((item: any) => {
      item.addEventListener("click", () => {
        this.downloadItem(item.path);
      });
    });
  }
}
