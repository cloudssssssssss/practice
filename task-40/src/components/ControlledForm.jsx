import { useState } from 'react';

const ControlledForm = () => {
  const [text, setText] = useState('');

  return (
    <div style={{ border: '2px solid orange', padding: '15px', marginBottom: '10px' }}>
      <h3>Controlled Component</h3>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Стежу за кожною літерою..."
      />
      <p>Стан у реальному часі: <strong>{text}</strong></p>
    </div>
  );
};
export default ControlledForm;