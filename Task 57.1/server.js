const http = require('http');
const querystring = require('querystring');

// 1. Налаштування порту (Пункт №1)
const PORT = process.env.PORT || 3000;

// Функція санітизації (Пункт №5 - захист від XSS)
const sanitize = (str) => str.toString().replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Генерація HTML шаблону (Пункт №2)
const generateHTML = (title, content) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>${title}</title>
</head>
<body>
    <h1>${title}</h1>
    ${content}
</body>
</html>`;
};

// Основний сервер
const server = http.createServer((req, res) => {
    try {
        const { method, url } = req;

        // Встановлення обов'язкових заголовків (Пункт №4)
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.setHeader('X-Content-Type-Options', 'nosniff');

        // МАРШРУТИЗАЦІЯ GET (Пункт №2)
        if (method === 'GET') {
            let title, message;

            if (url === '/') {
                title = 'Home';
                message = 'Welcome to the Home Page';
            } else if (url === '/about') {
                title = 'About';
                message = 'Learn more about us';
            } else if (url === '/contact') {
                title = 'Contact';
                message = 'Get in touch';
            } else {
                // 404 помилка (Пункт №2 та №7)
                res.statusCode = 404;
                const body = generateHTML('Page Not Found', '<p>The page you are looking for does not exist.</p>');
                res.setHeader('Content-Length', Buffer.byteLength(body));
                return res.end(body);
            }

            const body = generateHTML(title, `<p>${message}</p>`);
            res.setHeader('Content-Length', Buffer.byteLength(body));
            return res.end(body);
        }

        // МАРШРУТИЗАЦІЯ POST (Пункт №3 та №5)
        if (method === 'POST' && url === '/submit') {
            let body = '';
            const MAX_SIZE = 1 * 1024 * 1024; // 1 МБ (Пункт №5)

            req.on('data', (chunk) => {
                body += chunk.toString();
                if (body.length > MAX_SIZE) {
                    res.statusCode = 413; // Payload Too Large (Пункт №7)
                    res.end(generateHTML('Error', '<p>413 Payload Too Large</p>'));
                    req.destroy();
                }
            });

            req.on('end', () => {
                if (res.writableEnded) return;

                const parsedData = querystring.parse(body);
                const { name, email } = parsedData;

                // Валідація (Пункт №5 та №7)
                if (!name || !email || name.trim() === '' || email.trim() === '') {
                    res.statusCode = 400;
                    return res.end(generateHTML('Bad Request', '<p>Invalid form data. Name and Email are required.</p>'));
                }

                // Успішна відповідь з санітизацією (Пункт №3)
                const successContent = `
                    <h1>Form Submitted</h1>
                    <p>Name: ${sanitize(name)}</p>
                    <p>Email: ${sanitize(email)}</p>
                `;
                const responseHTML = generateHTML('Form Submitted', successContent);
                res.setHeader('Content-Length', Buffer.byteLength(responseHTML));
                res.end(responseHTML);
            });
            return;
        }

        // Якщо шлях не знайдено для інших методів
        res.statusCode = 404;
        res.end(generateHTML('Not Found', '<p>Page Not Found</p>'));

    } catch (error) {
        // Обробка 500 помилки (Пункт №7)
        console.error('Server Error:', error);
        res.statusCode = 500;
        res.end(generateHTML('Server Error', '<p>Internal Server Error</p>'));
    }
});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});