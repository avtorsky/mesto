export default class FormValidator {
  constructor(selectors, form) {
    this._selectors = selectors;
    this._form = form;
  }

  _setEventInputListeners() {
    this._inputList = this._findInputs();
    this._buttonElement = this._findButtons();
    this._inputList.forEach((inputSelector) => {
      inputSelector.addEventListener('input', () => {
        this._checkInputValidity(inputSelector, this._selectors.errorClass, this._selectors.InputErrorClass);
        this._toggleButtonState();
      });
    });
  }

  _findInputs() {
    return Array.from(this._form.querySelectorAll(this._selectors.inputSelector));
  }

  _findButtons() {
    return this._form.querySelector(this._selectors.submitButtonSelector);
  }

  _toggleButtonState() {
    const isValid = this._form.checkValidity();
    if (isValid) {
      this._buttonElement.classList.remove(this._selectors.inactiveButtonClass);
      this._buttonElement.disabled = false;
    } else {
      this._buttonElement.classList.add(this._selectors.inactiveButtonClass);
      this._buttonElement.disabled = true;
    }
  }

  _checkInputValidity(inputSelector, errorClass, inputErrorClass) {
    if (!inputSelector.validity.valid) {
      this._showInputErrorMessage(inputSelector, inputSelector.validationMessage, errorClass, inputErrorClass);
    } else {
      this._hideInputErrorMessage(inputSelector, errorClass, inputErrorClass);
    }
  }

  _showInputErrorMessage(inputSelector, errorMessage, errorClass, inputErrorClass) {
    const errorElement = this._form.querySelector(`#${inputSelector.id}-error`);
    errorElement.classList.add(errorClass);
    inputSelector.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
  }

  _hideInputErrorMessage(inputSelector, errorClass, inputErrorClass) {
    const errorElement = this._form.querySelector(`#${inputSelector.id}-error`);
    errorElement.classList.remove(errorClass);
    inputSelector.classList.remove(inputErrorClass);
    errorElement.textContent = '';
  }

  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((inputSelector) => {
      this._hideInputErrorMessage(inputSelector);
    });
  }

  enableValidation() {
    this._form.addEventListener('submit', (event) => event.preventDefault());
    this._setEventInputListeners();
  }
}