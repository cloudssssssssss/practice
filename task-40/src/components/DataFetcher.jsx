import { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users?_limit=3')
      .then(res => {
        if (!res.ok) throw new Error('Помилка мережі');
        return res.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Завантаження користувачів...</p>;
  if (error) return <p style={{ color: 'red' }}>Помилка: {error}</p>;

  return (
    <div style={{ border: '2px solid blue', padding: '15px' }}>
      <h3>Дані з сервера:</h3>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} — {user.email}</li>
        ))}
      </ul>
    </div>
  );
};
export default DataFetcher;