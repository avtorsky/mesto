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
          card.setLikeContainer(userId);
        })
        .catch((err) => {
          console.error(`Событие невозможно выполнить. Ошибка ${err}`);
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
        popupEditAvatar.close();
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
  formEditAvatarValidator.resetValidation();
  popupEditAvatar.open();
});

const popupEdit = new PopupWithForm(popupEditSelector,
  function ({ name, status }) {
    formEditSubmitButton.textContent = 'Сохранение...';
    api.setUserInfo(name, status)
      .then((res) => {
        user.setUserInfo(res.name, res.about);
        popupEdit.close();
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
  formEditValidator.resetValidation();
  const setFormEditInputValue = ({ name, status }) => {
    formEditName.value = name;
    formEditStatus.value = status;
  };
  setFormEditInputValue(user.getUserInfo());
  popupEdit.open();
});

const cardsFeed = new Section({
  renderer: (item) => { cardsFeed.addItem(createCard(item)) }
}, cardsContainerSelector);

const popupAdd = new PopupWithForm(popupAddSelector,
  function ({ name, link }) {
    formAddCardSubmitButton.textContent = 'Сохранение...';
    api.addCard(name, link)
      .then((res) => {
        cardsFeed.addItem(createCard(res));
        popupAdd.close();
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
  formAddValidator.resetValidation();
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

const promises = [api.getUserInfo(), api.getInitialCards()];

Promise.all(promises)
  .then(([userData, cards]) => {
    user.setUserInfo(userData.name, userData.about);
    user.setUserAvatar(userData.avatar);
    userId = userData._id;
    cardsFeed.renderItems(cards.reverse());
  })
  .catch(err => {
    console.error(`Невозможно получить данные. Ошибка ${err}`);
  });
