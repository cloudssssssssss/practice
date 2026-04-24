const StatelessComponent = ({ value }) => {
  return (
    <div style={{ border: '2px solid blue', padding: '20px' }}>
      <h2>Я — Stateless (без стану)</h2>
      <p>Я просто показую те, що мені дали: <b>{value}</b></p>
    </div>
  );
};
export default StatelessComponent;