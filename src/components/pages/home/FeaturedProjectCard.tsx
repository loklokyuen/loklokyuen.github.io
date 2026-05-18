import { NavLink } from "react-router-dom";

interface FeaturedProjectCardProps {
	project: Project;
}

const stripMarkdown = (text: string) => text.replace(/\*\*/g, "");

const firstSentence = (text: string) => {
	const cleaned = stripMarkdown(text);
	const match = cleaned.match(/^[^.!?]*[.!?]/);
	return match ? match[0].trim() : cleaned.slice(0, 160);
};

const FeaturedProjectCard = ({ project }: FeaturedProjectCardProps) => {
	const details =
		project.type === "fullstack"
			? project.details
			: project.frontend.details;

	const technologies =
		project.type === "fullstack"
			? project.details.technologies
			: Array.from(
					new Set([
						...project.frontend.details.technologies,
						...project.backend.details.technologies,
					])
			  );

	const displayTags = technologies.slice(0, 4);
	const summary = firstSentence(details.intro);
	const previewImg = details.previewImage ?? details.images?.[0]?.url ?? null;

	return (
		<NavLink
			to={`/projects/${project.projectId}`}
			className="featured-card group">
			<div className="featured-card-image">
				<img
					src={details.coverImage}
					alt={project.title}
					loading="lazy"
					className="featured-card-cover"
				/>
				{previewImg && (
					<img
						src={previewImg}
						alt={`${project.title} interface`}
						loading="lazy"
						className="featured-card-preview"
					/>
				)}
			</div>
				<div className="featured-card-body">
					<div className="featured-card-titlebar">
						<h3 className="featured-card-title">{project.title}</h3>
						{project.team ? (
							<span className="featured-card-role">{project.team.role}</span>
						) : null}
					</div>
					<p className="featured-card-summary">{summary}</p>
				<div className="featured-card-tags">
					{displayTags.map((tag) => (
						<span key={tag} className="featured-tag">
							{tag}
						</span>
					))}
				</div>
			</div>
		</NavLink>
	);
};

export default FeaturedProjectCard;
