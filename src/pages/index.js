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
const user = new UserInfo({ userName: profileNameSelector, userStatus: profileStatusSelector, userAvatar: profileAvatarSelector })
const userId = user.setUserId();
const preLoader = (elem, buttonElement, buttonText) => {
  if (buttonElement) {
    elem ? buttonElement.textContent = 'Сохранение...' : buttonElement.textContent = buttonText
  }
};

const getCardsPromise = new Promise((resolve, reject) => {
  api.getInitialCards()
    .then((result) => {
      const cardsFeed = new Section({
        items: result.reverse(),
        renderer: (item) => {
          cardsFeed.addItem(createCard(item));
        }
      }, cardsContainerSelector);
      cardsFeed.renderItems();
      resolve('ok');
    })
    .catch((err) => {
      console.log(err);
      reject('error');
    });
});

const getUserInfoPromise = new Promise((resolve, reject) => {
  api.getUserInfo()
    .then((result) => {
      user.setUserInfo(result.name, result.about);
      user.setUserAvatar(result.avatar);
      user.id = result._id;
      resolve('ok');
    })
    .catch((err) => {
      console.log(err);
      reject('error');
    });
});

const promises = [getCardsPromise, getUserInfoPromise];
Promise.all(promises)


function createCard(data) {
  const card = new Card(data, cardTemplateSelector, userId, handleCardClick, handleDeleteIconClick, handleLikeCLick);
  return card.renderCard();
}


const formEditValidator = new FormValidator(formValidationSelectors, formEdit);
formEditValidator.enableValidation();

const formEditAvatarValidator = new FormValidator(formValidationSelectors, formEditAvatar);
formEditAvatarValidator.enableValidation();

const formAddValidator = new FormValidator(formValidationSelectors, formAdd);
formAddValidator.enableValidation();

const formDeleteValidator = new FormValidator(formValidationSelectors, formDelete);
formDeleteValidator.enableValidation();


const popupEdit = new PopupWithForm(popupEditSelector,
  function ({ name, status }) {
    preLoader(true, formEditSubmitButton);
    api.setUserInfo(name, status)
      .then((result) => {
        user.setUserInfo(result.name, result.about);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        preLoader(false, formEditSubmitButton, 'Сохранить');
        this.close();
      })
  }
);
popupEdit.setEventListeners();
profileEditButton.addEventListener('click', () => {
  formEditValidator.formValidationConfig();
  const setFormEditInputValue = ({ name, status }) => {
    formEditName.value = name;
    formEditStatus.value = status;
  };
  setFormEditInputValue(user.getUserInfo());
  popupEdit.open();
});


const popupAdd = new PopupWithForm(popupAddSelector,
  function ({ name, link }) {
    preLoader(true, formAddCardSubmitButton);
    api.addCard(name, link)
      .then((result) => {
        const cardsFeed = new Section({
          items: result,
          renderer: (item) => {
            cardsFeed.addItem(createCard(item));
          }
        }, cardsContainerSelector);
        cardsFeed.addItem(createCard(result));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        preLoader(false, formAddCardSubmitButton, 'Сохранить');
        this.close();
      });
  }
);
popupAdd.setEventListeners();
cardAddButton.addEventListener('click', () => {
  formAddValidator.formValidationConfig();
  formAdd.reset();
  popupAdd.open();
});


const popupEditAvatar = new PopupWithForm(popupEditAvatarSelector,
  function (inputValues) {
    preLoader(true, formEditAvatarSubmitButton);
    api.setUserAvatar(inputValues.link)
      .then((result) => {
        user.setUserAvatar(result.avatar);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        preLoader(false, formEditAvatarSubmitButton, 'Сохранить');
        this.close();
      });
  }
);
popupEditAvatar.setEventListeners();
avatarEditButton.addEventListener('click', () => {
  formEditAvatarValidator.formValidationConfig();
  popupEditAvatar.open();
});


const popupOpen = new PopupWithImage(popupOpenSelector);
popupOpen.setEventListeners();


const popupDelete = new PopupWithSubmit(popupDeleteSelector,
  function (card, cardId) {
    preLoader(true, formDeleteSubmitButton);
    api.deleteCard(cardId)
      .then(() => {
        card.remove();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        preLoader(false, formDeleteSubmitButton, 'Да');
        this.close();
      });
  }
);
popupDelete.setSubmitListener();


function handleCardClick(name, link) {
  popupOpen.open(name, link);
};


function handleLikeCLick(cardId) {
  if (this.isLiked()) {
    api.deleteLike(cardId)
      .then((result) => {
        this.getElement().querySelector('.element__like-count').textContent = this.updateLikesList(result.likes).length;
        this.getElement().querySelector('.element__like-btn').classList.remove('element__like-btn_active');
      })
      .catch((err) => {
        console.error(err);
      });
  } else {
    api.addLike(cardId)
      .then((result) => {
        this.getElement().querySelector('.element__like-count').textContent = this.updateLikesList(result.likes).length;
        this.getElement().querySelector('.element__like-btn').classList.add('element__like-btn_active');
      })
      .catch((err) => {
        console.error(err);
      });
  }
};


function handleDeleteIconClick(id, activeCard) {
  popupDelete.cardId = id;
  popupDelete.card = activeCard;
  popupDelete.open();
};