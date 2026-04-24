import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos } from '../redux/slices/todoSlice';

export default function TodoList() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.todos);

  useEffect(() => {
    if (status === 'idle') dispatch(fetchTodos());
  }, [status, dispatch]);

  if (status === 'loading') return <p>Завантаження даних... ⏳</p>;
  if (status === 'failed') return <p>Помилка: {error}</p>;

  return (
    <ul style={{ textAlign: 'left', display: 'inline-block' }}>
      {items.map(todo => (
        <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.title}
        </li>
      ))}
    </ul>
  );
}