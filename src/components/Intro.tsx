import { NavLink } from 'react-router';
import SocialLinks from './SocialLinks';
const Intro = () => {

  return (
    <section className="intro" id="home">
      <div className="container">
        <div className="intro-content" style={{paddingTop: '10rem', paddingBottom: '5rem'}}>
          <h1>Hello, I'm <span className="highlight">Melody Yuen</span></h1>
          <h2>Junior Software Developer</h2>
          <div className="cta-buttons">
            <NavLink to="/projects" className="btn primary">View My Work</NavLink>
            <NavLink to="/contact" className="btn secondary">Contact Me</NavLink>
          </div>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default Intro;
