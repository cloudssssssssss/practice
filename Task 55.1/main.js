import { writeFile, readFile, unlink } from 'fs/promises';

console.log('#54. JavaScript homework example file');

/**
 * #1 Запис файлу
 */
async function writeFileAsync(filename, content) {
  try {
    // Використовуємо await для асинхронного запису. utf8 — стандарт для тексту.
    await writeFile(filename, content, 'utf8');
    console.log('Файл успішно записано');
  } catch (error) {
    console.error('Помилка при записі файлу:', error);
  }
}

/**
 * #2 Читання файлу
 */
async function readFileAsync(filename) {
  try {
    const content = await readFile(filename, 'utf8');
    console.log('Файл успішно прочитано:', content);
    return content;
  } catch (error) {
    // Перевірка коду ENOENT означає, що файл фізично відсутній
    if (error.code === 'ENOENT') {
      console.error('Файл не існує:', filename);
    } else {
      console.error('Помилка при читанні файлу:', error);
    }
    // Прокидаємо помилку далі, щоб працював .catch() у прикладі використання
    throw error;
  }
}

/**
 * #3 Видалення файлу
 */
async function deleteFileAsync(filename) {
  try {
    await unlink(filename);
    console.log('Файл успішно видалено');
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error('Файл не існує:', filename);
    } else {
      console.error('Помилка при видаленні файлу:', error);
    }
  }
}

export { writeFileAsync, readFileAsync, deleteFileAsync };