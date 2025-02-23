// открываем и закрываем форму
// кладем элементы в переменные
var openFormButtons = document.querySelectorAll(".date__btn");
var bookButton = document.querySelector(".welcome__button");
var modal = document.querySelector(".modal");
var closeButton = document.querySelector(".modal__close-btn");
// функция для показа формы
var showForm = function (event) {
    if (modal) {
        modal.classList.add("open");
        event.stopPropagation();
    }
};
// функция для скрытия формы
var hideForm = function () {
    if (modal) {
        modal.classList.remove("open");
    }
};
// обработчик для кнопок показать форму(их две), забронировать (кнопка) и скрыть форму(крестик или клик вне формы)
openFormButtons.forEach(function (button) {
    button.addEventListener("click", showForm);
});
if (bookButton) {
    bookButton.addEventListener("click", showForm);
}
if (closeButton) {
    closeButton.addEventListener("click", hideForm);
}
// клик вне формы
window.addEventListener("click", function (event) {
    if (modal &&
        event.target == modal &&
        modal.classList.contains("open") /* and clicked thing !== form */) {
        hideForm();
    }
});
// плеер ютуб: элементы
var youtubeWrapper = document.querySelector(".youtube__wrapper");
var youtubePlayer = document.querySelector(".youtube__player");
// видео с ютуба
var videoURL = "fb6KMJg_k5o";
// 1) скрываем картинку с кнопкой показа
//  2) устанавливаем плеер с видео и показываем его
var showYoutubeVideoMobile = function () {
    if (youtubeWrapper) {
        youtubeWrapper.style.display = "none";
    }
    if (youtubePlayer) {
        youtubePlayer.src = "https://www.youtube.com/embed/".concat(videoURL, "?autoplay=1");
        youtubePlayer.style.display = "block";
    }
};
if (youtubeWrapper) {
    youtubeWrapper.addEventListener("click", showYoutubeVideoMobile);
}
// обязательные инпуты
var date = document.querySelector(".date");
var email = document.querySelector(".email");
var fisrtName = document.querySelector(".first__name");
var secondName = document.querySelector(".last__name");
var phoneNumber = document.querySelector(".phone");
var cardNumber = document.querySelector(".card__number");
var cardExpiryDate = document.querySelector(".expiry__date");
var cvv = document.querySelector(".cvv");
// чекбокс
var checkbox = document.querySelector(".real__checkbox");
// сабмит
var submitButton = document.querySelector(".modal__btn");
var formElement = document.querySelector(".model__content");
// массив с инпутами
var inputsArr = [
    date,
    email,
    fisrtName,
    secondName,
    phoneNumber,
    cardNumber,
    cardExpiryDate,
    cvv,
].filter(function (input) { return input !== null; });
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
function serializeForm(formNode) {
    var data = new FormData(formNode);
    data.forEach(function (value, name) {
        console.log([name, value]);
    });
    return data;
}
function handleFormSubmit(event) {
    event.preventDefault();
    if (formElement instanceof HTMLFormElement) {
        serializeForm(formElement);
        console.log("Отправка!");
    }
}
if (formElement) {
    formElement.addEventListener("submit", handleFormSubmit);
}
// **Обработчик клика по кнопке "Отправить"**
