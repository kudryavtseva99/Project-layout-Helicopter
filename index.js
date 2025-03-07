"use strict";
// открываем и закрываем форму
// кладем элементы в переменные
const openFormButtons = document.querySelectorAll(".date__btn");
const bookButton = document.querySelector(".welcome__button");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".modal__close-btn");
// функция для показа формы
const showForm = (event) => {
    if (modal) {
        modal.classList.add("open");
        event.stopPropagation();
    }
};
// функция для скрытия формы
const hideForm = () => {
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
window.addEventListener("click", (event) => {
    if (modal &&
        event.target == modal &&
        modal.classList.contains("open") /* and clicked thing !== form */) {
        hideForm();
    }
});
// плеер ютуб: элементы
const youtubeWrapper = document.querySelector(".youtube__wrapper");
const youtubePlayer = document.querySelector(".youtube__player");
// видео с ютуба
const videoURL = "fb6KMJg_k5o";
// 1) скрываем картинку с кнопкой показа
//  2) устанавливаем плеер с видео и показываем его
const showYoutubeVideoMobile = () => {
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
const date = document.querySelector(".date");
const email = document.querySelector(".email");
const fisrtName = document.querySelector(".first__name");
const secondName = document.querySelector(".last__name");
const phoneNumber = document.querySelector(".phone");
const cardNumber = document.querySelector(".card__number");
const cardExpiryDate = document.querySelector(".expiry__date");
const cvv = document.querySelector(".cvv");
// чекбокс
const checkbox = document.querySelector(".real__checkbox");
// сабмит
const submitButton = document.querySelector(".modal__btn");
const formElement = document.querySelector(".model__content");
// массив с инпутами
const inputsArr = [
    date,
    email,
    fisrtName,
    secondName,
    phoneNumber,
    cardNumber,
    cardExpiryDate,
    cvv,
].filter((input) => input !== null);
// функция для проверки "заполнены ли все инпуты и нажат ли чекбокс"
const checkInputsAndCheckbox = (event) => {
    const formNode = event.currentTarget;
    if (formNode) {
        const isValid = formNode.checkValidity();
        const isActiveSubmit = isValid && checkbox instanceof HTMLInputElement && checkbox.checked;
        if (submitButton) {
            submitButton.disabled = !isActiveSubmit;
        }
    }
};
if (formElement instanceof HTMLFormElement) {
    formElement.addEventListener("input", checkInputsAndCheckbox);
}
// достаем инфу из инпутов
function serializeForm(formNode) {
    const data = new FormData(formNode);
    data.forEach((value, name) => {
        console.log([name, value]);
    });
    return data;
}
// функция для кнопки отправки формы при клике
function handleFormSubmit(event) {
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
const showBtn1 = document.querySelectorAll(".organizer__btn-hidden1");
const showBtn2 = document.querySelectorAll(".organizer__btn-hidden2");
const hiddenText1 = document.querySelectorAll(".organizer__desc-add1");
const hiddenText2 = document.querySelectorAll(".organizer__desc-add2");
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
// скрыть/показать для фотографий
const showPicsBtns = document.querySelectorAll(".gallery__btn-span");
const hiddenPics = document.querySelector(".photoshoot__gallery-wrapper-add");
showPicsBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const isHidden = hiddenPics &&
            hiddenPics.classList.contains("photoshoot__gallery-wrapper-add");
        if (hiddenPics) {
            hiddenPics.classList.toggle("photoshoot__gallery-wrapper-add");
        }
        const textNode = btn.firstChild;
        if (textNode && textNode.nodeType === 3) {
            textNode.textContent = isHidden ? "Скрыть" : "Показать все фото";
        }
    });
});
// реальное количество отзывов
function showReviews() {
    // Находим элемент <span> с классом 'reviews'
    const reviewsElement = document.querySelector(".reviews");
    if (reviewsElement) {
        // Получаем текущее количество отзывов из атрибута data-reviews
        const reviews = reviewsElement.getAttribute("data-reviews");
        // Если атрибут найден, обновляем текст в <span> с количеством отзывов
        if (reviews) {
            reviewsElement.textContent = `Показать Все (${reviews})`;
        }
    }
}
// Вызываем функцию сразу при загрузке страницы
window.addEventListener("load", showReviews);
