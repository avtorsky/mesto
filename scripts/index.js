const popupLayer = document.querySelector('.popup');
const popupCloseButton = popupLayer.querySelector('.popup__close-btn');
const profileEditButton = document.querySelector('.profile__edit-btn');

let profileName = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__status');

const form = popupLayer.querySelector('.form');
let formName = popupLayer.querySelector('#profile__name');
let formStatus = popupLayer.querySelector('#profile__status');

function populateInput() {
  formName.value = profileName.textContent;
  formStatus.value = profileStatus.textContent;
}

function openPopup() {
  popupLayer.classList.add('popup_active');
  populateInput();
}

function closePopup() {
  popupLayer.classList.remove('popup_active');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = formName.value;
  profileStatus.textContent = formStatus.value;
  closePopup();
}

profileEditButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
popupLayer.addEventListener('mouseup', (event) => {
  if (event.target === event.currentTarget) {
    closePopup();
  }
});

form.addEventListener('submit', handleFormSubmit);