import './index.css';
import {
  formAdd,
  formEdit,
  formEditName,
  formEditStatus,
  profileEditButton,
  cardAddButton,
  formValidationSelectors,
  initialCards,
  cardTemplateSelector,
  profileNameSelector,
  profileStatusSelector,
  cardsContainerSelector,
  popupEditSelector,
  popupAddSelector,
  popupOpenSelector
} from '../scripts/utils/constants.js';
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';

// Переменные

const handleFormEditSubmit = ({ name, status }) => {
  userInfo.setUserInfo(name, status);
  popupEdit.close();
};

const addCardToFeed = ({ name, link }) => {
  const userCard = [{ name, link }];
  createCardElement(userCard).renderItems();
  popupAdd.close();
};

const setFormEditInputValue = ({ name, status }) => {
  formEditName.value = name;
  formEditStatus.value = status;
};

const userInfo = new UserInfo({ userName: profileNameSelector, userStatus: profileStatusSelector });
const popupEdit = new PopupWithForm(popupEditSelector, formEdit, handleFormEditSubmit);
const popupAdd = new PopupWithForm(popupAddSelector, formAdd, addCardToFeed);
const popupOpen = new PopupWithImage(popupOpenSelector);
const formEditValidator = new FormValidator(formValidationSelectors, formEdit);
const formAddValidator = new FormValidator(formValidationSelectors, formAdd);

// Функции

const createCardElement = (dataFeed) => {
  const cardsFeed = new Section({
    items: dataFeed, renderer: (item) => {
      const card = new Card(item, cardTemplateSelector, {
        handleCardClick: (name, link) => {
          popupOpen.open(name, link);
        }
      });
      const cardItem = card.renderCard();
      cardsFeed.addItem(cardItem);
    }
  }, cardsContainerSelector)
  return cardsFeed;
}

createCardElement(initialCards).renderItems();

formEditValidator.enableValidation();
formAddValidator.enableValidation();

// Обработчики

popupEdit.setEventListeners();
popupAdd.setEventListeners();
popupOpen.setEventListeners();

profileEditButton.addEventListener('click', () => {
  popupEdit.open();
  setFormEditInputValue(userInfo.getUserInfo());
  formEditValidator.formValidationConfig();
});

cardAddButton.addEventListener('click', () => {
  popupAdd.open();
  formAdd.reset();
  formAddValidator.formValidationConfig();
});