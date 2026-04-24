import DeepChild from './DeepChild';

export default function MiddleParent() {
  return (
    <div style={{ border: '1px dashed gray', padding: '20px', margin: '10px' }}>
      <h3>Я — компонент 2-го рівня (Просто стою поруч) 👤</h3>
      <DeepChild />
    </div>
  );
}