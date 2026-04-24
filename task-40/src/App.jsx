import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';
import DataFetcher from './components/DataFetcher';

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '20px' }}>
      <h1>Task 40: Controlled, Uncontrolled & API</h1>
      <ControlledForm />
      <UncontrolledForm />
      <DataFetcher />
    </div>
  );
}
export default App;