import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  // Функція для стилізації активного посилання
  const navStyle = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
    color: isActive ? "white" : "#aaa",
    background: isActive ? "#007bff" : "transparent",
    padding: "8px 15px",
    borderRadius: "5px",
    textDecoration: "none",
    transition: "0.3s"
  });

  return (
    <BrowserRouter>
      <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'sans-serif' }}>
        <h1>HW 43.1: React Router 🚀</h1>
        
        <nav style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '15px', 
          background: '#333', 
          padding: '15px',
          borderRadius: '10px',
          marginBottom: '20px'
        }}>
          <NavLink to="/" style={navStyle}>Головна</NavLink>
          <NavLink to="/about" style={navStyle}>Про нас</NavLink>
          <NavLink to="/contact" style={navStyle}>Контакти</NavLink>
        </nav>

        <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;