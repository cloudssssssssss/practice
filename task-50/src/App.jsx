import { useState, useMemo, useCallback } from 'react';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Вивчити React', completed: false },
    { id: 2, text: 'Здати ДЗ 50.1', completed: false },
  ]);
  const [count, setCount] = useState(0);

  // useCallback: функція не перестворюється при кожному рендері App
  const toggleTodo = useCallback((id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  // useMemo: складне обчислення виконується лише коли змінюється список todos
  const completedCount = useMemo(() => {
    console.log('Calculating completed count...');
    return todos.filter(t => t.completed).length;
  }, [todos]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>HW 50.1: Optimization (Memoization) 🚀</h1>
      
      <div style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
        <h3>Незалежний лічильник: {count}</h3>
        <button onClick={() => setCount(c => c + 1)}>Збільшити лічильник</button>
        <p><small>(При кліку на цю кнопку список справ НЕ рендериться заново завдяки React.memo)</small></p>
      </div>

      <div>
        <h3>Список справ (Виконано: {completedCount})</h3>
        <ul>
          {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;