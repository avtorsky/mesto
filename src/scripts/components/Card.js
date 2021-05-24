export default class Card {
  constructor({ data, handleCardClick, handleCardLike, handleCardDelete }, cardTemplateSelector, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._ownerId = data.owner._id;
    this._userId = data.userId;
    this._cardId = data._id;
    this._handleCardClick = handleCardClick;
    this._handleCardLike = handleCardLike;
    this._handleCardDelete = handleCardDelete;
    this._cardTemplateSelector = cardTemplateSelector;
    this._cardSelector = cardSelector;
    this._isLiked = false;
  }

  _getCardTemplate() {
    const cardElement = document.querySelector(this._cardTemplateSelector).content.querySelector(this._cardSelector).cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => this._handleCardLike(this._id));
    this._deleteButton.addEventListener('click', () => this._handleCardDelete(this._id, this._element));
    this._cardPhoto.addEventListener('click', () => this._handleCardClick(this._name, this._link));
  }

  _setLikeButton() {
    this._likeButton.classList.add('element__like-btn_active');
  }

  _unsetLikeButton() {
    this._likeButton.classList.remove('element__like-btn_active');
  }

  setLikeContainer() {
    this._isLiked = this._likes.some(user => user._id === this._userId);
    this._likesCounter.textContent = this._likes.length;
    if (this._isLiked) {
      this._setLikeButton();
    } else {
      this._unsetLikeButton();
    }
  }

  isLiked() {
    return this._isLiked;
  }

  getCardId() {
    return this._cardId;
  }

  setLikes(likes) {
    this._likes = likes;
  }

  delete() {
    this._element.remove();
    this._element = null;
  }

  renderCard() {
    this._element = this._getCardTemplate();
    this._element.querySelector('.element__name').textContent = this._name;
    this._cardPhoto = this._element.querySelector('.element__photo');
    this._cardPhoto.src = this._link;
    this._cardPhoto.alt = `${this._name}`;
    this._likeButton = this._element.querySelector('.element__like-btn');
    this._deleteButton = this._element.querySelector('.element__delete-btn');
    this._deleteButton.classList.add(this._userId === this._ownerId ? 'element__delete-btn_active' : 'element__delete-btn');
    this._likesCounter = this._element.querySelector('.element__like-count');
    this._likesCounter.textContent = this._likes.length;

    this._setEventListeners();
    this.setLikeContainer();

    return this._element;
  }
}