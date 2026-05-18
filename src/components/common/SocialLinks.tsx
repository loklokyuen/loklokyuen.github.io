interface SocialLinksProps {
	variant?: "large" | "compact";
	className?: string;
}

const socials = [
	{
		href: "https://github.com/loklokyuen",
		icon: "fa-github",
		label: "GitHub",
		external: true,
	},
	{
		href: "https://linkedin.com/in/melody-yuen-ll",
		icon: "fa-linkedin",
		label: "LinkedIn",
		external: true,
	},
	{
		href: "mailto:loklokyuen.m@gmail.com",
		icon: "fa-envelope",
		label: "Email",
		external: false,
	},
];

const SocialLinks = ({ variant = "large", className = "" }: SocialLinksProps) => {
	if (variant === "compact") {
		return (
			<div className={`social-links-compact flex flex-row gap-4 items-center ${className}`}>
				{socials.map((s) => (
					<a
						key={s.label}
						href={s.href}
						aria-label={s.label}
						target={s.external ? "_blank" : undefined}
						rel={s.external ? "noopener noreferrer" : undefined}
						className="social-icon-compact text-primary-600 hover:text-secondary-500 transition-colors">
						<i className={`${s.icon.startsWith("fa-envelope") ? "fa-solid" : "fa-brands"} ${s.icon} text-xl`}></i>
					</a>
				))}
			</div>
		);
	}

	return (
		<div className={`social-links flex flex-row gap-3 justify-center items-stretch ${className}`}>
			{socials.slice(0, 2).map((s) => (
				<a
					key={s.label}
					href={s.href}
					aria-label={s.label}
					target={s.external ? "_blank" : undefined}
					rel={s.external ? "noopener noreferrer" : undefined}>
					<i
						className={`fa-brands ${s.icon} fa-2xl text-primary-400 hover:text-secondary-400 border-2 border-primary-400 rounded-full px-4 py-6 mt-2 hover:border-secondary-400`}></i>
				</a>
			))}
		</div>
	);
};

export default SocialLinks;
