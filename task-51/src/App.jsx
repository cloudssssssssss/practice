import { useState } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import { ToastContainer, toast } from 'react-toastify';
import { FaUserSecret, FaRegSmileBeam, FaRocket } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isIdle, setIsIdle] = useState(false);

  // Налаштування Idle Timer (5 секунд бездіяльності для тесту)
  const onIdle = () => {
    setIsIdle(true);
    toast.warning("Гей! Ти де зник? Повертайся до роботи! 😴");
  };

  const onActive = () => {
    setIsIdle(false);
    toast.success("О, ти знову тут! Працюємо далі! 🚀");
  };

  useIdleTimer({
    timeout: 5000, // 5 секунд
    onIdle,
    onActive,
    debounce: 500
  });

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h1>HW 51.1: Specialized Libraries 📚</h1>
      
      <div style={{ fontSize: '50px', margin: '20px' }}>
        {isIdle ? <FaUserSecret color="gray" /> : <FaRegSmileBeam color="orange" />}
      </div>

      <h2>Статус: {isIdle ? "Спить 😴" : "Активний 🔥"}</h2>
      
      <button 
        onClick={() => toast.info("Кнопка з іконкою натиснута! 🚀")}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        <FaRocket style={{ marginRight: '10px' }} />
        Натисни мене
      </button>

      <p style={{ marginTop: '20px', color: '#666' }}>
        Посидь 5 секунд, нічого не рухаючи, щоб спрацював <strong>Idle Timer</strong>.
      </p>

      {/* Контейнер для сповіщень */}
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
}

export default App;