// открываем и закрываем форму
// кладем элементы в переменные
var openFormButtons = document.querySelectorAll(".date__btn");
var form = document.querySelector(".modal");
var closeButton = document.querySelector(".modal__close-btn");
// функция для показа формы
var showForm = function (event) {
    if (form) {
        form.classList.add("open");
        event.stopPropagation();
    }
};
// функция для скрытия формы
var hideForm = function () {
    if (form) {
        form.classList.remove("open");
    }
};
// обработчик для кнопок показать форму(их две) и скрыть форму(крестик или клик вне формы)
openFormButtons.forEach(function (button) {
    button.addEventListener("click", showForm);
});
if (closeButton) {
    closeButton.addEventListener("click", hideForm);
}
// клик вне формы
window.addEventListener("click", function (event) {
    if (form &&
        event.target == form &&
        form.classList.contains("open") /* and clicked thing !== form */) {
        hideForm();
    }
});
