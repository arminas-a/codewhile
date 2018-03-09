import React from "react";
import { Form, Text, TextArea } from "react-form";
import "./../styles/css/Global.css";
import "./../styles/css/Contact.css";

const Forms = () => {
  return (
    <Form>
      {formApi => (
        <form onSubmit={formApi.submitForm} id="form1">
          <label htmlFor="name">Name *</label>
          <Text field="name" className="name" />
          <label htmlFor="email">Email *</label>
          <Text field="email" className="email" />
          <label htmlFor="phone">Phone *</label>
          <Text field="phone" className="phone" />
          <label htmlFor="message">Message *</label>
          <TextArea field="message" className="message" />
          <button type="submit" className="Form-button">
            Send the message
          </button>
        </form>
      )}
    </Form>
  );
};

export default Forms;
