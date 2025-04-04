import { useEffect, useRef, useState } from "react";

interface UseIntersectionObserverOptions {
	threshold?: number;
	rootMargin?: string;
	onlyOnce?: boolean;
}

const useIntersectionObserver = <T extends HTMLElement>(
	options: UseIntersectionObserverOptions = {}
) => {
	const { threshold = 0.1, rootMargin = "0px", onlyOnce = true } = options;

	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef<T>(null);
	const observerRef = useRef<IntersectionObserver | null>(null);

	useEffect(() => {
		if (observerRef.current) {
			if (ref.current) {
				observerRef.current.unobserve(ref.current);
			}
			observerRef.current = null;
		}

		observerRef.current = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible(true);
						if (onlyOnce && ref.current && observerRef.current) {
							observerRef.current.unobserve(ref.current);
						}
					} else if (!onlyOnce) {
						setIsVisible(false);
					}
				});
			},
			{ threshold, rootMargin }
		);

		const currentRef = ref.current;
		if (currentRef && observerRef.current) {
			observerRef.current.observe(currentRef);
		}

		return () => {
			if (currentRef && observerRef.current) {
				observerRef.current.unobserve(currentRef);
				observerRef.current.disconnect();
			}
		};
	}, [threshold, rootMargin, onlyOnce]);

	return { ref, isVisible };
};

export default useIntersectionObserver;
