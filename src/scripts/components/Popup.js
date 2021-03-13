import { keyEscapeSelector, popupEdit, popupAdd, popupOpen } from '../utils/constants.js';

export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  open() {
    this._popup.classList.add('popup_active');
    document.addEventListener('keydown', (event) => this._handleEscClose(event));
  }

  close() {
    this._popup.classList.remove('popup_active');
    document.removeEventListener('keydown', (event) => this._handleEscClose(event));
  }

  _handleEscClose(event) {
    if (event.key === keyEscapeSelector) {
      this.close();
    }
  }

  setEventListeners() {
    popupEdit.addEventListener('click', (elem) => {
      if ((elem.target.classList.contains('popup_active')) || (elem.target.classList.contains('popup-edit__close-btn'))) {
        this.close();
      }
    });

    popupAdd.addEventListener('click', (elem) => {
      if ((elem.target.classList.contains('popup_active')) || (elem.target.classList.contains('popup-add__close-btn'))) {
        this.close();
      }
    });

    popupOpen.addEventListener('click', (elem) => {
      if ((elem.target.classList.contains('popup_active')) || (elem.target.classList.contains('popup-open__close-btn'))) {
        this.close();
      }
    });
  }
}
