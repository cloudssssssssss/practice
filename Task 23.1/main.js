console.log('#6. JavaScript homework example file')

/*
 * #1: CalorieCalculator з використанням Map
 */
class CalorieCalculator {
  constructor() {
    // Ініціалізуємо Map для зберігання пар "назва: калорії"
    this.products = new Map();
  }

  addProduct(productName, calories) {
    // Метод set додає або оновлює елемент
    this.products.set(productName, calories);
  }

  getProductCalories(productName) {
    // Метод has перевіряє наявність, get повертає значення
    if (this.products.has(productName)) {
      return this.products.get(productName);
    }
    return 'Product not found';
  }

  removeProduct(productName) {
    // Метод delete видаляє запис за ключем
    this.products.delete(productName);
  }
}

/*
 * #2: UniqueUsernames з використанням Set
 */
class UniqueUsernames {
  constructor() {
    // Set автоматично ігнорує дублікати
    this.usernames = new Set();
  }

  addUser(username) {
    // Метод add додає нове значення
    this.usernames.add(username);
  }

  exists(username) {
    // Метод has повертає true/false
    return this.usernames.has(username);
  }

  count() {
    // Властивість size повертає кількість елементів
    return this.usernames.size;
  }
}

// Експорт для тестів
export { CalorieCalculator, UniqueUsernames }