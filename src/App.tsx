import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Intro from "./components/pages/home/Intro";
import About from "./components/pages/about/About";
import Skills from "./components/pages/skills/Skills";
import Projects from "./components/pages/projects/Projects";
import Project from "./components/pages/projects/Project";
import Contact from "./components/pages/contact/Contact";
import Footer from "./components/layout/Footer";
import BackToTop from "./components/ui/BackToTop";
import { Route, Routes } from "react-router-dom";

function App() {
	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => {
		const newDarkMode = !darkMode;
		setDarkMode(newDarkMode);
		if (newDarkMode) {
			document.getElementById("root")?.classList.add("dark-mode");
		} else {
			document.getElementById("root")?.classList.remove("dark-mode");
		}
	};

	useEffect(() => {
		if (darkMode) {
			document.getElementById("root")?.classList.add("dark-mode");
		} else {
			document.getElementById("root")?.classList.remove("dark-mode");
		}
	}, []);

	return (
		<div className={`app ${darkMode ? "dark-mode" : ""}`}>
			<Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
			<Routes>
				<Route path="/" element={<Intro />} />
				<Route path="/about" element={<About />} />
				<Route path="/skills" element={<Skills />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/projects/:projectId" element={<Project />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<Intro />} />
			</Routes>
			<Footer />
			<BackToTop threshold={200} />
		</div>
	);
}

export default App;
