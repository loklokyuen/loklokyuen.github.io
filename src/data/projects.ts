import WorkXPCover from "../assets/projects/work-xp/cover.svg";
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

import NCNewsCoverSVG from "../assets/projects/nc-news/cover.svg";
import NCNewsCoverPhoto from "../assets/projects/nc-news/cover.jpeg";
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

import PortfolioCoverSVG from "../assets/projects/portfolio/cover.svg";
import PortfolioCoverPhoto from "../assets/projects/portfolio/cover.png";
import PortfolioDarkMode from "../assets/projects/portfolio/dark-mode.png";
import PortfolioLightMode from "../assets/projects/portfolio/light-mode.jpg";
import PortfolioProject from "../assets/projects/portfolio/project.png";
import PortfolioSkillsMobile from "../assets/projects/portfolio/skills-mobile.png";
import PortfolioHomeMobile from "../assets/projects/portfolio/home-mobile.png";

import SkincareAdvisorCover from "../assets/projects/skincare-advisor/cover.svg";
import SkincareAdvisorHome from "../assets/projects/skincare-advisor/SkinIQ - Home.png";
import SkincareAdvisorVideo from "../assets/projects/skincare-advisor/SkinIQ - demo.mp4";
import SchoolOfDandoriCover from "../assets/projects/school-of-dandori/cover.svg";
import ValueStreamCover from "../assets/projects/value-stream/cover.svg";
import ValueStreamHome from "../assets/projects/value-stream/Value Stream - Home.png";
import ValueStreamSuggestion from "../assets/projects/value-stream/Value Stream - Suggestion.png";
import ValueStreamTrending from "../assets/projects/value-stream/Value Stream - Trending.png";
import MovieverCover from "../assets/projects/moviever/cover.svg";

