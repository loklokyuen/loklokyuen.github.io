import { useEffect, useRef, useState } from 'react';
import Skill from './Skill';
import WorkXPImage from '../assets/work-xp.png';
import NewsFrontendImage from '../assets/news-frontend.png';

interface Project {
  title: string;
  description: string;
  technologies: SkillName[];
  github: string;
  demo: string;
  image: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'Work-XP Mobile Application',
      description: 'A React Native (Expo) app with TypeScript built in a group of 6 to connect students with short-term work opportunities and businesses with hiring needs.',
      technologies: ['React Native', 'TypeScript', 'Firebase Authentication', 'Firestore', 'Cloudinary', 'React Native Paper'],
      github: 'https://github.com/loklokyuen/work-xp',
      demo: 'https://work-xp.netlify.app',
      image: WorkXPImage
    },
    {
      title: 'News and Discussion Web Platform - Backend',
      description: 'A RESTful API built with Node.js and Express.js to handle news articles, users, comments, and votes with PostgreSQL database.',
      technologies: ['JavaScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Jest', 'GitHub Actions', 'Supabase'],
      github: 'https://github.com/loklokyuen/news-website-project',
      demo: 'https://news-and-discussion-platform.onrender.com/api',
      image: '/images/news-api.jpg'
    },
    {
      title: 'News and Discussion Web Platform - Frontend',
      description: 'A responsive React application for community content sharing and discussion with interactive features including pagination, topic filtering and voting system.',
      technologies: ['JavaScript', 'React', 'Tailwind CSS', 'React Router', 'Axios', 'Netlify'],
      github: 'https://github.com/loklokyuen/nc-news',
      demo: 'https://news-and-discussion.netlify.app',
      image: NewsFrontendImage
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [skillsVisible, setSkillsVisible] = useState<number[]>([]);

  const [loaded, setLoaded] = useState(false);
  const projectsRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setLoaded(true);
                    observer.unobserve(entry.target);
                    const skillCount = projects[currentIndex].technologies.length;
                  for (let i = 0; i < skillCount; i++) {
                    setTimeout(() => {
                      setSkillsVisible(prev => [...prev, i]);
                    }, i * 100); 
                  }
                } else {
                    setLoaded(false);
                    setSkillsVisible([]);
                }
            });
        }, { threshold: 0.1 }
    );
    if (projectsRef.current) {
        observer.observe(projectsRef.current);
    }
    return () => {
        if (projectsRef.current) {
            observer.unobserve(projectsRef.current);
        }
    };
  }, [currentIndex]);
  
  const goToNextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };
  
  const goToPrevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };
  
  const handleSelectProject = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentIndex(Number(event.target.value));
  };
  
  const currentProject = projects[currentIndex];

  return (
    <section className={`projects animate-on-load slide-up ${loaded? 'loaded': ''} max-w-2xl mx-auto`} id="projects" ref={projectsRef}>
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="project-navigation">
          <select 
            value={currentIndex} 
            onChange={handleSelectProject}
            className="project-dropdown"
          >
            {projects.map((project, index) => (
              <option key={index} value={index}>
                {project.title}
              </option>
            ))}
          </select>
        </div>
        
        <div className="project-display flex flex-row items-center justify-center">
          <button 
            onClick={goToPrevProject} 
            className="nav-arrow prev"
            aria-label="Previous project"
          >
            <i className="fa-solid fa-arrow-left text-primary-600"></i>
          </button>
          
          <div className="project-card">
            <div className="project-image place-items-center">
              <img src={currentProject.image} alt={currentProject.title} className='object-contain max-h-full max-w-full'/>

            </div>
            <div className="project-info">
              <h3>{currentProject.title}</h3>
              <p>{currentProject.description}</p>
              <div className="technologies flex flex-row flex-wrap items-center justify-center">
                {currentProject.technologies.map((tech, index) => (
                  <div 
                    className={`skill-item place-items-center rounded-xl bg-primary-100 basis-auto animate-on-load slide-up`} 
                    key={index} 
                    style={{
                      borderRadius: '50%', 
                      margin: '10px', 
                      padding: '10px',
                      opacity: skillsVisible.includes(index) ? 1 : 0,
                      transform: skillsVisible.includes(index) ? 'translateY(0)' : 'translateY(20px)',
                      transition: 'opacity 0.4s ease, transform 0.4s ease'
                    }}
                  >
                  <Skill skillName={tech} />
                  </div>
                  // <span className="tech-tag" key={index}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={currentProject.github} className="btn small" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={currentProject.demo} className="btn small secondary" target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          </div>
          
          <button 
            onClick={goToNextProject} 
            className="nav-arrow next"
            aria-label="Next project"
          >
            <i className="fa-solid fa-arrow-right text-primary-600"></i>
          </button>
        </div>
        
        <div className="project-indicators">
          {projects.map((_, index) => (
            <span 
              key={index} 
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
