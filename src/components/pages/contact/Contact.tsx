import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Tooltip } from "@mui/material";
import Eyebrow from "../../common/Eyebrow";
import SocialLinks from "../../common/SocialLinks";
import contactImage from "../../../assets/check-for-mails.jpg";

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

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

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
		<section className="contact-page" id="contact">
			<div className="contact-page-header">
				<div className="contact-page-header-text">
					<Eyebrow>Get in touch</Eyebrow>
					<h1 className="contact-page-title">
						Let's <em className="accent-sage">talk</em>.
					</h1>
					<p className="contact-page-intro">
						Drop a message and I'll get back to you.
					</p>
				</div>
				<Tooltip
					title="I'll be sure to check my mailbox!"
					placement="left"
					arrow>
					<div className="contact-mailbox">
						<img
							src={contactImage}
							alt="Checking the mailbox"
							className="contact-mailbox-image"
						/>
					</div>
				</Tooltip>
			</div>

			<div className="contact-grid">
				<aside className="contact-info">
					<div className="contact-info-item">
						<Eyebrow>Email</Eyebrow>
						<a href="mailto:melody.yuen@icloud.com" className="contact-info-link">
							melody.yuen@icloud.com
						</a>
					</div>
					<div className="contact-info-item">
						<Eyebrow>Phone</Eyebrow>
						<a href="tel:+447774195561" className="contact-info-link">
							+44 07774 195 561
						</a>
					</div>
					<div className="contact-info-item">
						<Eyebrow>Based in</Eyebrow>
						<a
							href="https://www.google.com/maps/place/Staines-upon-Thames/"
							target="_blank"
							rel="noopener noreferrer"
							className="contact-info-link">
							Staines-upon-Thames, UK
						</a>
					</div>
					<div className="contact-info-item">
						<Eyebrow>Elsewhere</Eyebrow>
						<SocialLinks variant="compact" className="contact-socials" />
					</div>
				</aside>

				<div className="contact-form-wrap">
					{loading ? (
						<div className="contact-form-state">
							<div className="small-loader"></div>
							<span>Sending message…</span>
						</div>
					) : error ? (
						<div className="contact-form-state contact-form-error">
							<p>{error}</p>
							<button className="btn outline" onClick={() => setError(null)}>
								Try Again
							</button>
						</div>
					) : submitted ? (
						<div className="contact-form-state contact-form-success">
							<h3>Thank you!</h3>
							<p>Your message has been sent. I'll get back to you soon.</p>
							<button className="btn" onClick={() => setSubmitted(false)}>
								Send another
							</button>
						</div>
					) : (
						<form onSubmit={handleSubmit} className="contact-form">
							<label className="contact-field">
								<span className="contact-field-label">Name</span>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									required
								/>
							</label>
							<label className="contact-field">
								<span className="contact-field-label">Email</span>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									required
								/>
							</label>
							<label className="contact-field">
								<span className="contact-field-label">Message</span>
								<textarea
									id="message"
									name="message"
									rows={6}
									value={formData.message}
									onChange={handleChange}
									required
								/>
							</label>
							<ValidationError
								prefix="Message"
								field="message"
								errors={state.errors}
								className="contact-validation"
							/>
							<button type="submit" className="btn contact-submit">
								<i className="fa-solid fa-paper-plane mr-2" aria-hidden="true"></i>
								Send Message
							</button>
						</form>
					)}
				</div>
			</div>
		</section>
	);
};

export default Contact;
