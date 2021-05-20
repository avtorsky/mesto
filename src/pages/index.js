import './index.css';
import {
  formAdd, formAddCardSubmitButton, formDelete, formDeleteSubmitButton,
  formEdit, formEditName, formEditStatus, formEditSubmitButton,
  formEditAvatar, avatarEditButton, formEditAvatarSubmitButton,
  profileEditButton,
  cardAddButton,
  popupEditSelector, popupAddSelector, popupOpenSelector, popupDeleteSelector,
  formValidationSelectors, apiAuthorizationConfig,
  cardsContainerSelector, cardTemplateSelector, cardSelector,
  profileNameSelector, profileStatusSelector,
  profileAvatarSelector, popupEditAvatarSelector
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

const user = new UserInfo({
  userName: profileNameSelector,
  userStatus: profileStatusSelector,
  userAvatar: profileAvatarSelector
});

let userId = null;

const popupOpen = new PopupWithImage(popupOpenSelector);
popupOpen.setEventListeners();

const popupDelete = new PopupWithSubmit(
  popupDeleteSelector, {
  submitForm: () => { }
});
popupDelete.setEventListeners();

const createCard = (cardData) => {
  const card = new Card({
    data: { ...cardData, userId },
    handleCardClick: (name, link) => { popupOpen.open(name, link) },
    handleCardLike: () => {
      const cardId = card.getCardId();
      const likeState = card.isLiked();
      const likeStatus = likeState ? cardId => api.deleteLike(cardId) : cardId => api.addLike(cardId);
      likeStatus(cardId)
        .then((data) => {
          card.setLikes(data.likes);
        })
        .catch((err) => {
          console.error(`Событие невозможно выполнить. Ошибка ${err}`);
        })
        .finally(() => {
          card.setLikeContainer(userId);
        });
    },
    handleCardDelete: () => {
      popupDelete.setSubmitForm(() => {
        formDeleteSubmitButton.textContent = 'Удаление...';
        api.deleteCard(card.getCardId())
          .then(() => {
            card.delete();
            popupDelete.close();
          })
          .catch((err) => {
            console.log(`Невозможно удалить карточку. Ошибка ${err}`);
          })
          .finally(() => {
            formDeleteSubmitButton.textContent = 'Да';
          });
      });
      popupDelete.open()
    }
  }, cardTemplateSelector, cardSelector);

  return card.renderCard(userId);
}

const popupEditAvatar = new PopupWithForm(popupEditAvatarSelector,
  function (inputValues) {
    formEditAvatarSubmitButton.textContent = 'Сохранение...';
    api.setUserAvatar(inputValues.link)
      .then((res) => {
        user.setUserAvatar(res.avatar);
        this.close();
      })
      .catch((err) => {
        console.error(`Невозможно сохранить новый аватар. Ошибка ${err}`);
      })
      .finally(() => {
        formEditAvatarSubmitButton.textContent = 'Сохранить';
      });
  }
);
popupEditAvatar.setEventListeners();
avatarEditButton.addEventListener('click', () => {
  formEditAvatarValidator.formValidationConfig();
  popupEditAvatar.open();
});

const popupEdit = new PopupWithForm(popupEditSelector,
  function ({ name, status }) {
    formEditSubmitButton.textContent = 'Сохранение...';
    api.setUserInfo(name, status)
      .then((res) => {
        user.setUserInfo(res.name, res.about);
        this.close();
      })
      .catch((err) => {
        console.log(`Невозможно сохранить новые данные пользователя. Ошибка ${err}`);
      })
      .finally(() => {
        formEditSubmitButton.textContent = 'Сохранить';
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
    formAddCardSubmitButton.textContent = 'Сохранение...';
    api.addCard(name, link)
      .then((res) => {
        const cardsFeed = new Section({
          items: res,
          renderer: (item) => {
            cardsFeed.addItem(createCard(item));
          }
        }, cardsContainerSelector);
        cardsFeed.addItem(createCard(res));
        this.close();
      })
      .catch((err) => {
        console.log(`Невозможно добавить новую карточку. Ошибка ${err}`);
      })
      .finally(() => {
        formAddCardSubmitButton.textContent = 'Добавить';
      });
  }
);
popupAdd.setEventListeners();
cardAddButton.addEventListener('click', () => {
  formAddValidator.formValidationConfig();
  formAdd.reset();
  popupAdd.open();
});

const formEditValidator = new FormValidator(formValidationSelectors, formEdit);
formEditValidator.enableValidation();

const formEditAvatarValidator = new FormValidator(formValidationSelectors, formEditAvatar);
formEditAvatarValidator.enableValidation();

const formAddValidator = new FormValidator(formValidationSelectors, formAdd);
formAddValidator.enableValidation();

const formDeleteValidator = new FormValidator(formValidationSelectors, formDelete);
formDeleteValidator.enableValidation();

const getUserPromise = new Promise((resolve, reject) => {
  api.getUserInfo()
    .then(res => {
      user.setUserInfo(res.name, res.about);
      user.setUserAvatar(res.avatar);
      userId = res._id;
      resolve(res);
    })
    .catch(err => {
      console.error(`Невозможно получить данные о пользователе. Ошибка ${err}`);
      reject(err);
    });
})

const getCardsPromise = new Promise((resolve, reject) => {
  api.getInitialCards()
    .then(res => {
      const cardsFeed = new Section({
        items: res,
        renderer: (item) => { cardsFeed.addItem(createCard(item)) }
      }, cardsContainerSelector);
      cardsFeed.renderItems(res.reverse());
      resolve(res);
    })
    .catch(err => {
      console.error(`Невозможно получить данные о карточках. Ошибка ${err}`);
      reject(err);
    });
})

const promises = [getUserPromise, getCardsPromise];
Promise.all(promises)