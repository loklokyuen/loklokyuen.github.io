import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import SocialLinks from "../../common/SocialLinks";
import contactImage from "../../../assets/check-for-mails.jpg";
import { Tooltip } from "@mui/material";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";

const Contact = () => {
	const [state, handleSubmit] = useForm("mdkekjre");
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [loaded, setLoaded] = useState(false);
	const { ref: contactRef, isVisible } = useIntersectionObserver<HTMLElement>();

	useEffect(() => {
		if (contactRef.current)
			contactRef.current.scrollIntoView({ behavior: "smooth" });
	}, []);

	useEffect(() => {
		if (isVisible) {
			setLoaded(true);
		}
	}, [isVisible]);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	useEffect(() => {
		if (state.submitting) {
			setLoading(true);
			setError(null);
		}
		if (state.succeeded) {
			setLoading(false);
			setSubmitted(true);
			setFormData({ name: "", email: "", message: "" });
		}
		if (state.errors) {
			setLoading(false);
			setError("An error occurred sending your message. Please try again.");
		}
	}, [state]);

	return (
		<section
			className={`contact animate-on-load slide-up ${loaded ? "loaded" : ""}`}
			id="contact"
			ref={contactRef}>
			<div className="container mx-auto px-4 py-8 md:py-12">
				<h2 className="section-title">Contact Me</h2>
				<div className="contact-content flex flex-col w-full max-w-2xl mt-10 mx-auto bg-white rounded-2xl p-2 shadow-lg transition-all duration-300">
					<p className="text-center max-w-lg mx-auto mb-4">
						I'm currently looking for new opportunities and would love to hear
						from you!
					</p>
					<Tooltip
						title="I'll be sure to check my mailbox!"
						placement="top"
						arrow>
						<div className="contact-image-container mx-auto">
							<img
								src={contactImage}
								alt="I'll check for mails"
								className="contact-image rounded-full w-40 md:w-48 shadow-lg shadow-secondary-500/30 transition-all duration-300 border-2 border-transparent hover:border-secondary-300"
							/>
						</div>
					</Tooltip>
					<div className="contact-info grid grid-flow-row grid-cols-1 my-6">
						<div className="contact-item flex flex-row items-center justify-center gap-1 hover:bg-primary-100 rounded-lg transition-colors duration-200">
							<i className="fa-solid fa-envelope text-secondary-500 text-xl"></i>
							<a href="mailto:melody.yuen@icloud.com">melody.yuen@icloud.com</a>
						</div>
						<div className="contact-item flex flex-row items-center justify-center gap-1 hover:bg-primary-100 rounded-lg transition-colors duration-200">
							<i className="fa-solid fa-phone text-secondary-500 text-xl"></i>
							<a href="tel:+447774195561">+44 07774 195 561</a>
						</div>
						<div className="contact-item flex flex-row items-center justify-center gap-1 hover:bg-primary-100 rounded-lg transition-colors duration-200">
							<i className="fa-solid fa-map-marker-alt text-secondary-500 text-xl"></i>
							<a
								href="https://www.google.com/maps/place/Staines-upon-Thames/"
								target="_blank"
								rel="noopener noreferrer">
								Staines-upon-Thames, UK
							</a>
						</div>
						<div className="mt-2">
							<SocialLinks />
						</div>
					</div>

					<div className="contact-form mt-2">
						{loading ? (
							<div className="loading flex justify-center items-center p-8">
								<div className="small-loader"></div>
								<span className="ml-4">Sending message...</span>
							</div>
						) : error ? (
							<div className="error-message bg-red-100 text-red-700 p-4 rounded-lg text-center">
								<p>{error}</p>
								<button
									className="btn bg-red-500 hover:bg-red-600 mt-2"
									onClick={() => setError(null)}>
									Try Again
								</button>
							</div>
						) : submitted ? (
							<div className="success-message bg-primary-100 p-6 rounded-xl text-center">
								<h3 className="text-xl font-bold text-secondary-600 mb-2">
									Thank you!
								</h3>
								<p className="mb-4">
									Your message has been sent. I'll get back to you soon!
								</p>
								<button
									className="btn bg-secondary-500 hover:bg-secondary-600 transition-all duration-200 transform hover:-translate-y-1"
									onClick={() => setSubmitted(false)}>
									Send Another Message
								</button>
							</div>
						) : (
							<form onSubmit={handleSubmit} className="space-y-4">
								<div className="form-group md:grid md:grid-cols-4 md:gap-4 items-center m-2">
									<label
										htmlFor="name"
										className="block text-center mb-2 md:mb-0 font-medium md:text-end">
										Name
									</label>
									<input
										className="col-span-2 w-full bg-primary-100 text-primary-800 rounded-lg p-3 border border-primary-300 focus:outline-none focus:ring-2 focus:ring-secondary-400"
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										required
									/>
								</div>

								<div className="form-group md:grid md:grid-cols-4 md:gap-4 items-center m-2">
									<label
										htmlFor="email"
										className="block text-center mb-2 md:mb-0 font-medium md:text-end">
										Email
									</label>
									<input
										className="col-span-2 w-full bg-primary-100 text-primary-800 rounded-lg p-3 border border-primary-300 focus:outline-none focus:ring-2 focus:ring-secondary-400"
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										required
									/>
								</div>

								<div className="form-group md:grid md:grid-cols-4 md:gap-4 items-center m-2">
									<label
										htmlFor="message"
										className="block text-center mb-2 md:mb-0 font-medium md:text-end">
										Message
									</label>
									<textarea
										className="col-span-2 w-full bg-primary-100 text-primary-800 rounded-lg p-3 border border-primary-300 focus:outline-none focus:ring-2 focus:ring-secondary-400"
										id="message"
										name="message"
										rows={5}
										value={formData.message}
										onChange={handleChange}
										required
									/>
								</div>

								<div className="text-center">
									<button
										type="submit"
										className="btn bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
										<i className="fa-solid fa-paper-plane mr-2"></i>
										Send Message
									</button>
								</div>
							</form>
						)}
					</div>
					<ValidationError
						prefix="Message"
						field="message"
						errors={state.errors}
						className="text-secondary-600 mt-2"
					/>
				</div>
			</div>
		</section>
	);
};

export default Contact;
