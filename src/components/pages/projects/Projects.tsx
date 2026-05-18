import { useEffect } from "react";
import { projects } from "../../../data/projects";
import ProjectRow from "./ProjectRow";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<section className="projects-page" id="projects">
			<div className="projects-page-header">
				<h1 className="section-title">Projects</h1>
				<p className="projects-page-intro">
					Selected work from full-stack web, mobile, and AI/data projects.
				</p>
			</div>
			<div className="projects-rows">
				{projects.map((project, index) => (
					<ProjectRow
						key={project.projectId}
						project={project}
						index={index}
					/>
				))}
			</div>
		</section>
	);
};

export default Projects;
