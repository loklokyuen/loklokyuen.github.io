interface EyebrowProps {
	children: React.ReactNode;
	className?: string;
}

const Eyebrow = ({ children, className = "" }: EyebrowProps) => {
	return (
		<span className={`eyebrow ${className}`}>
			{children}
		</span>
	);
};

export default Eyebrow;
