import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import SocialLinks from "../../common/SocialLinks";
import Typewriter from "../../ui/Typewriter";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";

const Intro = () => {
	const [loaded, setLoaded] = useState(false);
	const { ref: introRef, isVisible } = useIntersectionObserver<HTMLElement>();

	useEffect(() => {
		if (isVisible) {
			setLoaded(true);
		}
	}, [isVisible]);

	return (
		<section
			className={`intro animate-on-load slide-up ${loaded ? "loaded" : ""}`}
			id="home"
			ref={introRef}>
			<div className="container">
				<div
					className="intro-content"
					style={{ paddingTop: "12rem", paddingBottom: "5rem" }}>
					<div
						className={`animate-on-load slide-right text-wrap ${
							loaded ? "loaded" : ""
						}`}>
						<h1>
							Hello, I'm <span className="highlight text-6xl">Melody Yuen</span>
						</h1>
						<div
							className="w-full max-w-sm mx-auto mb-2"
							style={{
								opacity: loaded ? 1 : 0,
								transition: "opacity 0.5s ease 0.8s",
							}}>
							{loaded && (
								<Typewriter
									text="Junior Software Developer"
									delay={80}
									className="text-sm"
								/>
							)}
						</div>
						<div className="text-wrap max-w-xl mx-auto">
							<p>
								Experienced in JavaScript, TypeScript, React, React Native, and
								Node.js.
							</p>
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
