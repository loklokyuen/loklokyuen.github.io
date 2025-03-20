import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ProjectModal from "./ProjectModal";
import { useEffect, useState } from "react";

interface ProjectPreviewProps {
	project: Project;
	image: string | null;
}
const ProjectPreview = ({ project, image }: ProjectPreviewProps) => {
	const [open, setOpen] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(false);
	useEffect(() => {
		const isDark = document
			.getElementById("root")
			?.classList.contains("dark-mode");
		setIsDarkMode(!!isDark);
	}, [open]);
	return (
		<Card className="card max-w-md m-2 mx-auto w-full">
			<CardMedia
				sx={{ height: 200 }}
				image={image ? image : "https://via.placeholder.com/300"}
				title={project.title}
			/>
			<CardContent sx={{ height: 40 }}>
				<span className="font-semibold">{project.title}</span>
			</CardContent>
			<CardActions>
				<div className="flex justify-center place-items-center w-full">
					<button
						className="btn small m-0"
						onClick={() => {
							setOpen(true);
						}}>
						View Details
					</button>
					<ProjectModal
						project={project}
						open={open}
						onClose={() => {
							setOpen(false);
						}}
						isDarkMode={isDarkMode}
					/>
				</div>
			</CardActions>
		</Card>
	);
};

export default ProjectPreview;
