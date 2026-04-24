import { useState } from 'react';
import StatelessComponent from './StatelessComponent';

const StatefulComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: '2px solid green', padding: '20px', marginTop: '20px' }}>
      <h2>Я — Stateful (зі станом)</h2>
      <button onClick={() => setCount(count + 1)}>Додати +1</button>
      
      {/* Передаємо частину свого стану в інший компонент */}
      <StatelessComponent value={count} />
    </div>
  );
};
export default StatefulComponent;