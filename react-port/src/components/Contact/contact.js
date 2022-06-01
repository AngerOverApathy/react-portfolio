import React from "react";
import { useState } from 'react';

function Contact() {
    const [state, handleSubmit] = useForm();
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
  return (
      <>
      <h1>Contact</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="form">
          <label className="label" htmlFor="name">Name</label>
          <input className="input" type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div className="form">
          <label className="label" htmlFor="email">Email Address</label>
          <input className="input" type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div className="form">
          <label className="label" htmlFor="message">Message</label>
          <textarea className="textarea" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        <button className="subBtn" data-testid="button" type="submit">Submit</button>
      </form>
      </>
    );
  }
  
  export default Contact;