import { useEffect, useState } from "react";
import { projects } from "../../../data/projects";
import ProjectPreview from "./ProjectPreview";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";

const Projects = () => {
	const [loaded, setLoaded] = useState(false);
	const { ref: projectsRef, isVisible } =
		useIntersectionObserver<HTMLElement>();

	useEffect(() => {
		if (projectsRef.current)
			projectsRef.current.scrollIntoView({ behavior: "smooth" });
	}, []);

	useEffect(() => {
		if (isVisible) {
			setLoaded(true);
		}
	}, [isVisible]);

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
						<ProjectPreview key={project.title} project={project} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
