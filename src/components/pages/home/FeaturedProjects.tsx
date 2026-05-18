import { projects } from "../../../data/projects";
import Eyebrow from "../../common/Eyebrow";
import SectionLink from "../../common/SectionLink";
import FeaturedProjectCard from "./FeaturedProjectCard";

const FEATURED_IDS = ["skincare-advisor", "school-of-dandori", "value-stream"];

const FeaturedProjects = () => {
	const featured = FEATURED_IDS.map((id) =>
		projects.find((p) => p.projectId === id)
	).filter((p): p is Project => Boolean(p));

	return (
		<section className="home-section featured-projects-section">
			<div className="home-section-header">
				<Eyebrow>Featured Projects</Eyebrow>
				<SectionLink to="/projects">View all projects</SectionLink>
			</div>
			<div className="featured-grid">
				{featured.map((project) => (
					<FeaturedProjectCard key={project.projectId} project={project} />
				))}
			</div>
		</section>
	);
};

export default FeaturedProjects;
