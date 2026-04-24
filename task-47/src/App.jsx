import MyForm from './components/MyForm';

function App() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>HW 47.1: Formik & Yup 📝</h1>
      <div style={{ maxWidth: '400px', margin: '0 auto', border: '1px solid #ccc', padding: '20px', borderRadius: '10px' }}>
        <MyForm />
      </div>
    </div>
  );
}

export default App;