import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

// initialize the values of the state

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Error catching
  const [errorMessage, setErrorMessage] = useState("");

  //JSX
  // destructure formState
  const { name, email, message } = formState;

  // Change in the html

  function handleChange(e) {
    // validate email
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log("isValid ", isValid);
      //isValid conditional
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      // Either name or message are empty
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        // everything checks out
        setErrorMessage("");
      }
    }
    // without the spread operator ..., the formState object would be
    // overwritten to only contain the name:value pair
    // [e.target.name]  lets us DRY, so we can reuse setFormState
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("State updated!");
    }

    //  console.log("e.target", e.target.name);

    // console.log("errorMessage", errorMessage);
  }
  // placed outside the handleChange function because setFormState is asynchronous.
  //console.log(formState);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  // Have to use htmlFor because it is a keyword reserved for javascript.
  // same with for
  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            defaultValue={name}
            onBlur={handleChange}
            name="name"
          />
        </div>

        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            defaultValue={email}
            onBlur={handleChange}
            name="email"
          />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            defaultValue={message}
            onBlur={handleChange}
            rows="5"
          />
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
