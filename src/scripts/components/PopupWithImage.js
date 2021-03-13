import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(name, link) {
    super.open();
    this._popupCardImage = this._popup.querySelector('.popup-open__image');
    this._popupCardImage.src = link;
    this._popupCardImage.alt = `${name}`;
    this._popup.querySelector('.popup-open__figcaption').textContent = name;
  }
}