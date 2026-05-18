import { useEffect, useState } from "react";
import profileImage from "../../../assets/profile.jpeg";
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
							I'm a full stack developer focused on practical AI and data-driven
							products. My recent work has centred on Python data pipelines,
							retrieval workflows, LLM-powered tools, Streamlit prototypes, and
							cloud deployments.
						</p>
						<p>
							Before moving into AI-focused development, I spent 2 years as a
							software developer at Gleneagles Hospital Hong Kong, working on
							internal mobile and web applications in a sensitive-data
							environment. I later trained in full stack JavaScript at
							Northcoders and completed the Frontier AI programme at Digital
							Futures.
						</p>
						<p>
							I enjoy work where product thinking, reliable engineering, and
							clear user experience meet: tools that help people search, decide,
							learn, or get through operational work faster.
						</p>

						<div className="about-beyond">
							<h3 className="about-interests-title">Beyond the code</h3>
							<ul className="about-beyond-list">
								<li>
									<span className="about-beyond-label">Photography</span>
									Portraits, travel, concerts, flowers and quiet everyday
									details. I like to think about the colours and composition.
									Back in Hong Kong, I self-published several photobooks for a
									singer I supported, and enjoyed shaping the photos into a
									finished collection.
								</li>
								<li>
									<span className="about-beyond-label">Drawing</span>
									Pencil sketching and watercolour. Drawing slows me down in a
									good way, it calms me and makes me more observant.
								</li>
								<li>
									<span className="about-beyond-label">Background</span>
									Psychology and Computer Science at the University of Hong
									Kong.
								</li>
								<li>
									<span className="about-beyond-label">Exchange</span>
									One semester each at Keio University in Tokyo and Yonsei
									University in Seoul.
								</li>
							</ul>
						</div>

						<NavLink to="/contact" className="btn secondary">
							Contact Me
						</NavLink>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
