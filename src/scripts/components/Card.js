export default class Card {
  constructor(elem, cardSelector, { handleCardClick, handleLikeClick, handleDeleteIconClick }, isOwner) {
    this._name = elem.name;
    this._link = elem.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._id = elem._id;
    this._likes = elem.likes;
    this._likesCount = this._likes.length;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteIconClick = handleDeleteIconClick;
    this._isOwner = isOwner;
  }

  _getCardTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
    if (this._isOwner) {
      cardElement.querySelector('.element__delete-btn').classList.add('element__delete-btn_active');
    }
    return cardElement;
  }

  _setCardEventListeners() {
    this._element.querySelector('.element__like-btn').addEventListener('click', () => {
      this._handleLikeClick(this._likes, this._id);
      this._toggleCardLikeButton();
    });
    if (this._isOwner) {
      this._element.querySelector('.element__delete-btn').addEventListener('click', () => this._handleDeleteIconClick(this._element, this._id));
    }
    this._cardPhoto.addEventListener('click', (event) => this._handleCardClick(this._name, this._link));
  }

  _toggleCardLikeButton() {
    this._element.querySelector('.element__like-btn').classList.toggle('element__like-btn_active');
  }

  renderCard(userId) {
    this._element = this._getCardTemplate();
    this._cardPhoto = this._element.querySelector('.element__photo');
    this._cardPhoto.src = this._link;
    this._element.querySelector('.element__name').textContent = this._name;
    this._cardPhoto.alt = `${this._name}`;
    if (this._likes.some(like => like._id === userId)) {
      this._toggleCardLikeButton();
    }
    this._likesCounterElement = this._element.querySelector('.element__like-count');
    this._likesCounterElement.textContent = this._likesCount;
    this._setCardEventListeners();
    return this._element;
  }

  updateLikesCount(likes) {
    this._likes = likes;
    this._likesCount = this._likes.length;
    this._likesCounterElement.textContent = this._likesCount;
  }
}