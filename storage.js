export class Storage {
  constructor() {}

  static getItemsFromStorage() {
    let itemsFromStorage;

    if (localStorage.getItem("items") === null) {
      itemsFromStorage = [];
    } else {
      itemsFromStorage = JSON.parse(localStorage.getItem("items"));
    }

    return itemsFromStorage;
  }

  static addItemToStorage(item) {
    const itemsFromStorage = this.getItemsFromStorage();

    // Add new item to array
    itemsFromStorage.push(item);

    // Convert to JSON string and set to local storage
    localStorage.setItem("items", JSON.stringify(itemsFromStorage));
  }

  static removeItemFromStorage(item) {
    let itemsFromStorage = this.getItemsFromStorage();

    // Filter out item to be removed
    itemsFromStorage = itemsFromStorage.filter((i) => i !== item);

    // Re-set to localstorage
    localStorage.setItem("items", JSON.stringify(itemsFromStorage));
  }

  static removeAllItemsFromStorage() {
    // Clear from localStorage
    localStorage.removeItem("items");
  }
}
