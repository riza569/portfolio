import './contact.css';

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-header">
        <h3 className="contact-heading">GET IN TOUCH</h3>
        <h1 className="contact-title">Contact Me</h1>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <p className="contact-info-text">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
          </p>

          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-icon">📧</div>
              <div className="contact-method-info">
                <h4>Email</h4>
                <p>riza@example.com</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">📱</div>
              <div className="contact-method-info">
                <h4>Phone</h4>
                <p>+1 234 567 890</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">📍</div>
              <div className="contact-method-info">
                <h4>Location</h4>
                <p>Available for remote work</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <a href="#" className="social-link" aria-label="GitHub">
              💻
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              💼
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              🐦
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              📷
            </a>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message here..."
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>

      <div className="footer">
        <p>&copy; 2025 Riza. All rights reserved. Built with passion and code.</p>
      </div>
    </div>
  );
};

export default Contact;
