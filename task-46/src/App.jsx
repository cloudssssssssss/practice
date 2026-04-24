import TodoList from './components/TodoList';

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>HW 46.1: Redux Thunk (Async) ⚡</h1>
      <div style={{ background: '#f4f4f4', padding: '20px', borderRadius: '10px' }}>
        <h3>Список справ з API:</h3>
        <TodoList />
      </div>
    </div>
  );
}

export default App;