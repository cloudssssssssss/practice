import { use } from 'react';

const MessageComponent = ({ messagePromise }) => {
  // Хук use() "розпаковує" проміс прямо в рендері
  const message = use(messagePromise);

  return (
    <div style={{ padding: '20px', border: '2px solid green', marginTop: '20px' }}>
      <h3>Повідомлення з промісу:</h3>
      <p>{message}</p>
    </div>
  );
};

export default MessageComponent;