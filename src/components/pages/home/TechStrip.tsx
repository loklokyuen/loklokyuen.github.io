import { NavLink } from "react-router-dom";
import Skill from "../../common/Skill";
import Eyebrow from "../../common/Eyebrow";

const featuredTech: SkillName[] = [
	"Python",
	"TypeScript",
	"React",
	"Node.js",
	"PostgreSQL",
	"LangChain",
	"LangGraph",
	"OpenAI API",
	"Streamlit",
];

const TechStrip = () => {
	return (
		<section className="home-section tech-strip-section">
			<div className="home-section-header">
				<Eyebrow>Technologies I work with</Eyebrow>
			</div>
			<div className="tech-strip-grid">
				{featuredTech.map((tech) => (
					<div key={tech} className="tech-tile">
						<div className="tech-tile-icon">
							<Skill skillName={tech} />
						</div>
						<span className="tech-tile-label">{tech}</span>
					</div>
				))}
				<NavLink to="/skills" className="tech-tile tech-tile-more">
					<div className="tech-tile-icon tech-tile-more-icon">
						<span aria-hidden="true">···</span>
					</div>
					<span className="tech-tile-label">
						and more <span aria-hidden="true">→</span>
					</span>
				</NavLink>
			</div>
		</section>
	);
};

export default TechStrip;
