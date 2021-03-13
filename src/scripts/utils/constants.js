export const keyEscapeSelector = 'Escape';
export const popupEdit = document.querySelector('.popup-edit');
export const profileEditButton = document.querySelector('.profile__edit-btn');
export const formEdit = popupEdit.querySelector('.form-edit');
export const formEditName = popupEdit.querySelector('#profile-name');
export const formEditStatus = popupEdit.querySelector('#profile-status');
export const popupAdd = document.querySelector('.popup-add');
export const cardAddButton = document.querySelector('.profile__add-btn');
export const formAdd = popupAdd.querySelector('.form-add');
export const popupOpen = document.querySelector('.popup-open');

export const formValidationSelectors = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__btn',
  inactiveButtonClass: 'form__btn_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
};

export const cardsContainerSelector = '.elements';
export const cardTemplateSelector = '.elements__template';
export const profileNameSelector = '.profile__name';
export const profileStatusSelector = '.profile__status';
export const popupEditSelector = '.popup-edit';
export const popupAddSelector = '.popup-add';
export const popupOpenSelector = '.popup-open';

export const initialCards = [
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