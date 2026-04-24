const Input = ({ placeholder, type = 'text', onChange }) => {
  return (
    <input 
      type={type} 
      placeholder={placeholder} 
      onChange={onChange} 
      style={{ padding: '10px', margin: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
    />
  );
};
export default Input;