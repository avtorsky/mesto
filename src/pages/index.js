import './index.css';
import {
  formAdd,
  formAddCardSubmitButton,
  formDelete,
  formDeleteSubmitButton,
  formEdit,
  formEditName,
  formEditStatus,
  formEditSubmitButton,
  formEditAvatar,
  avatarEditButton,
  formEditAvatarSubmitButton,
  profileEditButton,
  cardAddButton,
  formValidationSelectors,
  apiAuthorizationConfig,
  cardTemplateSelector,
  profileNameSelector,
  profileStatusSelector,
  cardsContainerSelector,
  popupEditSelector,
  popupAddSelector,
  popupOpenSelector,
  profileAvatarSelector,
  popupEditAvatarSelector,
  popupDeleteSelector
} from '../scripts/utils/constants.js';
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWithSubmit from '../scripts/components/PopupWithSubmit.js'
import Api from '../scripts/components/Api.js';

const api = new Api(apiAuthorizationConfig);

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(res => {
    const userInfo = res[0];

    const user = new UserInfo({ userName: profileNameSelector, userStatus: profileStatusSelector, userAvatar: profileAvatarSelector, userId: userInfo._id });

    user.setUserInfo(userInfo.name, userInfo.about);
    user.setUserAvatar(userInfo.avatar);

    const userId = user.getUserId();

    const isLoading = (preLoader, buttonElement, buttonText) => {
      if (buttonElement) {
        preLoader ? buttonElement.textContent = 'Сохранение...' : buttonElement.textContent = buttonText;
      }
    };

    const handleFormEditSubmit = ({ name, status }) => {
      isLoading(true, formEditSubmitButton);
      api.setUserInfo(name, status)
        .then(res => {
          user.setUserInfo(res.name, res.about);
        })
        .catch(err => console.error(err))
        .finally(() => {
          isLoading(false, formEditSubmitButton, 'Сохранить');
          popupEdit.close();
        });
    };

    const setFormEditInputValue = ({ name, status }) => {
      formEditName.value = name;
      formEditStatus.value = status;
    };

    const handleFormEditAvatarSubmit = (inputValues) => {
      isLoading(true, formEditAvatarSubmitButton);
      api.setUserAvatar(inputValues.link)
        .then(res => {
          user.setUserAvatar(res.avatar);
        })
        .catch(err => console.error(err))
        .finally(() => {
          isLoading(false, formEditAvatarSubmitButton, 'Сохранить');
          popupEditAvatar.close();
        });
    };

    const handleCardClick = (name, link) => {
      popupOpen.open(name, link);
    };

    const createCardElement = (cardData, cardTemplateSelector, deleteIconSelector, isOwner) => {
      const card = new Card(cardData, cardTemplateSelector, {
        handleCardClick: handleCardClick,
        handleLikeClick: (likes, cardId) => {
          if (likes.some(like => like._id === userId)) {
            api.deleteLike(cardId)
              .then(res => card.updateLikesCount(res.likes))
              .catch(err => console.error(err));
          } else {
            api.addLike(cardId)
              .then(res => card.updateLikesCount(res.likes))
              .catch(err => console.error(err));
          }
        },
        handleDeleteIconClick: deleteIconSelector
      }, isOwner);
      const cardElement = card.renderCard(userId);
      return cardElement;
    };

    const createCardElementWithValidation = (cardData) => {
      if (cardData.owner._id === userId) {
        return createCardElement(cardData, cardTemplateSelector,
          function handleDeleteIconClick(card, cardId) {
            popupDelete.open();
            popupDelete.setSubmitListener(card, cardId);
          }, true);
      } else {
        return createCardElement(cardData, cardTemplateSelector, null, false);
      }
    };

    const items = res[1];

    const cardsFeed = new Section({
      items: items.reverse(),
      renderer: (item) => {
        const cardItem = createCardElementWithValidation(item);
        cardsFeed.addItem(cardItem);
      }
    }, cardsContainerSelector);

    cardsFeed.renderItems();

    const addCardToFeed = ({ name, link }) => {
      isLoading(true, formAddCardSubmitButton);
      api.addCard(name, link)
        .then(info => {
          const card = createCardElementWithValidation(info);
          cardsFeed.addItem(card);
        })
        .catch(err => console.log(err))
        .finally(() => {
          isLoading(false, formAddCardSubmitButton, 'Сохранить');
          popupAdd.close();
        });
    };

    const deleteCardFromFeed = (card, cardId) => {
      isLoading(true, formDeleteSubmitButton);
      api.deleteCard(cardId)
        .then(res => {
          card.remove();
        })
        .catch(err => console.log(err))
        .finally(() => {
          isLoading(false, formDeleteSubmitButton, 'Да');
          popupDelete.close();
        });
    };

    const popupEdit = new PopupWithForm(popupEditSelector, formEdit, handleFormEditSubmit);
    popupEdit.setEventListeners();

    const popupEditAvatar = new PopupWithForm(popupEditAvatarSelector, formEditAvatar, handleFormEditAvatarSubmit);
    popupEditAvatar.setEventListeners();

    const popupAdd = new PopupWithForm(popupAddSelector, formAdd, addCardToFeed);
    popupAdd.setEventListeners();

    const popupDelete = new PopupWithSubmit(popupDeleteSelector, deleteCardFromFeed);
    popupDelete.setEventListeners();

    const popupOpen = new PopupWithImage(popupOpenSelector);
    popupOpen.setEventListeners();

    profileEditButton.addEventListener('click', () => {
      popupEdit.open();
      setFormEditInputValue(user.getUserInfo());
      formEditValidator.formValidationConfig();
    });

    avatarEditButton.addEventListener('click', () => {
      popupEditAvatar.open();
      formEditAvatarValidator.formValidationConfig();
    });

    cardAddButton.addEventListener('click', () => {
      popupAdd.open();
      formAdd.reset();
      formAddValidator.formValidationConfig();
    });

    const formEditValidator = new FormValidator(formValidationSelectors, formEdit);
    formEditValidator.enableValidation();

    const formEditAvatarValidator = new FormValidator(formValidationSelectors, formEditAvatar);
    formEditAvatarValidator.enableValidation();

    const formAddValidator = new FormValidator(formValidationSelectors, formAdd);
    formAddValidator.enableValidation();

    const formDeleteValidator = new FormValidator(formValidationSelectors, formDelete);
    formDeleteValidator.enableValidation();

  });