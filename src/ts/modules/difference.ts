export class Difference {
  oldOfficer: HTMLElement;
  newOfficer: HTMLElement;
  items?: string;
  oldItems: any;
  newItems: any;
  oldCounter: number;
  newCounter: number;

  constructor(oldOfficer: string, newOfficer: string, items: string) {
    this.oldOfficer = document.querySelector(oldOfficer) as HTMLElement;
    this.newOfficer = document.querySelector(newOfficer) as HTMLElement;
    this.oldItems = this.oldOfficer.querySelectorAll(items);
    this.newItems = this.newOfficer.querySelectorAll(items);
    this.oldCounter = 0;
    this.newCounter = 0;
  }

  bindTriggers(
    container: HTMLElement,
    items: NodeListOf<HTMLElement>,
    counter: any
  ) {
    container.querySelector(".plus")?.addEventListener("click", () => {
      if (counter !== items.length - 2) {
        items[counter].style.display = "flex";
        counter++;
      } else {
        items[counter].style.display = "flex";
        items[items.length - 1].remove();
      }
    });
  }

  hideItems(items: HTMLElement[]) {
    Array.from(items).forEach((items, i, arr) => {
      if (i !== arr.length - 1) {
        (items as HTMLElement).style.display = "none";
      }
    });
  }

  init() {
    this.hideItems(this.newItems);
    this.hideItems(this.oldItems);
    this.bindTriggers(this.oldOfficer, this.oldItems, this.oldCounter);
    this.bindTriggers(this.newOfficer, this.newItems, this.newCounter);
  }
}
