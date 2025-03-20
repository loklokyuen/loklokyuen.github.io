import { Box, Chip, Modal } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useEffect, useRef, useState } from "react";
import Skill from "./Skill";

interface ProjectProps {
	project: Project;
	open: boolean;
	onClose: () => void;
	isDarkMode: boolean;
}

const ProjectModal = ({ project, open, onClose, isDarkMode }: ProjectProps) => {
	const [loaded, setLoaded] = useState(false);
	const [projectDetails, setProjectDetails] = useState<ProjectDetails>();
	const [skillsVisible, setSkillsVisible] = useState<number[]>([]);
	const projectRef = useRef<HTMLElement>(null);
	useEffect(() => {
		if (!open) return;
		if (project.type === "separated") {
			setProjectDetails(project.frontend.details);
		} else {
			setProjectDetails(project.details);
		}
	}, [project, open]);

	useEffect(() => {
		if (!open || !projectDetails) return;
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setLoaded(true);
						observer.unobserve(entry.target);
						const skillCount = projectDetails?.technologies.length || 0;
						for (let i = 0; i < skillCount; i++) {
							setTimeout(() => {
								setSkillsVisible((prev) => [...prev, i]);
							}, i * 100);
						}
					} else {
						setLoaded(false);
						setSkillsVisible([]);
					}
				});
			},
			{ threshold: 0.1 }
		);
		if (projectRef.current) {
			observer.observe(projectRef.current);
		}
		return () => {
			if (projectRef.current) {
				observer.unobserve(projectRef.current);
			}
		};
	}, [open, projectDetails]);

	const goToBackend = () => {
		if (project.type === "separated") {
			setProjectDetails(project.backend.details);
		}
	};
	const goToFrontend = () => {
		if (project.type === "separated") {
			setProjectDetails(project.frontend.details);
		}
	};
	return (
		<Modal
			open={open}
			onClose={onClose}
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				zIndex: 1000,
			}}>
			<Box
				className={`project-modal animate-on-load slide-up ${
					loaded ? "loaded" : ""
				} 
            rounded-4xl place-content-center place-items-center max-w-md md:max-w-2xl mx-auto`}
				id="project"
				ref={projectRef}
				sx={{
					backgroundColor: isDarkMode ? "#1a4460" : "#f2f9fd",
					color: isDarkMode ? "#f2f9fd" : "#1a4460",
				}}>
				<h3 className="font-bold p-3 pb-0 text-center">{project.title}</h3>
				<button
					onClick={onClose}
					className="absolute top-0 right-0 btn"
					style={{
						backgroundColor: "transparent",
						color: isDarkMode ? "#e4f0fa" : "#1a4460",
					}}>
					<i className="fa-solid fa-xmark fa-lg"></i>
				</button>
				{project.type === "separated" && (
					<div className="flex flex-row justify-center">
						<ButtonGroup variant="contained" aria-label="Basic button group">
							<Button onClick={goToBackend} sx={{ backgroundColor: "#1f77aa" }}>
								Backend
							</Button>
							<Button
								onClick={goToFrontend}
								sx={{ backgroundColor: "#1f77aa" }}>
								Frontend
							</Button>
						</ButtonGroup>
					</div>
				)}
				{projectDetails && projectDetails.image && (
					<div className="project-image place-items-center">
						<img
							src={projectDetails.image}
							alt={project.title}
							className="object-contain max-h-full max-w-full mx-auto px-4 py-2"
						/>
					</div>
				)}
				<div className="project-info">
					<p className="text-center m-4">{projectDetails?.description}</p>
					<div className="technologies flex flex-row flex-wrap items-center justify-center m-2">
						{projectDetails &&
							projectDetails.technologies.map((tech, index) => (
								<div className="flex flex-col items-center" key={index}>
									<div
										className={`skill-item place-items-center rounded-xl bg-primary-100 animate-on-load slide-up hidden sm:block`}
										key={index}
										style={{
											borderRadius: "50%",
											margin: "10px",
											padding: "10px",
											opacity: skillsVisible.includes(index) ? 1 : 0,
											transform: skillsVisible.includes(index)
												? "translateY(0)"
												: "translateY(20px)",
											transition: "opacity 0.4s ease, transform 0.4s ease",
										}}>
										<Skill skillName={tech} size="small" />
									</div>
									<div className="sm:hidden items-center m-0.5">
										<Chip
											label={tech}
											sx={{
												backgroundColor: "#1f77aa",
												color: "#ffffff",
												margin: "2px",
											}}></Chip>
									</div>
								</div>
							))}
					</div>
					<div className="project-links flex flex-row justify-center gap-2 mb-4">
						<a
							href={projectDetails?.github}
							className="btn small"
							target="_blank"
							rel="noopener noreferrer">
							GitHub
						</a>
						<a
							href={projectDetails?.demo || undefined}
							className="btn small secondary"
							target="_blank"
							rel="noopener noreferrer">
							Live Demo
						</a>
					</div>
				</div>
			</Box>
		</Modal>
	);
};

export default ProjectModal;
