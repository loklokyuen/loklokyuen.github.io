import React from 'react';

interface CVButtonProps {
  darkMode?: boolean;
  className?: string;
}

const CVButton: React.FC<CVButtonProps> = ({ darkMode = false, className = '' }) => {
  return (
    <a 
      href="/Melody_Yuen_resume.pdf" 
      download="Melody_Yuen_resume.pdf"
      className={`btn ${darkMode ? 'secondary' : ''} ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fas fa-file-download mr-2"></i> Download CV
    </a>
  );
};

export default CVButton;
