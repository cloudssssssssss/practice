import { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Axios автоматично парсить JSON, тому беремо відразу response.data
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <h2 style={{ color: 'blue' }}>⏳ Завантаження даних через Axios...</h2>;
  if (error) return <h2 style={{ color: 'red' }}>❌ Помилка: {error}</h2>;

  return (
    <div style={{ border: '2px solid #007bff', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
      <h3>Список справ (Axios + useEffect):</h3>
      <ul style={{ textAlign: 'left', display: 'inline-block' }}>
        {data.map(item => (
          <li key={item.id}>
            {item.completed ? '✅' : '⭕'} {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;