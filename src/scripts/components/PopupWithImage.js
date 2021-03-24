import Popup from './Popup.js';

export default class extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupCardImage = this._popup.querySelector('.popup-open__image');
    this._popupCardCaption = this._popup.querySelector('.popup-open__figcaption');
  }

  open(name, link) {
    super.open();
    this._popupCardImage.src = link;
    this._popupCardImage.alt = `${name}`;
    this._popupCardCaption.textContent = name;
  }
}