import react, { useState } from "react";

// initialize the values of the state

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  //JSX
  // destructure formState
  const { name, email, message } = formState;

  // Change in the html

  function handleChange(e) {
    // without the spread operator ..., the formState object would be
    // overwritten to only contain the name:value pair
    // [e.target.name]  lets us DRY, so we can reuse setFormState
    setFormState({ ...formState, [e.target.name]: e.target.value });
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
            onChange={handleChange}
            name="name"
          />
        </div>

        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            defaultValue={email}
            onChange={handleChange}
            name="email"
          />
        </div>

        <div>
          <textarea htmlFor="message">Message:</textarea>
          <input
            type="message"
            defaultValue={message}
            onChange={handleChange}
            rows="5"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
