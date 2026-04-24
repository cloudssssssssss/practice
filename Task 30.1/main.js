console.log('#11. JavaScript homework example file')

/*
 * #1
 * Валідація Email
 */
function isValidEmail(email) {
  // Регулярний вираз для базової перевірки email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

console.log(isValidEmail('example@example.com')) // true
console.log(isValidEmail('invalid-email'))       // false

/*
 * #2
 * Валідація URL
 */
function isValidUrl(url) {
  // Регулярний вираз для перевірки протоколів http/https та домену
  const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
  return urlRegex.test(url);
}

console.log(isValidUrl('https://www.example.com')) // true
console.log(isValidUrl('invalid-url'))             // false

export { isValidEmail, isValidUrl }