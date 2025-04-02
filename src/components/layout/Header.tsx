import { useState, useEffect } from "react";
import "../../styles/Header.css";
import { NavLink } from "react-router-dom";

interface HeaderProps {
	darkMode: boolean;
	toggleDarkMode: () => void;
}

const Header = ({ darkMode, toggleDarkMode }: HeaderProps) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const closeMenu = () => {
		setMenuOpen(false);
	};

	useEffect(() => {
		// Close menu when clicking outside
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as HTMLElement;
			if (
				menuOpen &&
				!target.closest(".nav") &&
				!target.closest(".menu-toggle")
			) {
				setMenuOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [menuOpen]);

	const menuItems = [
		{ path: "/", label: "Home", icon: "fa-home" },
		{ path: "/about", label: "About", icon: "fa-user" },
		{ path: "/skills", label: "Skills", icon: "fa-code" },
		{ path: "/projects", label: "Projects", icon: "fa-laptop-code" },
		{ path: "/contact", label: "Contact", icon: "fa-envelope" },
	];

	return (
		<header className={`header ${darkMode ? "dark" : ""}`}>
			<div className="flex flex-row justify-between items-center">
				<div className="header-logo text-start">
					<NavLink to="/">
						<span className="text-xl font-semibold font-stretch-140%">
							Melody Yuen
						</span>
					</NavLink>
				</div>

				<div className={`nav ${menuOpen ? "open" : ""}`}>
					<ul className="menu-list">
						{menuItems.map((item, index) => (
							<li
								key={item.path}
								className={activeIndex === index ? "active" : ""}
								onMouseEnter={() => setActiveIndex(index)}
								onMouseLeave={() => setActiveIndex(null)}>
								<NavLink
									to={item.path}
									onClick={closeMenu}
									className={({ isActive }) => (isActive ? "active-link" : "")}>
									<i className={`fas ${item.icon} menu-icon`}></i>
									<span>{item.label}</span>
								</NavLink>
							</li>
						))}
					</ul>
				</div>

				<div className="header-buttons">
					<button
						className="theme-toggle w-16 text-center"
						onClick={toggleDarkMode}
						aria-label={
							darkMode ? "Switch to light mode" : "Switch to dark mode"
						}>
						{darkMode ? (
							<i className="fa-solid fa-sun"></i>
						) : (
							<i className="fa-solid fa-moon"></i>
						)}
					</button>
					<button
						className="menu-toggle w-16 text-center"
						onClick={toggleMenu}
						aria-label={menuOpen ? "Close menu" : "Open menu"}
						aria-expanded={menuOpen}>
						{menuOpen ? (
							<i className="fa-solid fa-xmark"></i>
						) : (
							<i className="fa-solid fa-bars"></i>
						)}
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
