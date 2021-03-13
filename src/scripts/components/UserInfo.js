export default class UserInfo {
  constructor({ userName, userStatus }) {
    this._userName = document.querySelector(userName);
    this._userStatus = document.querySelector(userStatus);
  }

  getUserInfo() {
    const userInfo = { name: this._userName.textContent, status: this._userStatus.textContent };
    return userInfo;
  }

  setUserInfo(name, status) {
    this._userName.textContent = name;
    this._userStatus.textContent = status;
  }
}