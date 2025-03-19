import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Intro from './components/Intro'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router'

function App() {
  const [darkMode, setDarkMode] = useState(false);


  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (newDarkMode) {
      document.getElementById('root')?.classList.add('dark-mode');
    } else {
      document.getElementById('root')?.classList.remove('dark-mode');
    }
  };
  
  useEffect(() => {
    if (darkMode) {
      document.getElementById('root')?.classList.add('dark-mode');
    } else {
      document.getElementById('root')?.classList.remove('dark-mode');
    }
  }, []);

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Intro />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
