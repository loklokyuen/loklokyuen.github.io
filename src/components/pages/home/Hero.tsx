import { NavLink } from "react-router-dom";
import profileImage from "../../../assets/Melody_Yuen.jpg";
import Eyebrow from "../../common/Eyebrow";
import SocialLinks from "../../common/SocialLinks";

const Hero = () => {
	return (
		<section className="hero-section" id="home">
			<div className="hero-grid">
				<div className="hero-text">
					<Eyebrow className="hero-eyebrow">Hi, I'm Melody</Eyebrow>
					<h1 className="hero-headline">
						Full-stack developer who builds{" "}
						<em className="accent-coral">useful</em> tools at the edge of{" "}
						<em className="accent-sage">AI</em> and{" "}
						<em className="accent-sage">data</em>.
					</h1>
					<p className="hero-body">
						I combine software engineering, data, and AI to build products that
						solve meaningful problems for users and businesses.
					</p>
					<div className="hero-ctas">
						<NavLink to="/projects" className="btn">
							View My Projects
						</NavLink>
						<NavLink to="/contact" className="btn outline">
							Let's Connect
						</NavLink>
					</div>
					<div className="hero-find">
						<Eyebrow>Find me on</Eyebrow>
						<SocialLinks variant="compact" />
					</div>
				</div>

				<div className="hero-visual">
					<div className="hero-photo-wrap">
						<img
							src={profileImage}
							alt="Melody Yuen"
							className="hero-photo"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
