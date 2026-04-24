import Counter from './components/Counter';

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'Arial' }}>
      <h1>HW 45.1: Redux Toolkit Integration 💜</h1>
      <p>Стан тепер зберігається у глобальному Store</p>
      <Counter />
    </div>
  );
}

export default App;