export const projects: Project[] = [
	{
		title: "SkinIQ — Skincare Intelligence Platform",
		projectId: "skincare-advisor",
		type: "fullstack",
		category: "AI / Data",
		details: {
			intro:
				"SkinIQ is a personalised skincare advisor that combines **LangGraph**, **OpenAI**, and **Streamlit**. It keeps a user's skin profile and routine, retrieves relevant products and ingredient evidence from a vector database, and answers questions in four modes depending on intent: analyse, recommend, build, or teach.",
			sections: [
				{
					title: "Key Features:",
					bullets: [
						"Skin profile setup (type, concerns, goals, sensitivities) with persistent storage",
						'AM/PM routine builder with saved "Interested" product list',
						"Intent classification across four modes: analyse, recommend, build, teach",
						"Product retrieval grounded in a scraped Boots catalogue with **pgvector** similarity search",
						"Ingredient-level reasoning with evidence pulled from **PubMed** and community sources",
					],
				},
				{
					title: "Technical Implementation:",
					bullets: [
						"Built the conversational flow with **LangGraph**, including intent classification, retrieval, parallel analysis, and validation nodes",
						"Used **OpenAI** `gpt-4o-mini` for chat and `text-embedding-ada-002` for embeddings",
						"Stored profiles, products, ingredients, and conversation checkpoints in **PostgreSQL** with **pgvector**",
						"Wrote a **ScraperAPI**-backed Boots catalogue scraper and an embedding backfill pipeline",
						"Built the user interface in **Streamlit** with a multi-page layout (Home, Profile, Routine, Chat, Interested)",
					],
				},
				{
					title: "Engineering Approach:",
					bullets: [
						"Modular **graph-based** workflow that separates retrieval, analysis, and response writing",
						"Service layer split by domain (product, ingredient, profile, evidence, RAG)",
						"Graceful fallback to in-memory checkpointing when Postgres is unreachable",
						"**pytest** suite covering product card extraction, profile migration, candidate ranking, and evidence summaries",
					],
				},
			],
			technologies: [
				"Python",
				"LangChain",
				"LangGraph",
				"OpenAI API",
				"RAG",
				"pgvector",
				"PostgreSQL",
				"Streamlit",
				"pytest",
			],
			github: "https://github.com/loklokyuen/skincare_advisor",
			demo: null,
			coverImage: SkincareAdvisorCover,
			previewImage: SkincareAdvisorHome,
			demoVideo: SkincareAdvisorVideo,
			images: [
				{
					url: SkincareAdvisorHome,
					description: "SkinIQ home — skin profile and routine overview",
				},
			],
		},
	},
	{
		title: "School of Dandori",
		projectId: "school-of-dandori",
		type: "fullstack",
		category: "AI / Data",
		team: { size: 3, role: "Backend + admin panel + RAG" },
		details: {
			intro:
				"A UK leisure class provider was promoting 200+ courses through static PDFs, with customers calling staff to find courses before paying manually online. In a 3-person team, Melody set up **Firestore** to store all migrated course data, built the admin panel for real-time course management, and contributed to the **RAG** pipeline and AI chatbot that gives customers personalised course recommendations, freeing staff for higher-value work and making course discovery effortless.",
			sections: [
				{
					title: "Key Features:",
					bullets: [
						"PDF course data extraction into structured Firestore records",
						"Admin panel for creating, editing, and validating course records",
						"RAG pipeline for grounded course recommendations",
						"Natural-language chatbot for course discovery",
					],
				},
				{
					title: "My Contributions:",
					bullets: [
						"Set up **Firestore** schema and migrated 200+ PDF course listings into structured records",
						"Built the **admin panel** for course creation, editing, and validation",
						"Contributed to the **RAG pipeline** for grounded course recommendations",
						"Helped build the chatbot for natural-language course discovery",
					],
				},
			],
			technologies: [
				"Python",
				"Firestore",
				"Streamlit",
				"RAG",
				"OpenAI API",
				"LangChain",
			],
			github: "https://github.com/loklokyuen/school-of-dandori",
			demo: "https://school-of-dandori.streamlit.app",
			coverImage: SchoolOfDandoriCover,
		},
	},
	{
		title: "Value Stream",
		projectId: "value-stream",
		type: "fullstack",
		category: "AI / Data",
		team: { size: 4, role: "GCP pipeline + Cloud SQL + LLM integration" },
		details: {
			intro:
				"Value Stream is an e-commerce intelligence tool for beauty skincare retailer Minimal Collection. In a team of 4, Melody built a **GCP** pipeline using **Cloud Scheduler**, **Cloud Run**, and **ScraperAPI** to scrape Amazon's top 30 daily beauty bestsellers, storing 4-day ranking trends in **Cloud SQL**. Shopify inventory is cross-referenced by an LLM against bestseller data to recommend discounts or hero banner placements. A second page surfaces trending unstocked products with Amazon links.",
			sections: [
				{
					title: "Key Features:",
					bullets: [
						"Automated daily Amazon bestseller collection with 4-day ranking trend tracking",
						"Shopify inventory integration for stock-aware recommendations",
						"LLM-generated commercial actions (discounts, hero banner placements)",
						"Trending unstocked product discovery with direct Amazon links",
					],
				},
				{
					title: "My Contributions:",
					bullets: [
						"Built the **GCP** data pipeline with **Cloud Scheduler**, **Cloud Run**, **ScraperAPI**, and **Cloud SQL**",
						"Processed Amazon bestseller data to track ranking changes and trend signals",
						"Integrated Shopify stock data into the recommendation workflow",
						"Contributed to the **LLM** recommendation layer",
						"Deployed the **Streamlit** dashboard on GCP",
					],
				},
			],
			technologies: [
				"Python",
				"Streamlit",
				"Cloud Run",
				"Cloud SQL",
				"Cloud Scheduler",
				"OpenAI API",
				"pandas",
			],
			github: "https://github.com/loklokyuen/value-stream",
			demo: "https://value-stream-1000071166852.europe-west2.run.app",
			coverImage: ValueStreamCover,
			previewImage: ValueStreamHome,
			images: [
				{
					url: ValueStreamHome,
					description:
						"Value Stream dashboard — bestseller trends and recommendations",
				},
				{
					url: ValueStreamSuggestion,
					description:
						"LLM-generated commercial suggestions against Shopify stock",
				},
				{
					url: ValueStreamTrending,
					description: "Trending unstocked products with Amazon links",
				},
			],
		},
	},
	{
		title: "Moviever — A Blast from the Past",
		projectId: "moviever",
		type: "fullstack",
		category: "AI / Data",
		team: { size: 3, role: "Data pipeline + TMDB API + shopping bag" },
		details: {
			intro:
				"Moviever is a physical movie rental company seeking to differentiate in a competitive market by championing niche, highly-rated films. Working in a team of 3, Melody helped build A Blast from the Past, a **Streamlit** app that pulls live data from the **TMDB API** to offer highly-rated popular and niche movie suggestions based on genres and themes drawn from films users select themselves. She handled data cleaning, TMDB API calls, and the shopping bag so users can save picks for rental.",
			sections: [
				{
					title: "Key Features:",
					bullets: [
						"Niche highly-rated movie discovery from live TMDB data",
						"Taste profile built from films users select themselves",
						"Personalised recommendations across genres and themes",
						"Watchlist and shopping bag for saving rentals",
					],
				},
				{
					title: "My Contributions:",
					bullets: [
						"Built the **TMDB API** integration and data fetch pipeline",
						"Handled **data cleaning** with **pandas** for the recommendation flow",
						"Implemented the shopping bag so users can save picks for rental",
					],
				},
			],
			technologies: ["Python", "Streamlit", "pandas"],
			github: "https://github.com/loklokyuen/moviever_demo",
			demo: null,
			coverImage: MovieverCover,
		},
	},
	{
		title: "Work-XP Mobile Application",
		projectId: "work-xp-mobile-app",
		type: "fullstack",
		category: "Mobile Application",
		team: { size: 6, role: "Auth + chat + uploads" },
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
			coverImage: WorkXPCover,
			previewImage: WorkXPExplore,
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
		category: "Web Application",
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
				coverImage: NCNewsCoverSVG,
				previewImage: NCNewsCoverPhoto,
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
		category: "Web Application",
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
						"Implemented dark/light mode",
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
						"Dark/light mode toggle",
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
			coverImage: PortfolioCoverSVG,
			previewImage: PortfolioCoverPhoto,
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
