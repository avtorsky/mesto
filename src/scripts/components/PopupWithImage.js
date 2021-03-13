import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(event, name) {
    this._popup.classList.add('popup_active');
    document.addEventListener('keydown', (event) => super._handleEscClose(event));
    this._popup.querySelector('.popup-open__image').src = event.target.src;
    this._popup.querySelector('.popup-open__figcaption').textContent = name;
  }
}