export default class Card {
  constructor(data, cardSelector, ownerId, handleCardClick, handleDeleteIconClick, handleLikeClick) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._cardOwner = data.owner._id;
    this._cardId = data._id;
    this._cardSelector = cardSelector;
    this._ownerId = ownerId;
    this._openCardImage = handleCardClick;
    this._openPopupSubmit = handleDeleteIconClick;
    this._handleLikeClick = handleLikeClick;
    this._likesList = this._likes.map((item) => item._id);
  }

  _isOwner() {
    if (this._ownerId === this._cardOwner) {
      return true;
    } else {
      return false;
    }
  }

  _getCardTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
    if (this._isOwner()) {
      cardElement.querySelector('.element__delete-btn').classList.add('element__delete-btn_active');
    }
    return cardElement;
  }

  _setEventListeners() {
    this._element.querySelector('.element__like-btn').addEventListener('click', () => this._handleLikeClick(this._cardId));
    if (this._isOwner()) {
      this._element.querySelector('.element__delete-btn').addEventListener('click', () => this._openPopupSubmit(this._cardId, this._element));
    }
    this._cardPhoto.addEventListener('click', () => this._openCardImage(this._name, this._link));
  }

  getElement() {
    return this._element;
  }

  updateLikesList(obj) {
    this._likesList = obj.map((item) => item._id);
    return this._likesList;
  }

  isLiked() {
    for (let i = 0; i < this._likesList.length; i++) {
      if (this._likesList[i] === this._ownerId) {
        return true;
      }
    }
    return false;
  }

  setLikes() {
    if (this.isLiked()) {
      this._element.querySelector('.element__like-btn').classList.add('element__like-btn_active');
    } else {
      this._element.querySelector('.element__like-btn').classList.remove('element__like-btn_active');
    }
  }

  renderCard() {
    this._element = this._getCardTemplate();
    this._cardPhoto = this._element.querySelector('.element__photo');
    this._cardPhoto.src = this._link;
    this._element.querySelector('.element__name').textContent = this._name;
    this._cardPhoto.alt = `${this._name}`;
    this._element.querySelector('.element__like-count').textContent = this._likes.length;
    this._setEventListeners();
    this.setLikes();
    return this._element;
  }
}
