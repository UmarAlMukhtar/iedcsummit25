import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { SponsorForm } from './components/SponsorForm'
import StartupEOIForm from './components/StartupEOIForm';

// In your router

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/be-our-sponsor" element={<SponsorForm />} />
        <Route path="/startup-eoi" element={<StartupEOIForm />} />
      </Routes>
    </Router>
  </StrictMode>,
)
