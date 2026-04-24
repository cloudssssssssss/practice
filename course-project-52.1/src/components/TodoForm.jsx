import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/model/todosSlice';

export default function TodoForm() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input 
        value={text} 
        onChange={(e) => setText(e.target.value)}
        placeholder="Що потрібно зробити?"
        style={{ padding: '10px', width: '70%' }}
      />
      <button type="submit" style={{ padding: '10px' }}>Додати</button>
    </form>
  );
}