// открываем и закрываем форму

// кладем элементы в переменные
const openFormButtons: NodeListOf<HTMLButtonElement> =
  document.querySelectorAll(".date__btn");
const modal: HTMLDivElement | null = document.querySelector(".modal");
const closeButton: HTMLButtonElement | null =
  document.querySelector(".modal__close-btn");

// функция для показа формы
const showForm = (event: MouseEvent): void => {
  if (modal) {
    modal.classList.add("open");
    event.stopPropagation();
  }
};

// функция для скрытия формы
const hideForm = (): void => {
  if (modal) {
    modal.classList.remove("open");
  }
};

// обработчик для кнопок показать форму(их две) и скрыть форму(крестик или клик вне формы)
openFormButtons.forEach((button) => {
  button.addEventListener("click", showForm);
});

if (closeButton) {
  closeButton.addEventListener("click", hideForm);
}

// клик вне формы
window.addEventListener("click", (event: MouseEvent) => {
  if (
    modal &&
    event.target == modal &&
    modal.classList.contains("open") /* and clicked thing !== form */
  ) {
    hideForm();
  }
});
