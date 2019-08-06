import React from "react"
import { navigate } from "gatsby-link"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  render() {
    return (
      <div>
        <form
          name="contact-form"
          method="post"
          action="/form-success"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <div className="hidden">
            <label>
              All humans ignore this field:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </div>
          <p>
            <label htmlFor="subject" className="hidden">
              <input
                type="text"
                name="subject"
                value="Astute Ape Contact Form Submission"
              />
            </label>
            <label htmlFor={"name"}>Full Name:</label>
            <br />
            <input
              type={"text"}
              name={"name"}
              onChange={this.handleChange}
              placeholder={"Nim Chimpsky"}
              required={true}
            />
          </p>
          <p>
            <label htmlFor={"email"}>Email:</label>
            <br />
            <input
              type={"email"}
              name={"email"}
              onChange={this.handleChange}
              placeholder={"nim@astuteape.com"}
              required={true}
            />
          </p>
          <p>
            <label htmlFor={"message"}>Message:</label>
            <br />
            <textarea
              name={"message"}
              onChange={this.handleChange}
              placeholder={"Hi Wade, I have a question . . . ."}
              required={true}
            />
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    )
  }
}

export default ContactForm
