console.log('#8. JavaScript homework example file')

/*
 * #1: createDomElement — створення та додавання елемента
 */
function createDomElement(tagName, textContent, container) {
  // 1. Створюємо елемент
  const element = document.createElement(tagName);
  // 2. Встановлюємо текстовий вміст
  element.textContent = textContent;
  // 3. Додаємо в контейнер
  if (container) {
    container.appendChild(element);
  }
  // 4. Повертаємо посилання на елемент
  return element;
}

/*
 * #2: setUserInfoCookie — встановлення cookie на 10 секунд
 */
function setUserInfoCookie(key, value) {
  // Кодуємо значення (наприклад, якщо там пробіли або спецсимволи)
  const encodedValue = encodeURIComponent(`${key}=${value}`);
  // Встановлюємо час життя (10 секунд від поточного моменту)
  const maxAge = 10; 
  
  document.cookie = `userInfo=${encodedValue}; max-age=${maxAge}; path=/`;
  
  console.log(`Cookie 'userInfo' set successfully with ${key}=${value} for ${maxAge} seconds.`);
}

/*
 * #3: saveUserInfo та getUserInfo — робота з sessionStorage
 */
function saveUserInfo(key, value) {
  // Зберігаємо в sessionStorage (дані видаляться при закритті вкладки)
  sessionStorage.setItem(key, value);
  console.log(`Saved ${key}: ${value}`);
}

function getUserInfo(key) {
  // Отримуємо значення
  const value = sessionStorage.getItem(key);
  console.log(`Retrieved ${key}: ${value}`);
  return value;
}

// Експорт для тестів
export { createDomElement, setUserInfoCookie, saveUserInfo, getUserInfo }