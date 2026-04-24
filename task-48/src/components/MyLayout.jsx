import { Card, Button, Input, Space, Typography } from 'antd';
import { RocketOutlined, SendOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const MyLayout = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <Card 
        title={<Title level={3}><RocketOutlined /> Ant Design Task</Title>}
        style={{ width: 400, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
        actions={[
          <Button type="primary" icon={<SendOutlined />}>Submit</Button>
        ]}
      >
        <Space direction="vertical" style={{ width: '100%' }}>
          <Text type="secondary">Це компоненти з професійної бібліотеки Ant Design</Text>
          <Input placeholder="Ваше ім'я" />
          <Input.Password placeholder="Ваш пароль" />
          <Card type="inner" title="Додаткова інформація">
            Все працює адаптивно та красиво!
          </Card>
        </Space>
      </Card>
    </div>
  );
};

export default MyLayout;