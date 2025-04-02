import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { NavLink } from "react-router-dom";
import Skill from "../../common/Skill";
import { useState } from "react";

interface ProjectPreviewProps {
	project: Project;
}

const ProjectPreview = ({ project }: ProjectPreviewProps) => {
	const { projectId } = project;
	const [imageLoaded, setImageLoaded] = useState(false);

	const coverImage =
		project.type === "fullstack"
			? project.details.coverImage
			: project.frontend.details.coverImage;

	const allTechnologies =
		project.type === "fullstack"
			? project.details.technologies
			: [
					...new Set([
						...project.frontend.details.technologies,
						...project.backend.details.technologies,
					]),
			  ];

	// Limit to 8 technologies for display
	const displayTechCount = Math.min(allTechnologies.length, 8);
	const displayTechnologies = allTechnologies.slice(0, displayTechCount);
	const hasMoreTech = allTechnologies.length > 8;

	return (
		<Card className="card max-w-md m-4 mx-auto w-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-xl overflow-hidden relative group">
			<div className="relative overflow-hidden" style={{ height: "260px" }}>
				{!imageLoaded && (
					<div className="absolute inset-0 flex items-center justify-center bg-gray-100">
						<div className="small-loader"></div>
					</div>
				)}
				<CardMedia
					sx={{
						height: 260,
						transition: "all 0.5s ease",
						opacity: imageLoaded ? 1 : 0, // Hide image until loaded
					}}
					image={coverImage}
					title={project.title}
					className="hover:scale-105 transition-transform duration-700"
					onLoad={() => setImageLoaded(true)}
					component="img"
				/>
			</div>

			<CardContent className="flex flex-col items-center justify-center p-3 pb-1">
				<h3 className="font-semibold text-lg hover:scale-105 hover:transform-3d duration-300">
					{project.title}
				</h3>

				<div className="flex flex-wrap justify-center gap-2 mt-2">
					{displayTechnologies.map((tech) => (
						<div
							key={tech}
							className="bg-primary-100 rounded-full p-1 shadow-sm">
							<Skill skillName={tech} size="small" />
						</div>
					))}
					{hasMoreTech && (
						<div className="bg-primary-100 rounded-full px-2 text-xs flex items-center shadow-sm">
							+{allTechnologies.length - 8}
						</div>
					)}
				</div>
			</CardContent>

			<CardActions>
				<div className="flex justify-center w-full p-2 pt-0">
					<NavLink
						to={`/projects/${projectId}`}
						className="btn small shadow-md hover:shadow-lg transition-all w-full text-center">
						View Details
					</NavLink>
				</div>
			</CardActions>
		</Card>
	);
};

export default ProjectPreview;
