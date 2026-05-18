import { NavLink } from "react-router-dom";
import Eyebrow from "../../common/Eyebrow";

interface ProjectRowProps {
	project: Project;
	index: number;
}

const stripMarkdown = (text: string) => text.replace(/\*\*/g, "");

const summarise = (text: string) => {
	const cleaned = stripMarkdown(text);
	if (cleaned.length <= 220) return cleaned;
	const trimmed = cleaned.slice(0, 220);
	const lastSpace = trimmed.lastIndexOf(" ");
	return trimmed.slice(0, lastSpace).trim() + "…";
};

const ProjectRow = ({ project, index }: ProjectRowProps) => {
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

	const MAX_TAGS = 6;
	const overflowCount = Math.max(technologies.length - MAX_TAGS, 0);
	const displayTags = overflowCount > 0 ? technologies.slice(0, MAX_TAGS) : technologies;
	const showMore = overflowCount > 0;
	const summary = summarise(details.intro);
	const previewImg = details.previewImage ?? details.images?.[0]?.url ?? null;

	const isReversed = index % 2 === 1;

	return (
		<article
			className={`project-row ${isReversed ? "project-row-reverse" : ""}`}>
			<div className="project-row-image">
				<NavLink
					to={`/projects/${project.projectId}`}
					aria-label={`View ${project.title}`}
					className="project-row-image-link">
					<div className="project-row-image-wrap">
						<img
							src={details.coverImage}
							alt={project.title}
							loading="lazy"
							className="project-row-cover"
						/>
						{previewImg && (
							<img
								src={previewImg}
								alt={`${project.title} interface`}
								loading="lazy"
								className="project-row-preview"
							/>
						)}
					</div>
				</NavLink>
			</div>
			<div className="project-row-text">
				<Eyebrow>{project.category}</Eyebrow>
				<div className="project-row-titlebar">
					<h2 className="project-row-title">{project.title}</h2>
					<div className="project-team-meta">
						{project.team ? (
							<>
								<span className="badge badge-coral">
									Team of {project.team.size}
								</span>
								<span className="project-team-role">{project.team.role}</span>
							</>
						) : (
							<span className="badge badge-sage">Solo</span>
						)}
					</div>
				</div>
				<p className="project-row-summary">{summary}</p>
				<div className="project-row-tags">
					{displayTags.map((tag) => (
						<span key={tag} className="featured-tag">
							{tag}
						</span>
					))}
					{showMore && (
						<span className="featured-tag featured-tag-more">
							+{overflowCount} more
						</span>
					)}
				</div>
				<div className="project-row-actions">
					<NavLink to={`/projects/${project.projectId}`} className="btn">
						View Details
					</NavLink>
					<a
						href={details.github}
						className="btn outline"
						target="_blank"
						rel="noopener noreferrer">
						<i className="fa-brands fa-github" aria-hidden="true"></i> GitHub
					</a>
					{details.demo && project.projectId !== "portfolio" && (
						<a
							href={details.demo}
							className="btn outline"
							target="_blank"
							rel="noopener noreferrer">
							<i className="fa-solid fa-globe" aria-hidden="true"></i> Live Demo
						</a>
					)}
				</div>
			</div>
		</article>
	);
};

export default ProjectRow;
