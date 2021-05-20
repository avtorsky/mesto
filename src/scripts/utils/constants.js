export const keyEscapeSelector = 'Escape';
export const popupEdit = document.querySelector('.popup-edit');
export const profileEditButton = document.querySelector('.profile__edit-btn');
export const formEdit = popupEdit.querySelector('.form-edit');
export const formEditName = popupEdit.querySelector('#profile-name');
export const formEditStatus = popupEdit.querySelector('#profile-status');
export const formEditSubmitButton = popupEdit.querySelector('.form-edit__save-btn');
export const popupAdd = document.querySelector('.popup-add');
export const cardAddButton = document.querySelector('.profile__add-btn');
export const formAdd = popupAdd.querySelector('.form-add');
export const formAddCardName = formAdd.querySelector('#card-name');
export const formAddCardLink = formAdd.querySelector('#card-link');
export const formAddCardSubmitButton = popupAdd.querySelector('.form-add__save-btn');
export const popupOpen = document.querySelector('.popup-open');
export const formEditAvatar = document.querySelector('.form-avatar-edit');
export const avatarEditButton = document.querySelector('.profile__avatar-edit-btn');
export const formEditAvatarSubmitButton = document.querySelector('.form-avatar-edit__save-btn');
export const formDelete = document.querySelector('.form-delete');
export const formDeleteSubmitButton = formDelete.querySelector('.form-delete__save-btn')

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
export const profileAvatarSelector = '.profile__avatar';
export const popupEditAvatarSelector = '.popup-avatar-edit';
export const popupDeleteSelector = '.popup-delete';

export const apiAuthorizationConfig = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-21',
  headers: {
    authorization: '0771498a-40b6-4e5b-8924-7ee0f33d1842',
    'Content-Type': 'application/json'
  }
};