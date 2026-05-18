import { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import { Button, ButtonGroup } from "@mui/material";
import { projects } from "../../../data/projects";
import { formatMarkdownText } from "../../../utils/formatText";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import Eyebrow from "../../common/Eyebrow";

interface ProjectImage {
	url: string;
	description: string;
}

const Project = () => {
	const { projectId } = useParams();
	const navigate = useNavigate();
	const [loaded, setLoaded] = useState(false);
	const [project, setProject] = useState<Project | null>(null);
	const [projectDetails, setProjectDetails] = useState<ProjectDetails | null>(
		null
	);
	const [skillsVisible, setSkillsVisible] = useState<number[]>([]);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [images, setImages] = useState<ProjectImage[]>([]);
	const [prevProjectId, setPrevProjectId] = useState<string | null>(null);
	const [nextProjectId, setNextProjectId] = useState<string | null>(null);
	const [prevProjectTitle, setPrevProjectTitle] = useState<string>("");
	const [nextProjectTitle, setNextProjectTitle] = useState<string>("");
	const [imageLoading, setImageLoading] = useState(true);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const { ref: projectRef } = useIntersectionObserver<HTMLElement>({
		threshold: 0.05,
		rootMargin: "50px",
	});

	useEffect(() => {
		window.scrollTo(0, 0);
		setLoaded(true);
	}, [projectId]);

	useEffect(() => {
		const foundProject = projects.find((p) => p.projectId === projectId);

			if (foundProject) {
				setProject(foundProject);
				setCurrentImageIndex(0);
				setImageLoading(true);

				if (foundProject.type === "separated") {
					setProjectDetails(foundProject.frontend.details);
				const frontendImages =
					foundProject.frontend.details.images ||
					(foundProject.frontend.details.coverImage
						? [
								{
									url: foundProject.frontend.details.coverImage,
									description: "Frontend application view",
								},
						  ]
						: []);

				setImages(frontendImages);
			} else {
				setProjectDetails(foundProject.details);
				const fullstackImages =
					foundProject.details.images ||
					(foundProject.details.coverImage
						? [
								{
									url: foundProject.details.coverImage,
									description: "Application view",
								},
						  ]
						: []);

				setImages(fullstackImages);
			}
		} else {
			navigate("/projects");
		}
	}, [projectId, navigate]);
	useEffect(() => {
		if (!projectDetails) return;
		setSkillsVisible([]);
		const timer = setTimeout(() => {
			const skillCount = projectDetails.technologies.length;
			for (let i = 0; i < skillCount; i++) {
				setTimeout(() => {
					setSkillsVisible((prev) => [...prev, i]);
				}, i * 100);
			}
		}, 50);

		return () => clearTimeout(timer);
	}, [projectDetails]);

	useEffect(() => {
		if (!projectId) return;

		const currentProjectIndex = projects.findIndex(
			(p) => p.projectId === projectId
		);
		if (currentProjectIndex === -1) return;

		const prevIndex =
			currentProjectIndex === 0 ? projects.length - 1 : currentProjectIndex - 1;
		setPrevProjectId(projects[prevIndex].projectId);
		setPrevProjectTitle(projects[prevIndex].title);

		const nextIndex =
			currentProjectIndex === projects.length - 1 ? 0 : currentProjectIndex + 1;
		setNextProjectId(projects[nextIndex].projectId);
		setNextProjectTitle(projects[nextIndex].title);
	}, [projectId]);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const goToPrevProject = () => {
		if (prevProjectId) navigate(`/projects/${prevProjectId}`);
	};

	const goToNextProject = () => {
		if (nextProjectId) navigate(`/projects/${nextProjectId}`);
	};

	const goToBackend = () => {
		if (project?.type === "separated") {
			setLoaded(true);
			setProjectDetails(project.backend.details);
			const backendImages =
				project.backend.details.images ||
				(project.backend.details.coverImage
					? [
							{
								url: project.backend.details.coverImage,
								description: "Backend application view",
							},
					  ]
					: []);

			setImages(backendImages);
			setCurrentImageIndex(0);
		}
	};

	const goToFrontend = () => {
		if (project?.type === "separated") {
			setLoaded(true);
			setProjectDetails(project.frontend.details);
			const frontendImages =
				project.frontend.details.images ||
				(project.frontend.details.coverImage
					? [
							{
								url: project.frontend.details.coverImage,
								description: "Frontend application view",
							},
					  ]
					: []);

			setImages(frontendImages);
			setCurrentImageIndex(0);
		}
	};

	const handleImageClick = (index: number) => {
		setCurrentImageIndex(index);
		setImageLoading(true);
	};

	const goToPreviousImage = useCallback(() => {
		if (images.length <= 1) return;
		setCurrentImageIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
		setImageLoading(true);
	}, [images.length]);

	const goToNextImage = useCallback(() => {
		if (images.length <= 1) return;
		setCurrentImageIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		);
		setImageLoading(true);
	}, [images.length]);

	const handleImageLoad = () => {
		setImageLoading(false);
	};

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "ArrowLeft") {
				goToPreviousImage();
			} else if (e.key === "ArrowRight") {
				goToNextImage();
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [goToNextImage, goToPreviousImage]);

	const swipeHandlers = useSwipeable({
		onSwipedLeft: () => goToNextImage(),
		onSwipedRight: () => goToPreviousImage(),
		trackMouse: false,
	});

	if (!project || !projectDetails) {
		return (
			<section className="project-loading flex items-center justify-center min-h-screen">
				<div className="text-center">
					<h2>Loading project details...</h2>
				</div>
			</section>
		);
	}

	return (
		<section
			className={`project-details animate-on-load slide-up ${
				loaded ? "loaded" : ""
			} 
      max-w-2xl mx-auto p-0 m-0`}
			id="project"
			ref={projectRef}>
			<div className="container">
				<div className="project-navigation">
					<button
						onClick={goToPrevProject}
						className="nav-button"
						aria-label={`Previous Project: ${prevProjectTitle}`}
						title={`Previous: ${prevProjectTitle}`}>
						<i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
						<span className="hidden sm:inline ml-2">Previous</span>
					</button>

					<button
						onClick={() => navigate("/projects")}
						className="btn outline"
						title="Back to all projects">
						<i className="fa-solid fa-th" aria-hidden="true"></i>
						<span className="hidden sm:inline ml-2">All Projects</span>
					</button>

					<button
						onClick={goToNextProject}
						className="nav-button"
						aria-label={`Next Project: ${nextProjectTitle}`}
						title={`Next: ${nextProjectTitle}`}>
						<span className="hidden sm:inline mr-2">Next</span>
						<i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
					</button>
				</div>

				<header className="project-detail-header">
					<Eyebrow>{project.category}</Eyebrow>
					<h1 className="project-detail-title">{project.title}</h1>
					{project.team ? (
						<div className="project-team-meta">
							<span className="badge badge-coral">
								Team of {project.team.size}
							</span>
							<span className="project-team-role">{project.team.role}</span>
						</div>
					) : (
						<span className="badge badge-sage">Solo</span>
					)}
				</header>

				{project.type === "separated" && (
					<div className="flex flex-row justify-center mt-8 mb-4">
						<ButtonGroup variant="contained" aria-label="Project type selector">
							<Button
								onClick={goToBackend}
								variant={
									projectDetails === project.backend.details
										? "contained"
										: "outlined"
								}>
								Backend
							</Button>
							<Button
								onClick={goToFrontend}
								variant={
									projectDetails === project.frontend.details
										? "contained"
										: "outlined"
								}>
								Frontend
							</Button>
						</ButtonGroup>
					</div>
				)}

				{projectDetails.demoVideo && (
					<div className="project-video-wrap">
						<p className="project-video-label">Demo</p>
						<video
							src={projectDetails.demoVideo}
							poster={projectDetails.previewImage}
							controls
							preload="metadata"
							className="project-video">
							Your browser does not support video.
						</video>
					</div>
				)}

				<div className="project-gallery sm:mt-8 mb-6 sm:mb-10">
					<div className="main-image-container bg-gray-100 rounded-xl overflow-hidden mb-4 shadow-md">
						{images.length > 0 && (
							<div className="relative">
								<div
									{...swipeHandlers}
									className="image-container relative w-full flex items-center justify-center overflow-hidden bg-gray-50"
									style={{
										height: windowWidth <= 768 ? "30vh" : "45vh",
										maxHeight: "480px",
										minHeight: windowWidth <= 768 ? "200px" : "240px",
										transition: "all 0.3s ease",
									}}>
									{imageLoading && (
										<div className="absolute inset-0 flex items-center justify-center">
											<div className="small-loader"></div>
										</div>
									)}
									<img
										src={images[currentImageIndex].url}
										alt={`${project.title} - ${images[currentImageIndex].description}`}
										className={`max-w-full max-h-full object-contain transition-opacity duration-300 ${
											imageLoading ? "opacity-0" : "opacity-100"
										}`}
										style={{ verticalAlign: "middle" }}
										onLoad={handleImageLoad}
									/>
									{images.length > 1 && (
										<>
											<button
												onClick={goToPreviousImage}
												className="absolute arrow-btn left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full z-10 opacity-70 hover:opacity-100 bg-white/70 hover:bg-white/90 backdrop-blur-sm transition-all duration-200 inline-flex items-center justify-center"
												aria-label="Previous image">
												<i
													className="fa-solid fa-chevron-left text-sm sm:text-lg flex items-center justify-center w-full h-full"
													aria-hidden="true"></i>
											</button>

											<button
												onClick={goToNextImage}
												className="absolute arrow-btn right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full z-10 opacity-70 hover:opacity-100 bg-white/70 hover:bg-white/90 backdrop-blur-sm transition-all duration-200 inline-flex items-center justify-center"
												aria-label="Next image">
												<i
													className="fa-solid fa-chevron-right text-sm sm:text-lg flex items-center justify-center w-full h-full"
													aria-hidden="true"></i>
											</button>
										</>
									)}
								</div>
								<div className="bg-white py-2 sm:py-3 px-2 sm:px-4 rounded-b-xl">
									<p className="text-center text-primary-800 font-medium text-sm sm:text-base">
										{images[currentImageIndex].description}
									</p>
								</div>
								{images.length > 1 && (
									<div className="text-center text-xs text-gray-500 mt-1">
										<span className="hidden sm:inline">Use arrow keys or </span>
										<span className="sm:hidden">Swipe or </span>
										use buttons to navigate ({currentImageIndex + 1}/
										{images.length})
									</div>
								)}
							</div>
						)}
					</div>

					{/* Thumbnails - visible only on medium screens and larger */}
					{images.length > 1 && (
						<div className="thumbnails-container hidden md:flex justify-center gap-2 overflow-x-auto py-2">
							{images.map((image, index) => (
								<div
									key={index}
									className={`thumbnail cursor-pointer rounded-md transition-all duration-200 hover:scale-105 ${
										currentImageIndex === index
											? "border-2 border-primary-500 shadow-md"
											: "border border-gray-300 opacity-70 hover:opacity-100"
									}`}
									onClick={() => handleImageClick(index)}>
									<img
										src={image.url}
										alt={`Thumbnail ${index + 1}`}
										className="w-16 h-16 object-cover"
									/>
								</div>
							))}
						</div>
					)}

					{images.length > 1 && (
						<div
							className="indicators flex justify-center mt-4 mb-2"
							style={{ minHeight: "20px" }}>
								{images.map((_, index) => (
									<button
										type="button"
										key={index}
										onClick={() => handleImageClick(index)}
										className={`w-2.5 h-2.5 mx-1.5 rounded-full cursor-pointer transition-all duration-200 ${
											currentImageIndex === index
												? "bg-primary-500 scale-125"
												: "bg-gray-300 hover:bg-gray-400"
										}`}
										aria-label={`Go to image ${index + 1}`}
									/>
								))}
						</div>
					)}
				</div>

				<div className="project-detail-tags">
					{projectDetails.technologies.map((tech, index) => (
						<span
							key={tech}
							className="featured-tag project-detail-tag"
							style={{
								opacity: skillsVisible.includes(index) ? 1 : 0,
								transform: skillsVisible.includes(index)
									? "translateY(0)"
									: "translateY(8px)",
								transition: "opacity 0.3s ease, transform 0.3s ease",
								transitionDelay: `${index * 40}ms`,
							}}>
							{tech}
						</span>
					))}
				</div>

				<div className="project-info text-start text-sm sm:text-base">
					<p className="mb-4">{formatMarkdownText(projectDetails.intro)}</p>

					{projectDetails.noteText && (
						<div className="note-container bg-primary-100 border-l-4 border-primary-500 p-3 rounded-r-lg mb-4 flex items-center">
							<i className="fa-solid fa-circle-info text-primary-600 mr-2 text-lg"></i>
							<p className="font-medium text-primary-800 m-0 p-0">
								{projectDetails.noteText}
							</p>
						</div>
					)}

					{projectDetails.sections.map((section, idx) => (
						<div key={idx} className="mb-4">
							<h3 className="mb-2">
								{section.title}
							</h3>
							<ul className="ml-4 list-disc">
								{section.bullets.map((bullet, bulletIdx) => (
									<li key={bulletIdx} className="mb-1 list-item">
										{formatMarkdownText(bullet)}
									</li>
								))}
							</ul>
						</div>
					))}

					{projectDetails.demoCredentials && (
						<div className="mb-4">
							<span className="font-bold mb-2">Demo Credentials:</span>
							{projectDetails.demoCredentials.note && (
								<span className="italic mb-2 ml-1">
									({projectDetails.demoCredentials.note})
								</span>
							)}
							<ul className="ml-4 list-disc">
								{projectDetails.demoCredentials.accounts.map((account, idx) => (
									<li key={idx} className="list-item">
										<strong>{account.type}:</strong> {account.email} /{" "}
										{account.password}
									</li>
								))}
							</ul>
						</div>
					)}
				</div>

				<div className="project-detail-actions">
					<a
						href={projectDetails.github}
						className="btn outline"
						target="_blank"
						rel="noopener noreferrer">
						<i className="fa-brands fa-github" aria-hidden="true"></i> GitHub
					</a>
					{projectDetails.demo && projectId !== "portfolio" ? (
						<a
							href={projectDetails.demo}
							className="btn"
							target="_blank"
							rel="noopener noreferrer">
							<i className="fa-solid fa-globe" aria-hidden="true"></i> Live Demo
						</a>
					) : null}
				</div>
			</div>
		</section>
	);
};

export default Project;
