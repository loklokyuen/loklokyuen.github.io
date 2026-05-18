import { NavLink } from "react-router-dom";

interface SectionLinkProps {
	to: string;
	children: React.ReactNode;
	className?: string;
}

const SectionLink = ({ to, children, className = "" }: SectionLinkProps) => {
	return (
		<NavLink to={to} className={`section-link ${className}`}>
			<span>{children}</span>
			<span className="section-link-arrow" aria-hidden="true">
				→
			</span>
		</NavLink>
	);
};

export default SectionLink;
