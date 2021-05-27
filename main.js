(()=>{"use strict";var e=document.querySelector(".popup-edit"),t=document.querySelector(".profile__edit-btn"),n=e.querySelector(".form-edit"),r=e.querySelector("#profile-name"),o=e.querySelector("#profile-status"),i=e.querySelector(".form-edit__save-btn"),a=document.querySelector(".popup-add"),s=document.querySelector(".profile__add-btn"),u=a.querySelector(".form-add"),c=(u.querySelector("#card-name"),u.querySelector("#card-link"),a.querySelector(".form-add__save-btn")),l=(document.querySelector(".popup-open"),document.querySelector(".form-avatar-edit")),f=document.querySelector(".profile__avatar-edit-btn"),h=document.querySelector(".form-avatar-edit__save-btn"),p=document.querySelector(".form-delete"),d=p.querySelector(".form-delete__save-btn"),y={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__btn",inactiveButtonClass:"form__btn_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"};function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(t,n,r){var o=t.data,i=t.handleCardClick,a=t.handleCardLike,s=t.handleCardDelete;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=o.name,this._link=o.link,this._likes=o.likes,this._ownerId=o.owner._id,this._userId=o.userId,this._cardId=o._id,this._handleCardClick=i,this._handleCardLike=a,this._handleCardDelete=s,this._cardTemplateSelector=n,this._cardSelector=r,this._isLiked=!1}var t,n;return t=e,(n=[{key:"_getCardTemplate",value:function(){return document.querySelector(this._cardTemplateSelector).content.querySelector(this._cardSelector).cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){return e._handleCardLike(e._id)})),this._deleteButton.addEventListener("click",(function(){return e._handleCardDelete(e._id,e._element)})),this._cardPhoto.addEventListener("click",(function(){return e._handleCardClick(e._name,e._link)}))}},{key:"_setLikeButton",value:function(){this._likeButton.classList.add("element__like-btn_active")}},{key:"_unsetLikeButton",value:function(){this._likeButton.classList.remove("element__like-btn_active")}},{key:"setLikeContainer",value:function(){var e=this;this._isLiked=this._likes.some((function(t){return t._id===e._userId})),this._likesCounter.textContent=this._likes.length,this._isLiked?this._setLikeButton():this._unsetLikeButton()}},{key:"isLiked",value:function(){return this._isLiked}},{key:"getCardId",value:function(){return this._cardId}},{key:"setLikes",value:function(e){this._likes=e}},{key:"delete",value:function(){this._element.remove(),this._element=null}},{key:"renderCard",value:function(){return this._element=this._getCardTemplate(),this._element.querySelector(".element__name").textContent=this._name,this._cardPhoto=this._element.querySelector(".element__photo"),this._cardPhoto.src=this._link,this._cardPhoto.alt="".concat(this._name),this._likeButton=this._element.querySelector(".element__like-btn"),this._deleteButton=this._element.querySelector(".element__delete-btn"),this._deleteButton.classList.add(this._userId===this._ownerId?"element__delete-btn_active":"element__delete-btn"),this._likesCounter=this._element.querySelector(".element__like-count"),this._likesCounter.textContent=this._likes.length,this._setEventListeners(),this.setLikeContainer(),this._element}}])&&_(t.prototype,n),e}();function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._selectors=t,this._form=n}var t,n;return t=e,(n=[{key:"_setEventInputListeners",value:function(){var e=this;this._inputList=this._findInputs(),this._buttonElement=this._findButtons(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t,e._selectors.errorClass,e._selectors.InputErrorClass),e._toggleButtonState()}))}))}},{key:"_findInputs",value:function(){return Array.from(this._form.querySelectorAll(this._selectors.inputSelector))}},{key:"_findButtons",value:function(){return this._form.querySelector(this._selectors.submitButtonSelector)}},{key:"_toggleButtonState",value:function(){this._form.checkValidity()?(this._buttonElement.classList.remove(this._selectors.inactiveButtonClass),this._buttonElement.disabled=!1):(this._buttonElement.classList.add(this._selectors.inactiveButtonClass),this._buttonElement.disabled=!0)}},{key:"_checkInputValidity",value:function(e,t,n){e.validity.valid?this._hideInputErrorMessage(e,t,n):this._showInputErrorMessage(e,e.validationMessage,t,n)}},{key:"_showInputErrorMessage",value:function(e,t,n,r){var o=this._form.querySelector("#".concat(e.id,"-error"));o.classList.add(n),e.classList.add(r),o.textContent=t}},{key:"_hideInputErrorMessage",value:function(e,t,n){var r=this._form.querySelector("#".concat(e.id,"-error"));r.classList.remove(t),e.classList.remove(n),r.textContent=""}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputErrorMessage(t)}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){return e.preventDefault()})),this._setEventInputListeners()}}])&&m(t.prototype,n),e}();function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var g=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&k(t.prototype,n),e}();function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._keyEscapeSelector="Escape"}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_active"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_active"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){e.key===this._keyEscapeSelector&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){(t.target.classList.contains("popup_active")||t.target.classList.contains("popup__close"))&&e.close()}))}}])&&S(t.prototype,n),e}();function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t,n){return(O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(r);if(o){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return j(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupCardImage=t._popup.querySelector(".popup-open__image"),t._popupCardCaption=t._popup.querySelector(".popup-open__figcaption"),t}return t=a,(n=[{key:"open",value:function(e,t){O(I(a.prototype),"open",this).call(this),this._popupCardImage.src=t,this._popupCardImage.alt="".concat(e),this._popupCardCaption.textContent=e}}])&&E(t.prototype,n),a}(C);function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(e,t,n){return(B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function U(e,t){return!t||"object"!==q(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(r);if(o){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return U(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submitForm=t,n._inputList=n._popup.querySelectorAll(".form__input"),n._form=n._popup.querySelector("form"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;B(x(a.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues())}))}},{key:"close",value:function(){B(x(a.prototype),"close",this).call(this),this._form.reset()}}])&&R(t.prototype,n),a}(C);function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var D=function(){function e(t){var n=t.userName,r=t.userStatus,o=t.userAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userStatus=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,status:this._userStatus.textContent}}},{key:"setUserInfo",value:function(e,t){this._userName.textContent=e,this._userStatus.textContent=t}},{key:"setUserAvatar",value:function(e){this._avatar.src=e}}])&&V(t.prototype,n),e}();function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function G(e,t){return!t||"object"!==N(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=H(r);if(o){var n=H(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return G(this,e)});function a(){return M(this,a),i.apply(this,arguments)}return t=a,(n=[{key:"setSubmitForm",value:function(e){this._submitForm=e}}])&&F(t.prototype,n),a}(A);function $(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach((function(t){X(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function X(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Y=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.baseUrl=t.baseUrl,this.headers=t.headers}var t,n;return t=e,(n=[{key:"_handleResponse",value:function(e){return e.ok?e.json():(console.log("Ошибка: ".concat(e.status)),Promise.reject(e.statusText))}},{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{method:"GET",headers:this.headers}).then(this._handleResponse)}},{key:"setUserInfo",value:function(e,t){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e,about:t})}).then(this._handleResponse)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e})}).then(this._handleResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{method:"GET",headers:this.headers}).then(this._handleResponse)}},{key:"addCard",value:function(e,t){return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e,link:t})}).then(this._handleResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then(this._handleResponse)}},{key:"addLike",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this.headers}).then(this._handleResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this.headers}).then(this._handleResponse)}}])&&$(t.prototype,n),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-24",headers:{authorization:"159b35a8-d58e-44ce-a10d-31006f74b905","Content-Type":"application/json"}}),Z=new D({userName:".profile__name",userStatus:".profile__status",userAvatar:".profile__avatar"}),ee=null,te=new P(".popup-open");te.setEventListeners();var ne=new z(".popup-delete",{submitForm:function(){}});ne.setEventListeners();var re=function(e){var t=new v({data:W(W({},e),{},{userId:ee}),handleCardClick:function(e,t){te.open(e,t)},handleCardLike:function(){var e=t.getCardId();(t.isLiked()?function(e){return Y.deleteLike(e)}:function(e){return Y.addLike(e)})(e).then((function(e){t.setLikes(e.likes),t.setLikeContainer(ee)})).catch((function(e){console.error("Событие невозможно выполнить. Ошибка ".concat(e))}))},handleCardDelete:function(){ne.setSubmitForm((function(){d.textContent="Удаление...",Y.deleteCard(t.getCardId()).then((function(){t.delete(),ne.close()})).catch((function(e){console.log("Невозможно удалить карточку. Ошибка ".concat(e))})).finally((function(){d.textContent="Да"}))})),ne.open()}},".elements__template",".element");return t.renderCard(ee)},oe=new A(".popup-avatar-edit",(function(e){h.textContent="Сохранение...",Y.setUserAvatar(e.link).then((function(e){Z.setUserAvatar(e.avatar),oe.close()})).catch((function(e){console.error("Невозможно сохранить новый аватар. Ошибка ".concat(e))})).finally((function(){h.textContent="Сохранить"}))}));oe.setEventListeners(),f.addEventListener("click",(function(){ce.resetValidation(),oe.open()}));var ie=new A(".popup-edit",(function(e){var t=e.name,n=e.status;i.textContent="Сохранение...",Y.setUserInfo(t,n).then((function(e){Z.setUserInfo(e.name,e.about),ie.close()})).catch((function(e){console.log("Невозможно сохранить новые данные пользователя. Ошибка ".concat(e))})).finally((function(){i.textContent="Сохранить"}))}));ie.setEventListeners(),t.addEventListener("click",(function(){var e,t,n;ue.resetValidation(),t=(e=Z.getUserInfo()).name,n=e.status,r.value=t,o.value=n,ie.open()}));var ae=new g({renderer:function(e){ae.addItem(re(e))}},".elements"),se=new A(".popup-add",(function(e){var t=e.name,n=e.link;c.textContent="Сохранение...",Y.addCard(t,n).then((function(e){ae.addItem(re(e)),se.close()})).catch((function(e){console.log("Невозможно добавить новую карточку. Ошибка ".concat(e))})).finally((function(){c.textContent="Добавить"}))}));se.setEventListeners(),s.addEventListener("click",(function(){le.resetValidation(),se.open()}));var ue=new b(y,n);ue.enableValidation();var ce=new b(y,l);ce.enableValidation();var le=new b(y,u);le.enableValidation(),new b(y,p).enableValidation();var fe=[Y.getUserInfo(),Y.getInitialCards()];Promise.all(fe).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}}(t,n)||function(e,t){if(e){if("string"==typeof e)return K(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?K(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Z.setUserInfo(o.name,o.about),Z.setUserAvatar(o.avatar),ee=o._id,ae.renderItems(i.reverse())})).catch((function(e){console.error("Невозможно получить данные. Ошибка ".concat(e))}))})();