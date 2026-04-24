console.log('#55. JavaScript homework example file');

/**
 * #1 asyncOperationDemo
 */
function asyncOperationDemo(callback) {
  // Логування початку
  console.log('Перший виклик');

  // 1. process.nextTick
  process.nextTick(() => {
    console.log('Виконано nextTick');
    callback('nextTick');
    console.log('Завершено виконання: nextTick');
  });

  // 2. setTimeout
  setTimeout(() => {
    console.log('Виконано setTimeout');
    callback('setTimeout');
    console.log('Завершено виконання: setTimeout');
  }, 0);

  // 3. setImmediate
  setImmediate(() => {
    console.log('Виконано setImmediate');
    callback('setImmediate');
    console.log('Завершено виконання: setImmediate');
  });

  // Логування після ініціації всіх операцій
  console.log('Останній виклик');
}

// Приклад використання (залишаємо для демонстрації)
asyncOperationDemo(operation => {
  // Тут можна нічого не логувати, бо функція вже сама все вивела
});

export { asyncOperationDemo };