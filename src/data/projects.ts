import WorkXPApplications from "../assets/projects/work-xp/applications.jpg";
import WorkXPBusinessProfile from "../assets/projects/work-xp/business-profile.jpg";
import WorkXPConfirmingModal from "../assets/projects/work-xp/confirming-modal.jpg";
import WorkXPExplore from "../assets/projects/work-xp/explore.jpg";
import WorkXPProfile from "../assets/projects/work-xp/profile.jpg";
import WorkXPRealTimeChat from "../assets/projects/work-xp/real-time-chat.jpg";
import WorkXPUserProfile from "../assets/projects/work-xp/user-profile.jpg";
import WorkXPRegisterOrLogin from "../assets/projects/work-xp/register-or-login.jpg";
import WorkXPWelcome from "../assets/projects/work-xp/welcome.jpg";
import NewsBackendImage from "../assets/news-backend.png";

import NCNewsCover from "../assets/projects/nc-news/cover.jpeg";
import NCNewsArticle from "../assets/projects/nc-news/article.jpg";
import NCNewsArticlesPagination from "../assets/projects/nc-news/articles-pagination.jpg";
import NCNewsArticles from "../assets/projects/nc-news/articles.jpg";
import NCNewsCommentsPagination from "../assets/projects/nc-news/comments-pagination-new-comment.jpg";
import NCNewsComments from "../assets/projects/nc-news/comments.jpg";
import NCNewsDeleteConfirmation from "../assets/projects/nc-news/delete-confirmation.jpg";
import NCNewsHomeBrowser from "../assets/projects/nc-news/home-browser.jpg";
import NCNewsHomeMobile from "../assets/projects/nc-news/home-mobile.png";
import NCNewsNewArticleDesktop from "../assets/projects/nc-news/new-article-desktop.png";
import NCNewsNewArticleMobile from "../assets/projects/nc-news/new-article-mobile.png";

import PortfolioCover from "../assets/projects/portfolio/cover.png";
import PortfolioDarkMode from "../assets/projects/portfolio/dark-mode.png";
import PortfolioLightMode from "../assets/projects/portfolio/light-mode.jpg";
import PortfolioProject from "../assets/projects/portfolio/project.png";
import PortfolioSkillsMobile from "../assets/projects/portfolio/skills-mobile.png";
import PortfolioHomeMobile from "../assets/projects/portfolio/home-mobile.png";

