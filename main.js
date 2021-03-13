(()=>{"use strict";var e=document.querySelector(".popup-edit"),t=document.querySelector(".profile__edit-btn"),n=e.querySelector(".form-edit"),r=e.querySelector("#profile-name"),o=e.querySelector("#profile-status"),i=document.querySelector(".popup-add"),s=document.querySelector(".profile__add-btn"),a=i.querySelector(".form-add"),u=(document.querySelector(".popup-open"),{formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__btn",inactiveButtonClass:"form__btn_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"});function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t,n,r){var o=r.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._cardSelector=n,this._handleCardClick=o}var t,n;return t=e,(n=[{key:"_getCardTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_setCardEventListeners",value:function(){var e=this;this._element.querySelector(".element__like-btn").addEventListener("click",(function(t){return e._toggleCardLikeButton(t)})),this._element.querySelector(".element__delete-btn").addEventListener("click",(function(t){return e._handleCardDeleteButton(t)})),this._cardPhoto.addEventListener("click",(function(t){return e._handleCardClick(e._name,e._link)}))}},{key:"_toggleCardLikeButton",value:function(e){e.target.classList.toggle("element__like-btn_active")}},{key:"_handleCardDeleteButton",value:function(e){e.target.parentElement.remove(),this._element=null}},{key:"renderCard",value:function(){return this._element=this._getCardTemplate(),this._cardPhoto=this._element.querySelector(".element__photo"),this._cardPhoto.src=this._link,this._element.querySelector(".element__name").textContent=this._name,this._cardPhoto.alt="".concat(this._name),this._setCardEventListeners(),this._element}}])&&c(t.prototype,n),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._selectors=t,this._formSelector=n}var t,n;return t=e,(n=[{key:"_setEventInputListeners",value:function(){var e=this;this._inputList=this._findInputs(),this._buttonElement=this._findButtons(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t,e._selectors.errorClass,e._selectors.InputErrorClass),e._toggleButtonState()}))}))}},{key:"_findInputs",value:function(){return Array.from(this._formSelector.querySelectorAll(this._selectors.inputSelector))}},{key:"_findButtons",value:function(){return this._formSelector.querySelector(this._selectors.submitButtonSelector)}},{key:"_toggleButtonState",value:function(){this._formSelector.checkValidity()?(this._buttonElement.classList.remove(this._selectors.inactiveButtonClass),this._buttonElement.disabled=!1):(this._buttonElement.classList.add(this._selectors.inactiveButtonClass),this._buttonElement.disabled=!0)}},{key:"_checkInputValidity",value:function(e,t,n){e.validity.valid?this._hideInputErrorMessage(e,t,n):this._showInputErrorMessage(e,e.validationMessage,t,n)}},{key:"_showInputErrorMessage",value:function(e,t,n,r){var o=document.querySelector("#".concat(e.id,"-error"));o.classList.add(n),e.classList.add(r),o.textContent=t}},{key:"_hideInputErrorMessage",value:function(e,t,n){var r=document.querySelector("#".concat(e.id,"-error"));r.classList.remove(t),e.classList.remove(n),r.textContent=""}},{key:"formValidationConfig",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputErrorMessage(t,e._selectors.errorClass,e._selectors.inputErrorClass)}))}},{key:"enableValidation",value:function(){this._formSelector.addEventListener("submit",(function(e){return e.preventDefault()})),this._setEventInputListeners()}}])&&f(t.prototype,n),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}}])&&h(t.prototype,n),e}();function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_active"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_active"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){(t.target.classList.contains("popup_active")||t.target.classList.contains("popup-edit__close-btn")||t.target.classList.contains("popup-add__close-btn")||t.target.classList.contains("popup-open__close-btn"))&&e.close()}))}}])&&m(t.prototype,n),e}();function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t,n){return(b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(s,e);var t,n,r,o,i=(r=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function s(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),i.call(this,e)}return t=s,(n=[{key:"open",value:function(e,t){b(S(s.prototype),"open",this).call(this),this._popupCardImage=this._popup.querySelector(".popup-open__image"),this._popupCardImage.src=t,this._popupCardImage.alt="".concat(e),this._popup.querySelector(".popup-open__figcaption").textContent=e}}])&&v(t.prototype,n),s}(y);function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(e,t,n){return(L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(s,e);var t,n,r,o,i=(r=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(r);if(o){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return j(this,e)});function s(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(r=i.call(this,e))._formSelector=t,r._submitForm=n,r}return t=s,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._formSelector.querySelectorAll(".form__input"),this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;L(I(s.prototype),"setEventListeners",this).call(this),this._formSelector.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues())}))}},{key:"close",value:function(){L(I(s.prototype),"close",this).call(this),this._formSelector.reset()}}])&&w(t.prototype,n),s}(y);function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var B=new(function(){function e(t){var n=t.userName,r=t.userStatus;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userStatus=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,status:this._userStatus.textContent}}},{key:"setUserInfo",value:function(e,t){this._userName.textContent=e,this._userStatus.textContent=t}}])&&P(t.prototype,n),e}())({userName:".profile__name",userStatus:".profile__status"}),R=new q(".popup-edit",n,(function(e){var t=e.name,n=e.status;B.setUserInfo(t,n),R.close()})),x=new q(".popup-add",a,(function(e){var t=e.name,n=e.link,r=D({name:t,link:n});M.addItem(r),x.close()})),T=new E(".popup-open"),V=new p(u,n),N=new p(u,a),D=function(e){return new l(e,".elements__template",{handleCardClick:function(e,t){T.open(e,t)}}).renderCard()},M=new _({items:[{name:"Оружейка",link:"https://raw.githubusercontent.com/avtorsky/mesto/master/src/images/element/__photo/katherine-gu-TPI1gm8gbJs-unsplash.jpg"},{name:"В ожидании утра",link:"https://raw.githubusercontent.com/avtorsky/mesto/master/src/images/element/__photo/alexey-turenkov-W8jQDQvk7Ek-unsplash.jpg"},{name:"Ни в чём не виноваты",link:"https://raw.githubusercontent.com/avtorsky/mesto/master/src/images/element/__photo/sasha-sashina-fAaUwTNZ1To-unsplash.jpg"},{name:"За хлебом",link:"https://raw.githubusercontent.com/avtorsky/mesto/master/src/images/element/__photo/mister-x-i6CzkChCIgQ-unsplash.jpg"},{name:"На верхах",link:"https://raw.githubusercontent.com/avtorsky/mesto/master/src/images/element/__photo/sasha-yudaev-3_ltGI8Zzi0-unsplash.jpg"},{name:"Малибу",link:"https://raw.githubusercontent.com/avtorsky/mesto/master/src/images/element/__photo/igor-starkov-gW9r6nXNlOo-unsplash.jpg"}],renderer:function(e){var t=D(e);M.addItem(t)}},".elements");M.renderItems(),V.enableValidation(),N.enableValidation(),R.setEventListeners(),x.setEventListeners(),T.setEventListeners(),t.addEventListener("click",(function(){var e,t,n;R.open(),t=(e=B.getUserInfo()).name,n=e.status,r.value=t,o.value=n,V.formValidationConfig()})),s.addEventListener("click",(function(){x.open(),a.reset(),N.formValidationConfig()}))})();