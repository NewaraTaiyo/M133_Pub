export class ToDo extends EventTarget{
  #title = "";
  #done = "";

  constructor(title, done) {
    super();
    this.#title = title;
    this.#done = done;
  }

  get getTitle() {
    return this.#title;
  }

  set getTitle(title) {
    this.#title = title;
  }

  get getDone() {
    return this.#done;
  }

  set setDone(done) {
    this.#done = done;
  }

  element() {
    const listElement = document.createElement("li");
    const divElement = document.createElement("div");
    const checkboxElement = document.createElement("input");
    const spanElement = document.createElement("span");
    const buttonElement = document.createElement("button");

    listElement.appendChild(divElement);

    divElement.appendChild(checkboxElement);
    divElement.appendChild(spanElement);
    divElement.appendChild(buttonElement);

    checkboxElement.setAttribute("type", "checkbox");

    buttonElement.className = "loeschen";

    spanElement.innerText = this.#title;
    buttonElement.innerText = "Löschen";

    if (this.#done) {
      checkboxElement.setAttribute("checked", "checked");
      divElement.className = "erledigt";
    }

    buttonElement.addEventListener('click', () => {
      this.dispatchEvent(new Event('loeschen'));
    });

    checkboxElement.addEventListener('click', () => {
      this.setDone = checkboxElement.checked;
    });
    return listElement;
  }
}
