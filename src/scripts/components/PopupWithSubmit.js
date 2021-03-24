import Popup from './Popup.js';

export default class PopupWithSubmit extends Popup {
  constructor(popupSelector, handleCardDelete) {
    super(popupSelector);
    this._handleCardDelete = handleCardDelete;
  }

  setSubmitListener(card, cardId) {
    const formDelete = this._popup.querySelector('.form-delete');
    formDelete.addEventListener('submit', () => this._handleCardDelete(card, cardId));
  }
}