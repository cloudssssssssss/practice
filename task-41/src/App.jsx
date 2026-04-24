import { Suspense } from 'react';
import MessageComponent from './components/MessageComponent';

// Симулюємо затримку сервера
const fetchMessage = new Promise((resolve) => {
  setTimeout(() => resolve("🚀 Хук use() успішно відпрацював!"), 2000);
});

function App() {
  return (
    <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>HW 41.1: React Hook use()</h1>
      
      {/* Suspense обов'язковий при використанні use() з промісами */}
      <Suspense fallback={<h2>⏳ Завантаження повідомлення...</h2>}>
        <MessageComponent messagePromise={fetchMessage} />
      </Suspense>
    </div>
  );
}

export default App;