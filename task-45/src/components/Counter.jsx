import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../redux/slices/counterSlice';

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ border: '2px solid #764abc', padding: '20px', borderRadius: '15px' }}>
      <h2>Значення лічильника: <span style={{ color: '#764abc' }}>{count}</span></h2>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>Скинути</button>
      </div>
    </div>
  );
}