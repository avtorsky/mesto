export default class Card {
  constructor(elem, cardSelector, { handleCardClick }) {
    this._name = elem.name;
    this._link = elem.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getCardTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
    return cardElement;
  }

  _setCardEventListeners() {
    this._element.querySelector('.element__like-btn').addEventListener('click', (event) => this._toggleCardLikeButton(event));
    this._element.querySelector('.element__delete-btn').addEventListener('click', (event) => this._handleCardDeleteButton(event));
    this._cardPhoto.addEventListener('click', (event) => this._handleCardClick(event, this._name));
  }

  _toggleCardLikeButton(event) {
    event.target.classList.toggle('element__like-btn_active');
  }

  _handleCardDeleteButton(event) {
    event.target.parentElement.remove();
    this._element = null;
  }

  renderCard() {
    this._element = this._getCardTemplate();
    this._cardPhoto = this._element.querySelector('.element__photo');
    this._cardPhoto.src = this._link;
    this._element.querySelector('.element__name').textContent = this._name;
    this._cardPhoto.alt = `${this._name}`;
    this._setCardEventListeners();
    return this._element;
  }
}