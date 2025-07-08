import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './assets/pages/Home';
import Dashboard from './assets/pages/Dashboard';
import Reports from './assets/pages/Reports';

function App() {

  {document.documentElement.classList.add("dark")}

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/reports" element={<Reports />} /> */}
      </Routes>
    </Router>
  )
}

export default App
