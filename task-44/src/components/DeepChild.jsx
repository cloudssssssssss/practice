import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function DeepChild() {
  const { user, theme, toggleTheme } = useContext(AppContext);

  const style = {
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: theme === 'dark' ? '#333' : '#eee',
    color: theme === 'dark' ? '#fff' : '#000',
    marginTop: '10px'
  };

  return (
    <div style={style}>
      <h4>Я — компонент 3-го рівня 🐣</h4>
      <p>Юзер з контексту: <strong>{user.name}</strong></p>
      <p>Статус: {user.level}</p>
      <button onClick={toggleTheme}>Змінити тему</button>
    </div>
  );
}