export default class UserInfo {
  constructor({ userName, userStatus, userAvatar, userId }) {
    this._userName = document.querySelector(userName);
    this._userStatus = document.querySelector(userStatus);
    this._avatar = document.querySelector(userAvatar);
  }

  getUserInfo() {
    const userInfo = { name: this._userName.textContent, status: this._userStatus.textContent };
    return userInfo;
  }

  setUserId(userId) {
    this.id = userId;
  }

  setUserInfo(name, status) {
    this._userName.textContent = name;
    this._userStatus.textContent = status;
  }

  setUserAvatar(avatarLink) {
    this._avatar.src = avatarLink;
  }
}