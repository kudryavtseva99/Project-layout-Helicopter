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
const checkInputsAndCheckbox = (event: Event): void => {
  const formNode = event.currentTarget as HTMLFormElement;

  if (formNode) {
    const isValid = formNode.checkValidity();
    const isActiveSubmit =
      isValid && checkbox instanceof HTMLInputElement && checkbox.checked;

    if (submitButton) {
      submitButton.disabled = !isActiveSubmit;
    }
  }
};

if (formElement instanceof HTMLFormElement) {
  formElement.addEventListener("input", checkInputsAndCheckbox);
}

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
    alert("Отправка!");
  }
}

// Обработчик клика по кнопке "Отправить"
if (formElement) {
  formElement.addEventListener("submit", handleFormSubmit);
}

// скрываем и показываем блоки "показать еще"

const showBtn1: NodeListOf<HTMLButtonElement> = document.querySelectorAll(
  ".organizer__btn-hidden1"
);

const showBtn2: NodeListOf<HTMLButtonElement> = document.querySelectorAll(
  ".organizer__btn-hidden2"
);

const hiddenText1: NodeListOf<HTMLElement> = document.querySelectorAll(
  ".organizer__desc-add1"
);

const hiddenText2: NodeListOf<HTMLElement> = document.querySelectorAll(
  ".organizer__desc-add2"
);

showBtn1.forEach((btn) => {
  // первая кнопка (декстоп и мобил)
  btn.addEventListener("click", () => {
    let isHidden = false;

    hiddenText1.forEach((element) => {
      if (element.classList.contains("organizer__desc-add1")) {
        isHidden = true;
      }
      element.classList.toggle("organizer__desc-add1"); // переключаем хиден
    });

    const textNode = btn.firstChild; // текст кнопки, без img
    if (textNode && textNode.nodeType === 3) {
      // проверяем текстовый узел
      textNode.textContent = isHidden ? "Скрыть" : "Читать еще";
    }
  });
});

showBtn2.forEach((btn) => {
  btn.addEventListener("click", () => {
    let isHidden = false;

    hiddenText2.forEach((element) => {
      if (element.classList.contains("organizer__desc-add2")) {
        isHidden = true;
      }
      element.classList.toggle("organizer__desc-add2");
    });

    const textNode = btn.firstChild;
    if (textNode && textNode.nodeType === 3) {
      textNode.textContent = isHidden ? "Скрыть" : "Читать еще";
    }
  });
});
