type SkillName =
	| "JavaScript"
	| "React"
	| "TypeScript"
	| "HTML"
	| "CSS"
	| "Node.js"
	| "Express.js"
	| "PostgreSQL"
	| "Git"
	| "React Native"
	| "Firebase"
	| "Firebase Authentication"
	| "Firestore"
	| "Cloudinary"
	| "React Native Paper"
	| "Jest"
	| "Supertest"
	| "GitHub Actions"
	| "Supabase"
	| "Tailwind CSS"
	| "React Router"
	| "Axios"
	| "Netlify"
	| "Material-UI"
	| "Vite"
	| "Expo"
	| "GitHub"
	| "GitHub Pages"
	| "Python"
	| "SQL"
	| "LangChain"
	| "LangGraph"
	| "OpenAI API"
	| "RAG"
	| "Prompt Engineering"
	| "pandas"
	| "NumPy"
	| "matplotlib"
	| "pgvector"
	| "Jupyter"
	| "Streamlit"
	| "Cloud Run"
	| "Cloud SQL"
	| "Cloud Scheduler"
	| "pytest";

type Project = FullStackProject | SeparatedProject;

interface ProjectDescriptionSection {
	title: string;
	bullets: string[];
}

interface ProjectDetails {
	intro: string;
	noteText?: string;
	sections: ProjectDescriptionSection[];
	technologies: SkillName[];
	github: string;
	demo: string | null;
	coverImage: string;
	previewImage?: string;
	demoVideo?: string;
	images?: { url: string; description: string }[];
	demoCredentials?: {
		note?: string;
		accounts: {
			type: string;
			email: string;
			password: string;
		}[];
	};
}

interface ProjectTeam {
	size: number;
	role: string;
}

type ProjectCategory =
	| "AI / Data"
	| "Web Application"
	| "Mobile Application";

interface FullStackProject {
	title: string;
	projectId: string;
	type: "fullstack";
	category: ProjectCategory;
	team?: ProjectTeam;
	details: ProjectDetails;
}

interface SeparatedProject {
	title: string;
	projectId: string;
	type: "separated";
	category: ProjectCategory;
	team?: ProjectTeam;
	frontend: {
		details: ProjectDetails;
	};
	backend: {
		details: ProjectDetails;
	};
}