export const projects: Project[] = [
	{
		title: "Work-XP Mobile Application",
		projectId: "work-xp-mobile-app",
		type: "fullstack",
		details: {
			intro:
				"A **React Native (Expo)** mobile application built collaboratively in a team of 6 developers with **TypeScript** to connect students with short-term work opportunities and businesses with hiring needs.",
			sections: [
				{
					title: "My Technical Contributions:",
					bullets: [
						"Implemented the **Firebase Authentication** system for secure user login",
						"Built the **chat interface** and collaborated on real-time messaging functionality",
						"Developed the **Cloudinary** integration for profile image uploads",
						"Created the **Snackbars** feedback system for user notifications",
						"Collaborated on authentication state management and database structure",
					],
				},
				{
					title: "Key Features:",
					bullets: [
						"Post & browse work opportunities",
						"Customisable profiles for students and businesses",
						"Firebase authentication",
						"Real-time messaging",
						"Application tracking",
					],
				},
				{
					title: "Engineering Approach:",
					bullets: [
						"Applied **component-based architecture** for better code organisation and reusability",
						"Implemented **responsive UI design** with platform-specific adaptations for iOS and Android",
						"Used **Git** for version control with feature branching workflow",
						"Followed **Agile methodologies** with daily stand-ups and sprint planning",
					],
				},
			],
			demoCredentials: {
				note: "Live demo optimised for mobile view",
				accounts: [
					{ type: "Student", email: "studenta@gmail.com", password: "Test321" },
					{ type: "Business", email: "bakery@gmail.com", password: "Test123" },
				],
			},
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
			coverImage: WorkXPExplore,
			images: [
				{
					url: WorkXPWelcome,
					description:
						"Welcome screen for users (Left: iPhone Simulator, Right: Android Emulator)",
				},
				{
					url: WorkXPRegisterOrLogin,
					description: "Authentication options for users",
				},
				{
					url: WorkXPUserProfile,
					description: "User profile screen with customisable settings",
				},
				{
					url: WorkXPExplore,
					description: "Explore page for discovering new job opportunities",
				},
				{
					url: WorkXPBusinessProfile,
					description:
						"Business profile view with company details and posted jobs",
				},
				{
					url: WorkXPApplications,
					description:
						"Applications management interface for tracking job applications",
				},
				{
					url: WorkXPConfirmingModal,
					description: "Confirmation dialog for important user actions",
				},
				{
					url: WorkXPProfile,
					description: "Snackbars providing user feedback for actions results",
				},
				{
					url: WorkXPRealTimeChat,
					description:
						"Real-time chat functionality between students and businesses (with unread message indicators)",
				},
			],
		},
	},
	{
		title: "NextCore News - Discussion Web Platform",
		projectId: "news-discussion-platform",
		type: "separated",
		frontend: {
			details: {
				intro:
					"A responsive **React** application for community content sharing and discussion, similar to platforms like Reddit.",
				noteText:
					"The backend is hosted on a free tier service that may take up to 1 minute to wake up if it hasn't been accessed recently.",
				sections: [
					{
						title: "Technical Implementation:",
						bullets: [
							"Built with **React** and styled with **Tailwind CSS** for a modern, responsive UI",
							"Implemented client-side routing with **React Router** for seamless navigation",
							"Used **Axios** for API integration and data fetching",
							"Deployed on **Netlify** with CI/CD for automatic deployments",
						],
					},
					{
						title: "Key Features:",
						bullets: [
							"Article viewing with pagination",
							"Topic filtering and sorting",
							"Interactive voting system",
							"Comment posting and management",
							"Responsive design for all device sizes",
						],
					},
					{
						title: "Engineering Approach:",
						bullets: [
							"Followed **component-based architecture** for modular and reusable UI elements",
							"Implemented **responsive design principles** using Tailwind's utility classes",
							"Applied **client-side state management** for optimized user experience",
							"Used **Git** for version control with feature branch workflow",
							"Set up **CI/CD pipeline** with Netlify for automated deployments",
						],
					},
				],
				technologies: [
					"JavaScript",
					"React",
					"Tailwind CSS",
					"React Router",
					"Axios",
					"Netlify",
				],
				github: "https://github.com/loklokyuen/nc-news",
				demo: "https://nextcore-news.netlify.app/",
				coverImage: NCNewsCover,
				images: [
					{
						url: NCNewsHomeBrowser,
						description: "NextCore News homepage in desktop browser view",
					},
					{
						url: NCNewsHomeMobile,
						description: "Mobile-responsive layout of the homepage",
					},
					{
						url: NCNewsArticles,
						description: "Articles listing page with filtering options",
					},
					{
						url: NCNewsArticlesPagination,
						description:
							"Pagination implementation for browsing multiple articles",
					},
					{
						url: NCNewsArticle,
						description: "Single article view with voting functionality",
					},
					{
						url: NCNewsComments,
						description: "Comments section for article discussions",
					},
					{
						url: NCNewsCommentsPagination,
						description: "Paginated comments with new comment form",
					},
					{
						url: NCNewsDeleteConfirmation,
						description: "Delete confirmation dialog for comment management",
					},
					{
						url: NCNewsNewArticleDesktop,
						description:
							"Article submission form on desktop - where users can create new articles",
					},
					{
						url: NCNewsNewArticleMobile,
						description: "Article submission form optimized for mobile devices",
					},
				],
			},
		},
		backend: {
			details: {
				intro:
					"A **Node.js** and **Express.js** RESTful API built to serve as the backend for the News and Discussion platform.",
				noteText:
					"This API is hosted on a free tier service that may take up to 1 minute to initialize if it hasn't been accessed recently.",
				sections: [
					{
						title: "Technical Implementation:",
						bullets: [
							"Developed with **Node.js** and **Express.js** for robust API routing",
							"Used **PostgreSQL** database for data persistence with complex relationships",
							"Implemented comprehensive test suite with **Jest**",
							"Set up **GitHub Actions** for CI/CD pipeline",
							"Deployed on **Render** with auto-deployments from main branch",
						],
					},
					{
						title: "Key Features:",
						bullets: [
							"RESTful endpoints following API best practices",
							"CRUD operations for articles, comments, and users",
							"Query parameter support for filtering and pagination",
							"Error handling and input validation",
							"Comprehensive API documentation",
						],
					},
					{
						title: "Engineering Approach:",
						bullets: [
							"Applied **MVC architecture pattern** for clear separation of concerns",
							"Implemented **test-driven development** with Jest for reliable code",
							"Created **RESTful API endpoints** following standard conventions",
							"Used **modular middleware** approach for error handling and validation",
							"Set up **continuous integration** with GitHub Actions for automated testing",
						],
					},
				],
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
				coverImage: NewsBackendImage,
			},
		},
	},
	{
		title: "Personal Portfolio Website",
		projectId: "portfolio",
		type: "fullstack",
		details: {
			intro:
				"A responsive portfolio website built with **React**, **TypeScript**, and **Vite** to showcase my projects and skills as a developer.",
			noteText: "You're currently browsing this project!",
			sections: [
				{
					title: "Technical Implementation:",
					bullets: [
						"Developed with **React** and **TypeScript** for type-safe component architecture",
						"Styled with **Tailwind CSS** for responsive design and easy customization",
						"Implemented dark/light mode with theme persistence",
						"Used **React Router** for client-side navigation",
						"Set up **Formspree** integration for a functional contact form",
						"Deployed with **GitHub Pages** for continuous delivery",
					],
				},
				{
					title: "Key Features:",
					bullets: [
						"Responsive design optimized for all device sizes",
						"Dynamic project gallery with detailed project pages",
						"Interactive UI with animations and transitions",
						"Dark/light mode toggle with system preference detection",
						"Contact form with validation and success feedback",
						"Skill visualization with categorized technology icons",
					],
				},
				{
					title: "Engineering Approach:",
					bullets: [
						"Applied **component-based architecture** for better code organization and reusability",
						"Used **custom hooks** for shared functionality like intersection observation",
						"Implemented **responsive design principles** using Tailwind's utility classes",
						"Set up **TypeScript** interfaces for consistent data structures",
						"Created a **CI/CD pipeline** for automated deployment to GitHub Pages",
					],
				},
			],
			technologies: [
				"React",
				"TypeScript",
				"Tailwind CSS",
				"Material-UI",
				"React Router",
				"Vite",
				"GitHub Pages",
			],
			github: "https://github.com/loklokyuen/loklokyuen.github.io",
			demo: "https://loklokyuen.github.io",
			coverImage: PortfolioCover,
			images: [
				{
					url: PortfolioLightMode,
					description: "Portfolio homepage with light theme",
				},
				{
					url: PortfolioDarkMode,
					description: "Portfolio with dark mode enabled",
				},
				{
					url: PortfolioProject,
					description: "Project details page showing technologies and features",
				},
				{
					url: PortfolioHomeMobile,
					description: "Homepage on mobile devices showing responsive design",
				},
				{
					url: PortfolioSkillsMobile,
					description: "Skills section optimized for mobile viewing",
				},
			],
		},
	},
];
