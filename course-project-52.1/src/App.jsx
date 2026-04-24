import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, toggleTodo, deleteTodo } from './features/todos/model/todosSlice';
import TodoForm from './components/TodoForm';

function App() {
  const { items, status } = useSelector(state => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') dispatch(fetchTodos());
  }, [dispatch, status]);

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>🎯 Course Project: Task Manager</h1>
      <TodoForm />
      <div style={{ textAlign: 'left' }}>
        {items.map(todo => (
          <div key={todo.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #eee' }}>
            <span 
              onClick={() => dispatch(toggleTodo(todo.id))}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
            >
              {todo.title}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))} style={{ color: 'red' }}>Видалити</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;