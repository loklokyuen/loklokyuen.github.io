import { useState, useEffect, useCallback, useRef } from "react";

interface TypewriterProps {
	text: string;
	delay?: number;
	className?: string;
}

const Typewriter = ({ text, delay = 100, className = "" }: TypewriterProps) => {
	const [displayText, setDisplayText] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isTyping, setIsTyping] = useState(true);
	const timeoutRef = useRef<number | null>(null);

	const getRandomizedDelay = useCallback(() => {
		return Math.floor(delay * (0.8 + Math.random() * 0.4));
	}, [delay]);

	useEffect(() => {
		setDisplayText("");
		setCurrentIndex(0);
		setIsTyping(true);
	}, [text]);

	useEffect(() => {
		if (currentIndex < text.length) {
			const randomDelay = getRandomizedDelay();

			timeoutRef.current = window.setTimeout(() => {
				setDisplayText((prev) => prev + text[currentIndex]);
				setCurrentIndex((prev) => prev + 1);
			}, randomDelay);

			return () => {
				if (timeoutRef.current) {
					clearTimeout(timeoutRef.current);
				}
			};
		} else {
			setIsTyping(false);
		}
	}, [currentIndex, getRandomizedDelay, text]);

	return (
		<div className="typewriter-container">
			<h2 className={className}>
				{displayText}
				<span className={`cursor ${isTyping ? "typing" : "blinking"}`}></span>
			</h2>
		</div>
	);
};

export default Typewriter;
