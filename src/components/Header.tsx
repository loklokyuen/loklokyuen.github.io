import { useState } from 'react';
import '../styles/Header.css';
import { NavLink } from 'react-router-dom';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ darkMode, toggleDarkMode }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${darkMode ? 'dark' : ''}`}>
      <div className="flex flex-row justify-between items-center ">
        <div className="header-logo text-start">
          <NavLink to="/">
            <span className='text-xl font-semibold font-stretch-140%'>Melody Yuen</span>
          </NavLink>
        </div>

        <div className={`nav ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li onClick={toggleMenu}><NavLink to="/">Home</NavLink></li>
            <li onClick={toggleMenu}><NavLink to="/about">About</NavLink></li>
            <li onClick={toggleMenu}><NavLink to="/skills">Skills</NavLink></li>
            <li onClick={toggleMenu}><NavLink to="/projects">Projects</NavLink></li>
            <li onClick={toggleMenu}><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        <div className="header-buttons">
          <button className="theme-toggle w-16 text-center" onClick={toggleDarkMode}>
            {darkMode ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
          </button>
          <button className="menu-toggle w-16 text-center" onClick={toggleMenu}>
            {menuOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
