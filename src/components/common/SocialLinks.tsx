const SocialLinks = () => {
	return (
		<div className="social-links flex flex-row gap-3 justify-center items-stretch">
			<a
				href="https://github.com/loklokyuen"
				target="_blank"
				rel="noopener noreferrer">
				<i className="fab fa-github fa-2xl text-primary-400 hover:text-secondary-400 border-2 border-primary-400 rounded-full px-4 py-6 mt-2 hover:border-secondary-400"></i>
			</a>
			<a
				href="https://linkedin.com/in/melody-yuen-ll"
				target="_blank"
				rel="noopener noreferrer">
				<i className="fab fa-linkedin fa-2xl text-primary-400 hover:text-secondary-400 border-2 border-primary-400 rounded-full px-4 py-6 mt-2 hover:border-secondary-400"></i>
			</a>
		</div>
	);
};
export default SocialLinks;
