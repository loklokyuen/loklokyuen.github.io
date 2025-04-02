import { useEffect, useState } from "react";
import profileImage from "../../../assets/profile.jpeg";
import CVButton from "./CVButton";
import { NavLink } from "react-router-dom";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";

const About = () => {
	const { ref: aboutRef, isVisible } = useIntersectionObserver<HTMLElement>();
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		if (isVisible) {
			setLoaded(true);
		}
	}, [isVisible]);

	return (
		<section
			className={`about animate-on-load slide-up ${
				loaded ? "loaded" : ""
			} max-w-xl mx-auto`}
			id="about"
			ref={aboutRef}>
			<div className="container">
				<h2 className="section-title">About Me</h2>
				<div className="about-content m-2">
					<div className="about-image-container place-items-center mt-10 mx-auto">
						<img
							src={profileImage}
							alt="Melody Yuen"
							className="about-profile-image shadow-sm shadow-secondary-600 rounded-4xl w-48 mt-10 mx-auto"
						/>
					</div>
					<div className="about-text">
						<p>
							I'm a passionate junior software developer with a strong
							foundation in web technologies. I recently completed a full-stack
							development bootcamp at Northcoders and I'm excited to apply my
							skills in a professional environment.
						</p>
						<p>
							I enjoy solving complex problems and creating intuitive, dynamic
							user experiences. I'm constantly learning new technologies and
							techniques to become a better developer.
						</p>
						<p>
							I'm currently looking for new opportunities and would love to hear
							from you. Please feel free to get in touch or leave a message.
						</p>
						<NavLink to="/contact" className="btn secondary">
							Contact Me
						</NavLink>
						<CVButton />
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
