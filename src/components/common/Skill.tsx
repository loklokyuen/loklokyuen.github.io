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
import Tooltip from "@mui/material/Tooltip";

type SkillProps = {
	skillName: SkillName;
	size?: string;
};

const Skill = ({ skillName, size }: SkillProps) => {
	const skills: Record<SkillName, string> = {
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
	};

	return (
		<div className="skill place-items-center">
			<Tooltip title={skillName} placement="top" arrow>
				<img
					src={skills[skillName]}
					alt={skillName}
					className={` rounded-xs ${
						size === "small" ? "w-6 h-6" : "w-12 h-12"
					}`}
				/>
			</Tooltip>
		</div>
	);
};

export default Skill;
