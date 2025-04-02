import { useEffect, useState } from "react";

interface BackToTopProps {
	threshold?: number;
}

const BackToTop: React.FC<BackToTopProps> = ({ threshold = 300 }) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.pageYOffset > threshold) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, [threshold]);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<button
			className={`back-to-top fixed bottom-5 right-5 bg-primary-500 hover:bg-primary-600 
        text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50
        ${
					isVisible
						? "opacity-90 translate-y-0"
						: "opacity-0 translate-y-10 pointer-events-none"
				}`}
			onClick={scrollToTop}
			aria-label="Back to top">
			<i className="fa-solid fa-arrow-up"></i>
		</button>
	);
};

export default BackToTop;
