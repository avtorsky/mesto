import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSelector, submitForm) {
    super(popupSelector);
    this._formSelector = formSelector;
    this._submitForm = submitForm;
  }

  _getInputValues() {
    this._inputList = this._formSelector.querySelectorAll('.form__input');
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formSelector.addEventListener('submit', (event) => {
      event.preventDefault();
      this._submitForm(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._formSelector.reset();
  }
}