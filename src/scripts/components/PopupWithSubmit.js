import PopupWithForm from './PopupWithForm.js';

export default class PopupWithFormSubmit extends PopupWithForm {
  setSubmitForm(event) {
    this._submitForm = event;
  } 
}