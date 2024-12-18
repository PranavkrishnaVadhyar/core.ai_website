import React from 'react';

function ContactForm() {
  return (
    <form className="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" rows="5" required></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
