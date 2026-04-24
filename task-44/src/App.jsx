import { AppProvider } from './context/AppContext';
import MiddleParent from './components/MiddleParent';

function App() {
  return (
    <AppProvider>
      <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial' }}>
        <h1>HW 44.1: React Context API 🧠</h1>
        <p>Дані записуються!</p>
        <MiddleParent />
      </div>
    </AppProvider>
  );
}

export default App;