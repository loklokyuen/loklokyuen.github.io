import { NavLink } from "react-router-dom";
import SocialLinks from "./SocialLinks";
import { useEffect, useRef, useState } from "react";
const Intro = () => {
	const [loaded, setLoaded] = useState(false);
	const introRef = useRef<HTMLElement>(null);
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setLoaded(true);
						observer.unobserve(entry.target);
					} else {
						setLoaded(false);
					}
				});
			},
			{ threshold: 0.1 }
		);
		if (introRef.current) {
			observer.observe(introRef.current);
		}
		return () => {
			if (introRef.current) {
				observer.unobserve(introRef.current);
			}
		};
	}, []);
	return (
		<section
			className={`intro animate-on-load slide-up ${loaded ? "loaded" : ""}`}
			id="home"
			ref={introRef}>
			<div className="container">
				<div
					className="intro-content"
					style={{ paddingTop: "10rem", paddingBottom: "5rem" }}>
					<div
						className={`animate-on-load slide-right ${loaded ? "loaded" : ""}`}>
						<h1>
							Hello, I'm <span className="highlight">Melody Yuen</span>
						</h1>
						<div className="typewriter w-xs mx-auto mb-2">
							<h2>Full Stack Software Developer</h2>
						</div>
					</div>
					<div className="cta-buttons">
						<NavLink to="/projects" className="btn primary">
							View My Work
						</NavLink>
						<NavLink to="/contact" className="btn secondary">
							Contact Me
						</NavLink>
					</div>
					<SocialLinks />
				</div>
			</div>
		</section>
	);
};

export default Intro;
