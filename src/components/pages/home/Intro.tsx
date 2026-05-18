import Hero from "./Hero";
import FeaturedProjects from "./FeaturedProjects";
import TechStrip from "./TechStrip";
import AboutPreview from "./AboutPreview";

const Intro = () => {
	return (
		<div className="home-page">
			<Hero />
			<FeaturedProjects />
			<TechStrip />
			<AboutPreview />
		</div>
	);
};

export default Intro;
