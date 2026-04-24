import React from 'react';

const TodoItem = React.memo(({ todo, onToggle }) => {
  console.log(`Render: ${todo.text}`); // Для демонстрації в консолі
  return (
    <li 
      onClick={() => onToggle(todo.id)}
      style={{ 
        textDecoration: todo.completed ? 'line-through' : 'none',
        cursor: 'pointer',
        padding: '5px' 
      }}
    >
      {todo.text}
    </li>
  );
});

export default TodoItem;