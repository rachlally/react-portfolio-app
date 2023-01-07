import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import '../../styles/Contact.css';
import Button from 'react-bootstrap/Button';

function Contact() {

  const [formState, setFormState] = useState({
    name: '', email: '', message: ''
  })
  const [errorMessage, setErrorMessage] = useState('')
  const { name, email, message } = formState

  const handleChange = (event) => {
    //checking email and validating format
    if (event.target.name === 'email') {
      const isValid = validateEmail(event.target.value)
      if (!isValid) {
        setErrorMessage('Your email is invalid.')
      } else {
        setErrorMessage('')
      }
    } else {
      //if blank: set error
      if (!event.target.value.length) {
        setErrorMessage(`${event.target.name} is required.`)
      } else {
        setErrorMessage('')
      }
    }
    if (!errorMessage) {
      //create array of form state. for every target, create key value pairs
      setFormState({ ...formState, [event.target.name]: event.target.value })
      console.log('Handle Form', formState)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState)
    }
  }

  return (
    <section className="formContainer">
      <h3>Thanks for visiting!  I look forward to hearing from you. </h3>
      <div className="form ">
      <form  onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Enter your name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Enter your email:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message here:</label><br/>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p>{errorMessage}</p>
          </div>
        )}
        <Button variant="secondary" type="submit">Submit</Button>
      </form>
      </div>
    </section>
  )
}




export default Contact;

// import React, { useState } from "react";

// const ContactForm = () => {
//   const [status, setStatus] = useState("Submit");
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Sending...");
//     const { name, email, message } = e.target.elements;
//     let details = {
//       name: name.value,
//       email: email.value,
//       message: message.value,
//     };
//     let response = await fetch("http://localhost:5000/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json;charset=utf-8",
//       },
//       body: JSON.stringify(details),
//     });
//     setStatus("Submit");
//     let result = await response.json();
//     alert(result.status);
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input type="text" id="name" required />
//       </div>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" required />
//       </div>
//       <div>
//         <label htmlFor="message">Message:</label>
//         <textarea id="message" required />
//       </div>
//       <button type="submit">{status}</button>
//     </form>
//   );
// };

// export default ContactForm;