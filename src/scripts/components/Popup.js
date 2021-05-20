import { keyEscapeSelector } from '../utils/constants.js';

export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add('popup_active');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_active');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(event) {
    if (event.key === keyEscapeSelector) {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener('click', (elem) => {
      if ((elem.target.classList.contains('popup_active')) || (elem.target.classList.contains('popup-edit__close-btn')) || (elem.target.classList.contains('popup-avatar-edit__close-btn')) || (elem.target.classList.contains('popup-add__close-btn')) || (elem.target.classList.contains('popup-delete__close-btn')) || (elem.target.classList.contains('popup-open__close-btn'))) {
        this.close();
      }
    });
  }
}