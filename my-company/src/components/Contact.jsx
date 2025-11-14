import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false); // Track submission

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData); // Logs data to console
    setSubmitted(true); // Show confirmation message
    setFormData({ name: '', email: '', message: '' }); // Clear form
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Contact Us</h1>

      {submitted && (
        <p style={{ color: 'green', fontWeight: 'bold' }}>
          Thank you! Your message has been sent.
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{
            display: 'block',
            margin: '10px 0',
            padding: '8px',
            width: '100%',
            boxSizing: 'border-box'
          }}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{
            display: 'block',
            margin: '10px 0',
            padding: '8px',
            width: '100%',
            boxSizing: 'border-box'
          }}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{
            display: 'block',
            margin: '10px 0',
            padding: '8px',
            width: '100%',
            height: '100px',
            boxSizing: 'border-box'
          }}
          required
        />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
