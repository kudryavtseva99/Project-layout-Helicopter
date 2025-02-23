// открываем и закрываем форму

// кладем элементы в переменные
const openFormButtons: NodeListOf<HTMLButtonElement> =
  document.querySelectorAll(".date__btn");
const bookButton: HTMLButtonElement | null =
  document.querySelector(".welcome__button");
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

// обработчик для кнопок показать форму(их две), забронировать (кнопка) и скрыть форму(крестик или клик вне формы)
openFormButtons.forEach((button) => {
  button.addEventListener("click", showForm);
});

if (bookButton) {
  bookButton.addEventListener("click", showForm);
}

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

// плеер ютуб: элементы
const youtubeWrapper: HTMLElement | null =
  document.querySelector(".youtube__wrapper");
const youtubePlayer: HTMLIFrameElement | null =
  document.querySelector(".youtube__player");

// видео с ютуба
const videoURL: string = "fb6KMJg_k5o";

// 1) скрываем картинку с кнопкой показа
//  2) устанавливаем плеер с видео и показываем его
const showYoutubeVideoMobile = (): void => {
  if (youtubeWrapper) {
    youtubeWrapper.style.display = "none";
  }

  if (youtubePlayer) {
    youtubePlayer.src = `https://www.youtube.com/embed/${videoURL}?autoplay=1`;
    youtubePlayer.style.display = "block";
  }
};

if (youtubeWrapper) {
  youtubeWrapper.addEventListener("click", showYoutubeVideoMobile);
}

// обязательные инпуты

const date: HTMLInputElement | null = document.querySelector(".date");
const email: HTMLInputElement | null = document.querySelector(".email");
const fisrtName: HTMLInputElement | null =
  document.querySelector(".first__name");
const secondName: HTMLInputElement | null =
  document.querySelector(".last__name");
const phoneNumber: HTMLInputElement | null = document.querySelector(".phone");
const cardNumber: HTMLInputElement | null =
  document.querySelector(".card__number");
const cardExpiryDate: HTMLInputElement | null =
  document.querySelector(".expiry__date");
const cvv: HTMLInputElement | null = document.querySelector(".cvv");

// чекбокс
const checkbox: HTMLElement | null = document.querySelector(".real__checkbox");

// сабмит
const submitButton: HTMLButtonElement | null =
  document.querySelector(".modal__btn");
const formElement: HTMLFormElement | null =
  document.querySelector(".model__content");
// массив с инпутами
const inputsArr: HTMLInputElement[] = [
  date,
  email,
  fisrtName,
  secondName,
  phoneNumber,
  cardNumber,
  cardExpiryDate,
  cvv,
].filter((input): input is HTMLInputElement => input !== null);

// функция для проверки "заполнены ли все инпуты и нажат ли чекбокс"
// const checkFieldsAndCheckbox = (): void => {
//   const allFieldsFilled = inputsArr.every((input) => input.value.trim() !== "");
//   const isCheckboxChecked =
//     checkbox instanceof HTMLInputElement && checkbox.checked;

//   // Если есть пустые поля, показываем сообщение и блокируем кнопку
//   if (submitButton && !allFieldsFilled && !isCheckboxChecked) {
//     submitButton.disabled = true;
//     inputsArr.forEach((input) => {
//       input.reportValidity(); // Показываем встроенное сообщение браузера
//     });
//   }

//   if (submitButton && allFieldsFilled && isCheckboxChecked) {
//     submitButton.disabled = false;
//   }
// };

// достаем инфу из инпутов
function serializeForm(formNode: HTMLFormElement): FormData {
  const data: FormData = new FormData(formNode);

  data.forEach((value, name) => {
    console.log([name, value]);
  });
  return data;
}

// функция для кнопки отправки формы при клике
function handleFormSubmit(event: Event) {
  event.preventDefault(); // прерываем самостоятельную отправку
  if (formElement instanceof HTMLFormElement) {
    serializeForm(formElement);
    console.log("Отправка!");
  }
}

// Обработчик клика по кнопке "Отправить"
if (formElement) {
  formElement.addEventListener("submit", handleFormSubmit);
}
