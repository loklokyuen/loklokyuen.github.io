import { useState, useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("mdkekjre");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const contactRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (contactRef.current) 
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setLoaded(true);
                    observer.unobserve(entry.target);
                } else {
                    setLoaded(false);
                }
            });
        }, { threshold: 0.1 }
    );
    if (contactRef.current) {
        observer.observe(contactRef.current);
    }
    return () => {
        if (contactRef.current) {
            observer.unobserve(contactRef.current);
        }
    };
}, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  useEffect(() => {
    if (state.submitting){
      setLoading(true);
    }
    if (state.succeeded) {
      setLoading(false);
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' });
    }
  }, [state]);

  return (
    <section className={`contact animate-on-load slide-up ${loaded? 'loaded': ''}`} id="contact" ref={contactRef}>
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="contact-content flex flex-col w-full max-w-lg" style={{margin: '0 auto'}}>
          <p className=''>
            I'm currently looking for new opportunities and would love to hear from you. 
            Please feel free to get in touch or leave a message.
          </p>
          <div className="contact-info grid grid-flow-row grid-cols-1 gap-1 my-1">
            <div className="contact-item">
              <i className="fa-solid fa-envelope"></i>
              <span>melody.yuen@icloud.com</span>
            </div>
            <div className="contact-item">
              <i className="fa-solid fa-phone"></i>
              <span>+44 07774 195 561</span>
            </div>
            <div className="contact-item">
              <i className="fa-solid fa-map-marker-alt"></i>
              <span>Surrey, UK</span>
            </div>
            
          </div>
          
          <div className="contact-form">
            {loading ? <div className="loading">Loading...</div> :
            submitted ? (
              <div className="success-message">
                <h3>Thank you!</h3>
                <p>Your message has been sent. I'll get back to you soon!</p>
                <button className="btn" onClick={() => setSubmitted(false)}>Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className=''>
                <div className="grid grid-cols-3 gap-4 items-center m-2">
                  <label htmlFor="name">Name</label>
                  <input className='col-span-2 bg-primary-300 text-primary-800 rounded-md p-2 '
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-3 gap-4 items-center m-2">
                  <label htmlFor="email">Email</label>
                  <input className='col-span-2 bg-primary-300 text-primary-800  rounded-md p-2'
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-3 gap-4 items-start m-2">
                  <label htmlFor="message">Message</label>
                  <textarea className='col-span-2 bg-primary-300 text-primary-800 rounded-md p-2'
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <button type="submit" className="btn primary">Send Message</button>
              </form>
            )}
          </div>
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
