import JavaScriptIcon from "../../assets/tech/JavaScript.png";
import ReactIcon from "../../assets/tech/react.svg";
import TypeScriptIcon from "../../assets/tech/TypeScript.svg";
import HTMLIcon from "../../assets/tech/HTML5.svg";
import CSSIcon from "../../assets/tech/css.svg";
import NodeIcon from "../../assets/tech/jsIcon.svg";
import ExpressIcon from "../../assets/tech/express-js.svg";
import PostgreSQLIcon from "../../assets/tech/Postgresql.svg";
import GitIcon from "../../assets/tech/Git.svg";
import ReactNativeIcon from "../../assets/tech/ReactNative.svg";
import FirebaseIcon from "../../assets/tech/Firebase1.png";
import FirestoreIcon from "../../assets/tech/Firestore.png";
import CloudinaryIcon from "../../assets/tech/Cloudinary.jpg";
import ReactNativePaperIcon from "../../assets/tech/ReactNativePaper.svg";
import JestIcon from "../../assets/tech/jest.svg";
import GitHubActionsIcon from "../../assets/tech/GitHubActions.svg";
import SupabaseIcon from "../../assets/tech/supabase.png";
import TailwindIcon from "../../assets/tech/TailwindCSS.svg";
import ReactRouterIcon from "../../assets/tech/ReactRouter.svg";
import AxiosIcon from "../../assets/tech/Axios.png";
import NetlifyIcon from "../../assets/tech/netlify.svg";
import MuiIcon from "../../assets/tech/mui.png";
import ViteIcon from "../../assets/tech/vite.svg";
import ExpoIcon from "../../assets/tech/expo.svg";
import GitHubIcon from "../../assets/tech/github.png";
import PythonIcon from "../../assets/tech/python.svg";
import LangChainIcon from "../../assets/tech/langchain.svg";
import OpenAIIcon from "../../assets/tech/openai.svg";
import PandasIcon from "../../assets/tech/pandas.svg";
import NumPyIcon from "../../assets/tech/numpy.svg";
import JupyterIcon from "../../assets/tech/jupyter.svg";
import StreamlitIcon from "../../assets/tech/streamlit.svg";
import GoogleCloudIcon from "../../assets/tech/googlecloud.svg";
import PytestIcon from "../../assets/tech/pytest.svg";
import Tooltip from "@mui/material/Tooltip";
import {
	GitBranch,
	FileSearch,
	MessageSquareText,
	ChartLine,
	Database,
	type LucideIcon,
} from "lucide-react";

type SkillProps = {
	skillName: SkillName;
	size?: string;
};

const skillLucide: Partial<Record<SkillName, LucideIcon>> = {
	LangGraph: GitBranch,
	RAG: FileSearch,
	"Prompt Engineering": MessageSquareText,
	matplotlib: ChartLine,
	pgvector: Database,
};

const skillIcons: Partial<Record<SkillName, string>> = {
	JavaScript: JavaScriptIcon,
	React: ReactIcon,
	TypeScript: TypeScriptIcon,
	HTML: HTMLIcon,
	CSS: CSSIcon,
	"Node.js": NodeIcon,
	"Express.js": ExpressIcon,
	PostgreSQL: PostgreSQLIcon,
	Git: GitIcon,
	"React Native": ReactNativeIcon,
	Firebase: FirebaseIcon,
	"Firebase Authentication": FirebaseIcon,
	Firestore: FirestoreIcon,
	Cloudinary: CloudinaryIcon,
	"React Native Paper": ReactNativePaperIcon,
	Jest: JestIcon,
	Supertest: JestIcon,
	"GitHub Actions": GitHubActionsIcon,
	Supabase: SupabaseIcon,
	"Tailwind CSS": TailwindIcon,
	"Material-UI": MuiIcon,
	"React Router": ReactRouterIcon,
	Axios: AxiosIcon,
	Netlify: NetlifyIcon,
	Vite: ViteIcon,
	Expo: ExpoIcon,
	GitHub: GitHubIcon,
	"GitHub Pages": GitHubIcon,
	Python: PythonIcon,
	LangChain: LangChainIcon,
	"OpenAI API": OpenAIIcon,
	pandas: PandasIcon,
	NumPy: NumPyIcon,
	Jupyter: JupyterIcon,
	Streamlit: StreamlitIcon,
	"Cloud Run": GoogleCloudIcon,
	"Cloud SQL": GoogleCloudIcon,
	"Cloud Scheduler": GoogleCloudIcon,
	pytest: PytestIcon,
	SQL: PostgreSQLIcon,
};

const Skill = ({ skillName, size }: SkillProps) => {
	const icon = skillIcons[skillName];
	const LucideComp = skillLucide[skillName];
	const isSmall = size === "small";

	if (LucideComp) {
		return (
			<div className="skill place-items-center">
				<Tooltip title={skillName} placement="top" arrow>
					<span
						className={`inline-flex items-center justify-center text-primary-700 ${
							isSmall ? "w-6 h-6" : "w-12 h-12"
						}`}>
						<LucideComp
							size={isSmall ? 18 : 28}
							strokeWidth={1.6}
							aria-label={skillName}
						/>
					</span>
				</Tooltip>
			</div>
		);
	}

	if (!icon) {
		return (
			<div className="skill place-items-center">
				<Tooltip title={skillName} placement="top" arrow>
					<span
						className={`inline-flex items-center justify-center rounded-md font-medium text-secondary-700 bg-secondary-100 ${
							isSmall ? "text-[10px] px-2 h-6" : "text-xs px-3 h-12"
						}`}>
						{skillName}
					</span>
				</Tooltip>
			</div>
		);
	}

	return (
		<div className="skill place-items-center">
			<Tooltip title={skillName} placement="top" arrow>
				<img
					src={icon}
					alt={skillName}
					className={` rounded-xs ${isSmall ? "w-6 h-6" : "w-12 h-12"}`}
				/>
			</Tooltip>
		</div>
	);
};

export default Skill;
