import { NavLink } from "react-router-dom";
import Eyebrow from "../common/Eyebrow";
import SocialLinks from "../common/SocialLinks";
import SectionLink from "../common/SectionLink";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-band">
				<div className="footer-grid">
					<div className="footer-col">
						<Eyebrow>Now</Eyebrow>
						<p className="footer-col-body">
							Building LLM-powered tools and shipping small useful AI projects.
						</p>
					</div>
					<div className="footer-col">
						<Eyebrow>Approach</Eyebrow>
						<p className="footer-col-body">
							Clean code, useful interfaces, honest engineering. Learning what
							works in production.
						</p>
					</div>
					<div className="footer-col">
						<Eyebrow>Get in touch</Eyebrow>
						<SocialLinks variant="compact" className="footer-socials" />
						<SectionLink to="/contact" className="footer-contact-link">
							Let's connect
						</SectionLink>
					</div>
				</div>
				<div className="footer-divider" />
				<div className="footer-bottom">
					<ul className="footer-nav">
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/about">About</NavLink>
						</li>
						<li>
							<NavLink to="/skills">Skills</NavLink>
						</li>
						<li>
							<NavLink to="/projects">Projects</NavLink>
						</li>
						<li>
							<NavLink to="/contact">Contact</NavLink>
						</li>
					</ul>
					<span className="footer-copy">© 2025 Melody Yuen</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
