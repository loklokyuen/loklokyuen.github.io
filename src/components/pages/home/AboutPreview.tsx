import profileImage from "../../../assets/profile.jpeg";
import Eyebrow from "../../common/Eyebrow";
import SectionLink from "../../common/SectionLink";

const AboutPreview = () => {
	return (
		<section className="home-section about-preview-section">
			<div className="about-preview-grid">
				<div className="about-preview-visual">
					<div className="about-preview-photo-wrap">
						<img
							src={profileImage}
							alt="Melody Yuen"
							className="about-preview-photo"
						/>
					</div>
				</div>
				<div className="about-preview-text">
					<Eyebrow>About me</Eyebrow>
					<h2 className="about-preview-headline">
						<em className="accent-coral">Curious mind.</em> Problem solver.{" "}
						<em className="accent-sage">Always learning.</em>
					</h2>
					<p className="about-preview-body">
						Software developer for 2 years at Gleneagles Hospital, Hong Kong, now
						focused on building LLM-powered tools and data products. Off the
						keyboard, I draw, sketch in watercolour, and shoot portraits and travel
						photography.
					</p>
					<SectionLink to="/about">More about me</SectionLink>
				</div>
			</div>
		</section>
	);
};

export default AboutPreview;
