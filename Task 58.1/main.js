import crypto from 'crypto';

console.log('#57. JavaScript homework example file');

/**
 * #1 generateHash
 * Генерує SHA-256 хеш із вхідного рядка.
 * @param {string} input - Рядок для хешування.
 * @returns {string} - Хеш у шістнадцятковому форматі.
 */
function generateHash(input) {
  return crypto
    .createHash('sha256')
    .update(input)
    .digest('hex');
}

/**
 * #2 generatePasswordHash
 * Генерує хеш пароля за допомогою алгоритму PBKDF2 із сіллю.
 * @param {string} password - Пароль.
 * @param {string} salt - Сіль.
 * @param {number} iterations - Кількість ітерацій.
 * @param {number} keylen - Довжина ключа.
 * @param {string} digest - Алгоритм хешування.
 * @returns {string} - Хеш у шістнадцятковому форматі.
 */
function generatePasswordHash(password, salt, iterations = 10000, keylen = 64, digest = 'sha512') {
  // pbkdf2Sync повертає Buffer, який ми конвертуємо в hex
  const hash = crypto.pbkdf2Sync(password, salt, iterations, keylen, digest);
  return hash.toString('hex');
}

/**
 * #3 verifyPassword
 * Перевіряє введений пароль на відповідність збереженому хешу.
 * @param {string} inputPassword - Введений пароль.
 * @param {string} storedHash - Збережений хеш.
 * @param {string} salt - Сіль, використана при створенні хешу.
 * @returns {boolean} - true, якщо паролі збігаються.
 */
function verifyPassword(
  inputPassword,
  storedHash,
  salt,
  iterations = 10000,
  keylen = 64,
  digest = 'sha512',
) {
  // Генеруємо хеш для введеного пароля з тими ж параметрами
  const inputHash = generatePasswordHash(inputPassword, salt, iterations, keylen, digest);
  
  // Використовуємо timingSafeEqual для запобігання атак за часом (timing attacks)
  // Для простоти можна порівняти рядки, але в криптографії краще так:
  return crypto.timingSafeEqual(Buffer.from(storedHash, 'hex'), Buffer.from(inputHash, 'hex'));
}

// Приклад використання (можна розкоментувати для тесту):
/*
const password = 'superSecret123';
const salt = crypto.randomBytes(16).toString('hex');
const hash = generatePasswordHash(password, salt);

const isCorrect = verifyPassword('superSecret123', hash, salt);
console.log(isCorrect ? 'Пароль вірний.' : 'Пароль невірний.');
*/

export { generateHash, generatePasswordHash, verifyPassword };