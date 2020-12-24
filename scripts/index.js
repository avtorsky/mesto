// Объявление констант кнопок управления формой редактирования профиля

const popupLayer = document.querySelector('.popup');
const popupCloseButton = popupLayer.querySelector('.form__close-btn');
const profileEditButton = document.querySelector('.profile__btn_edit');

// Объявление переменных профиля

let profileName = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__status');

// Объявление переменных инпутов и константы формы

const form = popupLayer.querySelector('.form');
let formName = popupLayer.querySelector('.form__input_name');
let formStatus = popupLayer.querySelector('.form__input_status');

// Функция предзаполнения инпутов значениями переменных профиля

function populateInput() {
  formName.value = profileName.textContent;
  formStatus.value = profileStatus.textContent;
}

// Функции вызова|закрытия формы и обработка событий

function openPopup() {
  popupLayer.classList.add('popup_active');
  populateInput();
}

function closePopup() {
  popupLayer.classList.remove('popup_active');
}

profileEditButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
popupLayer.addEventListener('click', (event) => {
  if (event.target === event.currentTarget) {
    closePopup();
  }
});

// Сохранение значений инпутов формы в переменные профиля

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = formName.value;
  profileStatus.textContent = formStatus.value;
  closePopup();
}

form.addEventListener('submit', handleFormSubmit);