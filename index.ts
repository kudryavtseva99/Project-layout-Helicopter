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

// МОБИЛКА
// плеер ютуб: элементы
const youtubeWrapperMobile: HTMLElement | null = document.querySelector(
  ".youtube__wrapper-mobile"
);
const youtubePlayerMobile: HTMLIFrameElement | null = document.querySelector(
  ".youtube__player-mobile"
);

// видео с ютуба
const videoURL: string = "fb6KMJg_k5o";

// 1) скрываем картинку с кнопкой показа
//  2) устанавливаем плеер с видео и показываем его
const showYoutubeVideoMobile = (): void => {
  if (youtubeWrapperMobile) {
    youtubeWrapperMobile.style.display = "none";
  }

  if (youtubePlayerMobile) {
    youtubePlayerMobile.src = `https://www.youtube.com/embed/${videoURL}?autoplay=1`;
    youtubePlayerMobile.style.display = "block";
  }
};

if (youtubeWrapperMobile) {
  youtubeWrapperMobile.addEventListener("click", showYoutubeVideoMobile);
}

// ДЕКСТОП

const youtubeWrapperDeckstop: HTMLElement | null = document.querySelector(
  ".youtube__wrapper-deckstop"
);
const youtubePlayerDeckstop: HTMLIFrameElement | null = document.querySelector(
  ".youtube__player-deckstop"
);

const showYoutubeVideoDeckstop = (): void => {
  if (youtubeWrapperDeckstop) {
    youtubeWrapperDeckstop.style.display = "none";
  }

  if (youtubePlayerDeckstop) {
    youtubePlayerDeckstop.src = `https://www.youtube.com/embed/${videoURL}?autoplay=1`;
    youtubePlayerDeckstop.style.display = "block";
  }
};

if (youtubeWrapperDeckstop) {
  youtubeWrapperDeckstop.addEventListener("click", showYoutubeVideoDeckstop);
}
