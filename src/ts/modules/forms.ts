export class Form {
  forms: NodeListOf<Element>;
  message;
  path;
  inputs;
  constructor(forms: string) {
    this.forms = document.querySelectorAll(forms);
    this.inputs = document.querySelectorAll("input");
    this.message = {
      loading: "Загрузка...",
      success: "Спасибо! Скоро мы с вами свяжемся!",
      failure: "Что-то пошло не так...",
    };
    this.path = "assets/question.php";
  }

  clearInputs() {
    this.inputs.forEach((item) => {item.value = ""});
  }

  checkMailInput() {
    const mailInputs = document.querySelectorAll('[type="email"]');

    mailInputs.forEach((input) => {
      input.addEventListener("keypress", function (e: any) {
        if (e.key.match(/[^a-z 0-9 @ \.]/gi)) {
          e.preventDefault();
        }
      });
    });
  }

  async postData(url: string, data: string) {
    const res = await fetch(url, {
      method: "POST",
      body: data,
    });

    return await res.text();
  }

  init() {
    this.checkMailInput();

    Array.from(this.forms).forEach((item: any) => {
      item.addEventListener("submit", (e: Event) => {
        e.preventDefault();

        const statusMessage = document.createElement("div");
        statusMessage.style.cssText = `
        margin-top: 15px;
        font-size: 18px;
        color: grey;
        `;
        item.parentNode.appendChild(statusMessage);

        statusMessage.textContent = this.message.loading;

        const formData: any = new FormData(item);

        this.postData(this.path, formData)
          .then((res) => {
            console.log(res);
            statusMessage.textContent = this.message.success;
          })
          .catch(() => {
            statusMessage.textContent = this.message.failure;
          })
          .finally(() => {
            this.clearInputs();
            setTimeout(() => {
              statusMessage.remove();
            }, 6000);
          });
      });
    });
  }
}
