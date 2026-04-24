console.log('#9. JavaScript homework example file')

/*
 * #1: handleButtonClick — обробник кліку на кнопку
 */
function handleButtonClick(buttonId, message) {
  const button = document.getElementById(buttonId);
  if (button) {
    button.addEventListener('click', () => {
      console.log(message);
    });
  }
}

/*
 * #2: trackMousePosition — координати миші
 */
function trackMousePosition() {
  document.addEventListener('mousemove', (event) => {
    // clientX та clientY — координати відносно вікна браузера
    console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
  });
}

/*
 * #3: setupEventDelegation — делегування подій
 */
function setupEventDelegation(selector) {
  const list = document.querySelector(selector);
  
  if (list) {
    list.addEventListener('click', (event) => {
      // Перевіряємо, що клік був саме по елементу <li>
      if (event.target && event.target.tagName === 'LI') {
        const itemText = event.target.textContent.trim();
        console.log(`Item clicked: ${itemText}`);
      }
    });
  }
}

// Експорт функцій для тестів
export { handleButtonClick, trackMousePosition, setupEventDelegation }