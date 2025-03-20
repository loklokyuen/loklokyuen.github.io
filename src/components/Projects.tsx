import { useEffect, useRef, useState } from "react";
import WorkXPImage from "../assets/work-xp.png";
import NewsFrontendImage from "../assets/news-frontend.png";
import NewsBackendImage from "../assets/news-backend.png";
import ProjectPreview from "./ProjectPreview";

const Projects = () => {
	const projects: Project[] = [
		{
			title: "Work-XP Mobile Application",
			type: "fullstack",
			details: {
				description:
					"A React Native (Expo) app with TypeScript built in a group of 6 to connect students with short-term work opportunities and businesses with hiring needs.",
				technologies: [
					"React Native",
					"TypeScript",
					"Firebase Authentication",
					"Firestore",
					"Cloudinary",
					"React Native Paper",
				],
				github: "https://github.com/loklokyuen/work-xp",
				demo: "https://work-xp.netlify.app",
				image: WorkXPImage,
			},
		},
		{
			title: "News and Discussion Web Platform",
			type: "separated",
			frontend: {
				details: {
					description:
						"A responsive React application for community content sharing and discussion with interactive features including pagination, topic filtering and voting system.",
					technologies: [
						"JavaScript",
						"React",
						"Tailwind CSS",
						"React Router",
						"Axios",
						"Netlify",
					],
					github: "https://github.com/loklokyuen/nc-news",
					demo: "https://news-and-discussion.netlify.app",
					image: NewsFrontendImage,
				},
			},
			backend: {
				details: {
					description:
						"A RESTful API built with Node.js and Express.js to handle news articles, users, comments, and votes with PostgreSQL database.",
					technologies: [
						"JavaScript",
						"Node.js",
						"Express.js",
						"PostgreSQL",
						"Jest",
						"GitHub Actions",
						"Supabase",
					],
					github: "https://github.com/loklokyuen/news-website-project",
					demo: "https://news-and-discussion-platform.onrender.com/api",
					image: NewsBackendImage,
				},
			},
		},
	];

	const [loaded, setLoaded] = useState(false);
	const projectsRef = useRef<HTMLElement>(null);

	useEffect(() => {
		if (projectsRef.current)
			projectsRef.current.scrollIntoView({ behavior: "smooth" });
	}, []);
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setLoaded(true);
						observer.unobserve(entry.target);
					} else {
						setLoaded(false);
					}
				});
			},
			{ threshold: 0.1 }
		);
		if (projectsRef.current) {
			observer.observe(projectsRef.current);
		}
		return () => {
			if (projectsRef.current) {
				observer.unobserve(projectsRef.current);
			}
		};
	}, []);

	return (
		<section
			className={`projects animate-on-load slide-up ${
				loaded ? "loaded" : ""
			} max-w-2xl mx-auto`}
			id="projects"
			ref={projectsRef}>
			<div className="container">
				<h2 className="section-title">Projects</h2>

				<div className="projects-container flex flex-col mx-auto place-items-center items-center justify-center md:flex-row md:flex-wrap">
					{projects.map((project) => (
						<ProjectPreview
							key={project.title}
							project={project}
							image={
								project.type === "fullstack"
									? project.details.image
									: project.frontend.details.image
							}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
