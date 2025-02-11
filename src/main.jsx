import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import Register from './components/Register.jsx'

createRoot(document.getElementById('root')).render(
    <Router>
      <Routes>
        {/* Define routes for different pages */}
        <Route path="/register" element={<Register />} />
        {/* You can add more routes here for other pages */}
      <Route path="/" element={<App />} />
      </Routes>
    </Router>
)
