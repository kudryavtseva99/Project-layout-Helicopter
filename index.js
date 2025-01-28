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
