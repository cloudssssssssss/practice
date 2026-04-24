import { useRef } from 'react';

const UncontrolledForm = () => {
  const inputRef = useRef(null);

  const showValue = () => {
    alert(`Значення з Ref: ${inputRef.current.value}`);
  };

  return (
    <div style={{ border: '2px solid purple', padding: '15px', marginBottom: '10px' }}>
      <h3>Uncontrolled Component</h3>
      <input type="text" ref={inputRef} placeholder="Пиши що завгодно..." />
      <button onClick={showValue}>Отримати дані</button>
    </div>
  );
};
export default UncontrolledForm;