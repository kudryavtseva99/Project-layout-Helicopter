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
// МОБИЛКА
// плеер ютуб: элементы
var youtubeWrapperMobile = document.querySelector(".youtube__wrapper-mobile");
var youtubePlayerMobile = document.querySelector(".youtube__player-mobile");
// видео с ютуба
var videoURL = "fb6KMJg_k5o";
// 1) скрываем картинку с кнопкой показа
//  2) устанавливаем плеер с видео и показываем его
var showYoutubeVideoMobile = function () {
    if (youtubeWrapperMobile) {
        youtubeWrapperMobile.style.display = "none";
    }
    if (youtubePlayerMobile) {
        youtubePlayerMobile.src = "https://www.youtube.com/embed/".concat(videoURL, "?autoplay=1");
        youtubePlayerMobile.style.display = "block";
    }
};
if (youtubeWrapperMobile) {
    youtubeWrapperMobile.addEventListener("click", showYoutubeVideoMobile);
}
// ДЕКСТОП
var youtubeWrapperDeckstop = document.querySelector(".youtube__wrapper-deckstop");
var youtubePlayerDeckstop = document.querySelector(".youtube__player-deckstop");
var showYoutubeVideoDeckstop = function () {
    if (youtubeWrapperDeckstop) {
        youtubeWrapperDeckstop.style.display = "none";
    }
    if (youtubePlayerDeckstop) {
        youtubePlayerDeckstop.src = "https://www.youtube.com/embed/".concat(videoURL, "?autoplay=1");
        youtubePlayerDeckstop.style.display = "block";
    }
};
if (youtubeWrapperDeckstop) {
    youtubeWrapperDeckstop.addEventListener("click", showYoutubeVideoDeckstop);
}
