import Card from './Card.js';
import FormValidator from './FormValidator.js';

// Переменные

const popupElement = document.querySelector('.popup');

const popupEdit = document.querySelector('.popup-edit');
const popupEditCloseButton = popupEdit.querySelector('.popup-edit__close-btn');
const profileEditButton = document.querySelector('.profile__edit-btn');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const formEdit = popupEdit.querySelector('.form-edit');
const formEditName = popupEdit.querySelector('#profile-name');
const formEditStatus = popupEdit.querySelector('#profile-status');

const popupAdd = document.querySelector('.popup-add');
const popupAddCloseButton = popupAdd.querySelector('.popup-add__close-btn');
const cardAddButton = document.querySelector('.profile__add-btn');
const formAdd = popupAdd.querySelector('.form-add');
const formAddName = popupAdd.querySelector('#card-name');
const formAddLink = popupAdd.querySelector('#card-link');

const popupOpen = document.querySelector('.popup-open');
const popupOpenCloseButton = popupOpen.querySelector('.popup-open__close-btn');

const cards = document.querySelector('.elements');
const initialCards = [
  {
    name: 'Оружейка',
    link: 'https://raw.githubusercontent.com/avtorsky/mesto/master/images/element/__photo/katherine-gu-TPI1gm8gbJs-unsplash.jpg'
  },
  {
    name: 'В ожидании утра',
    link: 'https://raw.githubusercontent.com/avtorsky/mesto/master/images/element/__photo/alexey-turenkov-W8jQDQvk7Ek-unsplash.jpg'
  },
  {
    name: 'Ни в чём не виноваты',
    link: 'https://raw.githubusercontent.com/avtorsky/mesto/master/images/element/__photo/sasha-sashina-fAaUwTNZ1To-unsplash.jpg'
  },
  {
    name: 'За хлебом',
    link: 'https://raw.githubusercontent.com/avtorsky/mesto/master/images/element/__photo/mister-x-i6CzkChCIgQ-unsplash.jpg'
  },
  {
    name: 'На верхах',
    link: 'https://raw.githubusercontent.com/avtorsky/mesto/master/images/element/__photo/sasha-yudaev-3_ltGI8Zzi0-unsplash.jpg'
  },
  {
    name: 'Малибу',
    link: 'https://raw.githubusercontent.com/avtorsky/mesto/master/images/element/__photo/igor-starkov-gW9r6nXNlOo-unsplash.jpg'
  },
];

const formValidationSelectors = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__btn',
  inactiveButtonClass: 'form__btn_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
};
const formEditValidator = new FormValidator(formValidationSelectors, formEdit);
const formAddValidator = new FormValidator(formValidationSelectors, formAdd);

// Функции

const isPopupOverlay = (event) => {
  if (event.target === event.currentTarget) {
    return event.target.classList.remove('popup_active');
  }
};
const closePopupWithEsc = (event) => {
  if (event.key === 'Escape') {
    return event.target.classList.remove('popup_active');
  }
}

const popupViewable = (elem) => {
  elem.classList.add('popup_active');
  elem.addEventListener('mouseup', isPopupOverlay);
  elem.addEventListener('keydown', closePopupWithEsc);
};
const popupUnviewable = (elem) => {
  elem.classList.remove('popup_active');
  elem.removeEventListener('mouseup', isPopupOverlay);
  elem.removeEventListener('keydown', closePopupWithEsc);
};

const handleFormEditSubmit = (event) => {
  event.preventDefault();
  profileName.textContent = formEditName.value;
  profileStatus.textContent = formEditStatus.value;
  popupUnviewable(popupEdit);
};

const popupOpenButton = (object, name) => {
  popupViewable(popupOpen);
  const popupOpenImage = popupOpen.querySelector('.popup-open__image');
  popupOpenImage.src = object.target.src;
  popupOpenImage.alt = name;
  popupOpen.querySelector('.popup-open__figcaption').textContent = name;
};

const createCardElement = (elem) => new Card(elem, '.elements__template', popupOpenButton).renderCard();
const addCardToFeed = (elem) => {
  const cardItem = createCardElement(elem);
  cards.prepend(cardItem);
};
const createCardsFeed = (array) => {
  array.forEach((elem) => {
    formAdd.reset();
    addCardToFeed(elem);
  });
};
createCardsFeed(initialCards);

formEditValidator.enableValidation();
formAddValidator.enableValidation();

// Обработчики

popupEditCloseButton.addEventListener('click', () => {
  popupUnviewable(popupEdit);
});
profileEditButton.addEventListener('click', () => {
  popupViewable(popupEdit);
  formEditName.value = profileName.textContent;
  formEditStatus.value = profileStatus.textContent;
  formEditValidator.formValidationConfig();
});
formEdit.addEventListener('submit', handleFormEditSubmit);

cardAddButton.addEventListener('click', () => {
  popupViewable(popupAdd);
  formAddValidator.formValidationConfig();
});
popupAddCloseButton.addEventListener('click', () => {
  popupUnviewable(popupAdd);
});
formAdd.addEventListener('submit', (event) => {
  event.preventDefault();
  const nameInput = formAddName.value;
  const linkInput = formAddLink.value;
  createCardsFeed([{ name: nameInput, link: linkInput }]);
  popupUnviewable(popupAdd);
});

popupOpenCloseButton.addEventListener('click', () => {
  popupUnviewable(popupOpen);
});