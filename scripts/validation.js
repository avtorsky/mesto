// Переменные

const formValidationSelectors = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__btn',
  inactiveButtonClass: 'form__btn_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}

// Функции

const enableValidation = (selectors) => {
  const formList = Array.from(document.querySelectorAll(selectors.formSelector));
  formList.forEach((formSelector) => {
    formSelector.addEventListener('submit', (event) => event.preventDefault());
    setEventInputListeners(formSelector, selectors);
  });
};

const setEventInputListeners = (formSelector, selectors) => { // установка слушателей и обработчиков событий на все инпуты в формах
  const inputList = findInputs(formSelector, selectors.inputSelector);
  const buttonElement = findButtons(formSelector, selectors.submitButtonSelector);

  inputList.forEach((inputSelector) => {
    inputSelector.addEventListener('input', () => {
      checkInputValidity(inputSelector, selectors.errorClass, selectors.InputErrorClass);
      toggleButtonState(formSelector, buttonElement, selectors.inactiveButtonClass);
    });
  });
};

const toggleButtonState = (formSelector, buttonElement, inactiveButtonClass) => { // переключение состояния кнопки в зависимости от валидности всей формы
  const isValid = formSelector.checkValidity();
  if (isValid) {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.disabled = false;
  } else {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.disabled = true;
  }
};

const checkInputValidity = (inputSelector, errorClass, inputErrorClass) => { // проверка конкретного инпута на валидность
  if (!inputSelector.validity.valid) {
    showInputErrorMessage(inputSelector, inputSelector.validationMessage, errorClass, inputErrorClass);
  } else {
    hideInputErrorMessage(inputSelector, errorClass, inputErrorClass);
  }
};

const findButtons = (formSelector, submitButtonSelector) => { // отдельная функция, так как переиспользуется при отрытии форм
  return formSelector.querySelector(submitButtonSelector);
};

const findInputs = (formSelector, inputSelector) => { // отдельная функция, так как переиспользуется при открытии форм
  return Array.from(formSelector.querySelectorAll(inputSelector));
};

const showInputErrorMessage = (inputSelector, errorMessage, errorClass, inputErrorClass) => { // отображение текста с ошибкой
  const errorElement = document.querySelector(`#${inputSelector.id}-error`);
  errorElement.classList.add(errorClass);
  inputSelector.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
};

const hideInputErrorMessage = (inputSelector, errorClass, inputErrorClass) => { // скрытие текста с ошибкой
  const errorElement = document.querySelector(`#${inputSelector.id}-error`);
  errorElement.classList.remove(errorClass);
  inputSelector.classList.remove(inputErrorClass);
  errorElement.textContent = '';
};

enableValidation(formValidationSelectors);