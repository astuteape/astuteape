import React from "react"

// Forms use Netlify Forms
const ContactForm = () => (
  <div>
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      action="/form-success"
    >
      <p class="hidden">
        <label>
          All humans ignore this field: <input name="bot-field" />
        </label>
      </p>
      <p>
        <label>Full Name:</label>
        <br />
        <input type="text" name="name" placeholder="Nim Chimpsky" />
      </p>
      <p>
        <label>Email:</label>
        <br />
        <input type="email" name="email" placeholder="nim@astuteape.com" />
      </p>
      <p>
        <label>Message:</label>
        <br />
        <textarea name="message" />
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </div>
)

export default ContactForm
