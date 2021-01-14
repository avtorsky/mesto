const popupEdit = document.querySelector('.popup-edit');
const popupEditCloseButton = popupEdit.querySelector('.popup-edit__close-btn');
const profileEditButton = document.querySelector('.profile__edit-btn');
let profileName = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__status');
const formEdit = popupEdit.querySelector('.form-edit');
let formEditName = popupEdit.querySelector('#profile__name');
let formEditStatus = popupEdit.querySelector('#profile__status');


const popupAdd = document.querySelector('.popup-add');
const popupAddCloseButton = popupAdd.querySelector('.popup-add__close-btn');
const cardAddButton = document.querySelector('.profile__add-btn');
const formAdd = popupAdd.querySelector('.form-add');
let formAddName = popupAdd.querySelector('#card__name');
let formAddLink = popupAdd.querySelector('#card__link');
const setDefaultPlaceholder = function () {
  formAddName.value = '';
  formAddLink.value = '';
};


const popupOpen = document.querySelector('.popup-open');
const popupOpenCloseButton = popupOpen.querySelector('.popup-open__close-btn');
const popupOpenButton = function (object, name) {
  popupOpen.classList.add('popup-open_active');
  popupOpen.querySelector('.popup-open__image').src = object.target.src;
  popupOpen.querySelector('.popup-open__figcaption').textContent = name;
}


const cards = document.querySelector('.elements');
const initialCards = [
  {
    name: 'Оружейка',
    link: 'https://raw.githubusercontent.com/avtorsky/mesto/master/images/element/__photo/katherine-gu-TPI1gm8gbJs-unsplash.jpg'
  },
  {
    name: 'В ожидании утра',
    link: 'https://raw.githubusercontent.com/avtorsky/mesto/master/images/element/__photo/alexey-turenkov-W8jQDQvk7Ek-unsplash.jpg'
  },
  {
    name: 'Ни в чём не виноваты',
    link: 'https://raw.githubusercontent.com/avtorsky/mesto/master/images/element/__photo/sasha-sashina-fAaUwTNZ1To-unsplash.jpg'
  },
  {
    name: 'За хлебом',
    link: 'https://raw.githubusercontent.com/avtorsky/mesto/master/images/element/__photo/mister-x-i6CzkChCIgQ-unsplash.jpg'
  },
  {
    name: 'На верхах',
    link: 'https://raw.githubusercontent.com/avtorsky/mesto/master/images/element/__photo/sasha-yudaev-3_ltGI8Zzi0-unsplash.jpg'
  },
  {
    name: 'Малибу',
    link: 'https://raw.githubusercontent.com/avtorsky/mesto/master/images/element/__photo/igor-starkov-gW9r6nXNlOo-unsplash.jpg'
  },
];
const cardsCreateFeed = function (array) {
  const cardCreateTemplate = document.querySelector('.elements__template').content;
  array.forEach((elem) => {
    const cardItem = cardCreateTemplate.cloneNode(true);
    cardItem.querySelector('.element__photo').src = elem.link;
    cardItem.querySelector('.element__photo').alt = elem.name;
    cardItem.querySelector('.element__name').textContent = elem.name;
    cardItem.querySelector('.element__delete-btn').addEventListener('click', (event) => {
      event.target.parentElement.remove();
    });
    cardItem.querySelector('.element__like-btn').addEventListener('click', (event) => {
      event.target.classList.toggle('element__like-btn_active');
    });
    cardItem.querySelector('.element__photo').addEventListener('click', (event) => {
      popupOpenButton(event, elem.name);
    })
    cards.prepend(cardItem);
  });
};


function populateEditForm() {
  formEditName.value = profileName.textContent;
  formEditStatus.value = profileStatus.textContent;
}
function openPopupEdit() {
  popupEdit.classList.add('popup-edit_active');
  populateEditForm();
}
function closePopupEdit() {
  popupEdit.classList.remove('popup-edit_active');
}
function handleFormEditSubmit(event) {
  event.preventDefault();
  profileName.textContent = formEditName.value;
  profileStatus.textContent = formEditStatus.value;
  closePopupEdit();
}


function openPopupAdd() {
  popupAdd.classList.add('popup-add_active');
}
function closePopupAdd() {
  popupAdd.classList.remove('popup-add_active');
}


function openPopupOpen() {
  popupOpen.classList.add('popup-open_active');
}
function closePopupOpen() {
  popupOpen.classList.remove('popup-open_active');
}


profileEditButton.addEventListener('click', openPopupEdit);
popupEditCloseButton.addEventListener('click', closePopupEdit);
popupEdit.addEventListener('mouseup', (event) => {
  if (event.target === event.currentTarget) {
    closePopupEdit();
  }
});
formEdit.addEventListener('submit', handleFormEditSubmit);


cardAddButton.addEventListener('click', function () {
  openPopupAdd();
  setDefaultPlaceholder();
});
popupAddCloseButton.addEventListener('click', closePopupAdd);
popupAdd.addEventListener('mouseup', (event) => {
  if (event.target === event.currentTarget) {
    closePopupAdd();
  }
});
formAdd.addEventListener('submit', function (event) {
  event.preventDefault();
  const nameInput = formAddName.value;
  const linkInput = formAddLink.value;
  cardsCreateFeed([{ name: nameInput, link: linkInput }]);
  closePopupAdd();
});


popupOpenCloseButton.addEventListener('click', closePopupOpen);
popupOpen.addEventListener('mouseup', (event) => {
  if (event.target === event.currentTarget) {
    closePopupOpen();
  }
});


cardsCreateFeed(initialCards);