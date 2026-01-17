
import "./contactDetails.css";

export let Contact = () => {
  return (
    <div className="contact-card">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <p><strong>Address:</strong> 123, Main Street, Your City, India</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Email:</strong> support@example.com</p>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit" className="send-btn">Send Message</button>
      </form>
    </div>
  );
};
