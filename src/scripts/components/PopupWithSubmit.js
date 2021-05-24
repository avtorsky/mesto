import PopupWithForm from './PopupWithForm.js';

export default class PopupWithFormSubmit extends PopupWithForm {
  setSubmitForm(action) {
    this._submitForm = action;
  }
}