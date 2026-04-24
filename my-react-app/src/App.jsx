import { useState } from 'react'
import Button from './components/Button'
import Input from './components/Input'

function App() {
  const [value, setValue] = useState('')

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Мій React Проєкт</h1>
      <Input 
        placeholder="Введіть текст..." 
        onChange={(e) => setValue(e.target.value)} 
      />
      <Button 
        text="Натисни мене" 
        onClick={() => alert(`Ви ввели: ${value}`)} 
      />
      <p>Текст у стані: {value}</p>
    </div>
  )
}

export default App