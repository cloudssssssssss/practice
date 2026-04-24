# Express Authentication with Passport.js (HW 64.1)

Цей проект демонструє реалізацію професійної системи авторизації з використанням сесій та стратегій Passport.

## Ключові особливості
- **Passport Local Strategy:** Авторизація користувачів за допомогою email та пароля.
- **Session Management:** Використання `express-session` для збереження стану входу між запитами.
- **Secure Cookies:** Сесійні куки налаштовані з прапорцем `httpOnly` для захисту від XSS атак.
- **Protected Routes:** Доступ до `/protected` відкривається лише після успішної перевірки мідлваром `isAuthenticated`.

## Технології
- Passport.js
- Express-session
- Cookie-parser

## Маршрути
- `GET /login` — Форма входу.
- `POST /login` — Обробка даних через Passport.
- `GET /protected` — Захищена зона (вимагає авторизації).
- `GET /logout` — Завершення сесії та видалення кук.

## Тестові дані
- **Email:** test@test.com
- **Password:** 123