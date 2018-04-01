import React from "react";
import "./../styles/css/Global.css";
import "./../styles/css/Contact.css";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => {
        document.getElementById("submit-button").innerHTML = "Success";
        document.getElementById("submit-button").className += " success";
        document.getElementById("invitation-description").innerHTML = "Thank you for your message. We will contact you soon."

      })
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Your Name:{" "}
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            required
          />
        </label>

        <label>
          Your Email:{" "}
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            required
          />
        </label>

        <label>
          Your Message:{" "}
          <textarea
            name="message"
            value={message}
            onChange={this.handleChange}
            required
          />
        </label>

        <button className="Button" id="submit-button" type="submit" onclick={`this.blur();`}>Send</button>
      </form>
    );
  }
}

export default ContactForm;
