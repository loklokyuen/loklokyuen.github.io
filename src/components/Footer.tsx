import SocialLinks from "./SocialLinks";
import { NavLink } from 'react-router';

const Footer = () => {
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          
          <div className="footer-links p-2">
            <ul className="flex flex-row gap-5 justify-center">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/skills">Skills</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </ul>
          </div>
          
        </div>
        <div className="footer-bottom">
          <span>&copy; 2025 Melody Yuen. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
