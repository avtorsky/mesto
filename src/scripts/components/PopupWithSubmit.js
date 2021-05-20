import Popup from './Popup.js';

export default class PopupWithSubmit extends Popup {
  constructor(popupSelector, handleCardDelete) {
    super(popupSelector);
    this._handleCardDelete = handleCardDelete;
  }

  setSubmitListener(card, cardId) {
    super.setEventListeners();
    this._popup.querySelector('.form-delete__save-btn').addEventListener('submit', (event) => {
      event.preventDefault();
      this._handleCardDelete(card, cardId);
    })
  }
}