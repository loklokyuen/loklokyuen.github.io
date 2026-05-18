import { useEffect, useState } from "react";
import Skill from "../../common/Skill";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";

const Skills = () => {
	const [loaded, setLoaded] = useState(false);
	const [skillsVisible, setSkillsVisible] = useState<number[]>([]);
	const { ref: skillsRef, isVisible } = useIntersectionObserver<HTMLElement>();

	const languages: SkillName[] = ["Python", "TypeScript", "JavaScript", "SQL"];
	const aiSkills: SkillName[] = [
		"LangChain",
		"LangGraph",
		"OpenAI API",
		"RAG",
		"Prompt Engineering",
	];
	const dataSkills: SkillName[] = [
		"pandas",
		"NumPy",
		"matplotlib",
		"pgvector",
		"Jupyter",
	];
	const frontendSkills: SkillName[] = [
		"React",
		"React Native",
		"Tailwind CSS",
		"Material-UI",
		"Vite",
		"Expo",
		"Streamlit",
	];
	const backendSkills: SkillName[] = ["Node.js", "Express.js"];
	const databaseSkills: SkillName[] = [
		"PostgreSQL",
		"Firestore",
		"Supabase",
		"Firebase",
	];
	const cloudSkills: SkillName[] = [
		"Cloud Run",
		"Cloud SQL",
		"Cloud Scheduler",
		"GitHub Actions",
		"GitHub Pages",
		"Netlify",
	];
	const testingSkills: SkillName[] = ["Jest", "pytest"];

	const categories: { title: string; skills: SkillName[] }[] = [
		{ title: "Languages", skills: languages },
		{ title: "AI", skills: aiSkills },
		{ title: "Data", skills: dataSkills },
		{ title: "Frontend", skills: frontendSkills },
		{ title: "Backend", skills: backendSkills },
		{ title: "Databases", skills: databaseSkills },
		{ title: "Cloud & DevOps", skills: cloudSkills },
		{ title: "Testing", skills: testingSkills },
	];

	const allSkillsCount = categories.reduce(
		(acc, c) => acc + c.skills.length,
		0
	);

	useEffect(() => {
		if (isVisible) {
			setLoaded(true);
			for (let i = 0; i < allSkillsCount; i++) {
				setTimeout(() => {
					setSkillsVisible((prev) => [...prev, i]);
				}, i * 100);
			}
		}
	}, [isVisible, allSkillsCount]);

	const renderSkillCategory = (
		skills: SkillName[],
		categoryTitle: string,
		startIndex: number
	) => {
		return (
			<div className="mb-8" key={categoryTitle}>
				<h3 className="text-xl font-semibold mb-4 text-start">
					{categoryTitle}
				</h3>
				<div className="flex flex-wrap items-center justify-center">
					{skills.map((skill, index) => {
						const globalIndex = startIndex + index;
						return (
							<div className="flex flex-col items-center" key={globalIndex}>
								<div
									className={`skill-item place-items-center rounded-3xl bg-primary-100 p-4 m-2 transition-all duration-400 ease-in-out`}
									style={{
										opacity: skillsVisible.includes(globalIndex) ? 1 : 0,
										transform: skillsVisible.includes(globalIndex)
											? "translateY(0)"
											: "translateY(20px)",
									}}>
									<Skill skillName={skill} />
								</div>
								<div className="flex flex-col items-center ">
									<span className="text-xs ps-0.5 rounded-sm m-1">{skill}</span>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	};

	let runningIndex = 0;

	return (
		<section
			className={`skills animate-on-load slide-up ${
				loaded ? "loaded" : ""
			} max-w-xl mx-auto`}
			id="skills"
			ref={skillsRef}>
			<div className="container">
				<h2 className="section-title">Skills</h2>
				<div className="skills-container">
					{categories.map((cat) => {
						const start = runningIndex;
						runningIndex += cat.skills.length;
						return renderSkillCategory(cat.skills, cat.title, start);
					})}
				</div>
			</div>
		</section>
	);
};

export default Skills;
