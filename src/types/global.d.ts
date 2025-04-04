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
	| "GitHub Pages";

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

interface FullStackProject {
	title: string;
	projectId: string;
	type: "fullstack";
	details: ProjectDetails;
}

interface SeparatedProject {
	title: string;
	projectId: string;
	type: "separated";
	frontend: {
		details: ProjectDetails;
	};
	backend: {
		details: ProjectDetails;
	};
}
