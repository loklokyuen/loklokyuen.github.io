import { ReactNode } from "react";

/**
 * Formats markdown-style text into React nodes
 * - **bold text**
 * - *italic text*
 */
export const formatMarkdownText = (text: string): ReactNode[] => {
	if (!text) return [text];

	const boldParts = text.split(/(\*\*.*?\*\*)/g);

	return boldParts.map((part, index) => {
		// Handle bold text
		if (part.startsWith("**") && part.endsWith("**")) {
			const boldText = part.slice(2, -2);
			return <strong key={index}>{boldText}</strong>;
		}
		// Handle italic text - only if not already part of a bold text
		if (part.includes("*") && !part.includes("**")) {
			const italicParts = part.split(/(\*.*?\*)/g);
			if (italicParts.length > 1) {
				return italicParts.map((italicPart, i) => {
					if (italicPart.startsWith("*") && italicPart.endsWith("*")) {
						return <em key={`${index}-${i}`}>{italicPart.slice(1, -1)}</em>;
					}
					return italicPart;
				});
			}
		}
		return part;
	});
};
