export default class Section {
  constructor({ items, renderer }, cardsContainerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(cardsContainerSelector);
  }

  addItem(elem) {
    this._container.prepend(elem);
  }

  renderItems() {
    this._items.forEach(item => {
      this._renderer(item);
    });
  }
}