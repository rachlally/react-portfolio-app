// import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import '../../styles/Contact.css';
// import Button from 'react-bootstrap/Button';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

// function Contact() {

//   const [formState, setFormState] = useState({
//     name: '', email: '', message: ''
//   })
//   const [errorMessage, setErrorMessage] = useState('')
//   const { name, email, message } = formState

//   const handleChange = (event) => {
//     //checking email and validating format
//     if (event.target.name === 'email') {
//       const isValid = validateEmail(event.target.value)
//       if (!isValid) {
//         setErrorMessage('Your email is invalid.')
//       } else {
//         setErrorMessage('')
//       }
//     } else {
//       //if blank: set error
//       if (!event.target.value.length) {
//         setErrorMessage(`${event.target.name} is required.`)
//       } else {
//         setErrorMessage('')
//       }
//     }
//     if (!errorMessage) {
//       //create array of form state. for every target, create key value pairs
//       setFormState({ ...formState, [event.target.name]: event.target.value })
//       console.log('Handle Form', formState)
//     }
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (!errorMessage) {
//       console.log('Submit Form', formState)
//     }
//   }

//   return (
//     <section className="formContainer">
//       <h3>I look forward to hearing from you. </h3>
//       <div className="form ">
//       <form  onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Enter your name:</label>
//           <input
//             type="text"
//             name="name"
//             defaultValue={name}
//             onBlur={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Enter your email:</label>
//           <input
//             type="email"
//             name="email"
//             defaultValue={email}
//             onBlur={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="message">Message here:</label><br/>
//           <textarea
//             name="message"
//             rows="5"
//             defaultValue={message}
//             onBlur={handleChange}
//           />
//         </div>
//         {errorMessage && (
//           <div>
//             <p>{errorMessage}</p>
//           </div>
//         )}
//         <Button variant="secondary" type="submit">Submit</Button>
//       </form>
//       </div>
//     </section>
//   )
// }




// export default Contact;

function Contact () {
  // const [formState, setFormState] = useState({
  //   name: '', email: '', message: ''
  // })
  // const [errorMessage, setErrorMessage] = useState('')
  // const { name, email, message } = formState
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_chpi9ea', 'template_ftqew0s', form.current, 'iRQMp1j0RxJxTlHeF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };


  // const handleChange = (event) => {
  //   //checking email and validating format
  //   if (event.target.name === 'email') {
  //     const isValid = validateEmail(event.target.value)
  //     if (!isValid) {
  //       setErrorMessage('Your email is invalid.')
  //     } else {
  //       setErrorMessage('')
  //     }
  //   } else {
  //     //if blank: set error
  //     if (!event.target.value.length) {
  //       setErrorMessage(`${event.target.name} is required.`)
  //     } else {
  //       setErrorMessage('')
  //     }
  //   }
  //   if (!errorMessage) {
  //     //create array of form state. for every target, create key value pairs
  //     setFormState({ ...formState, [event.target.name]: event.target.value })
  //     console.log('Handle Form', formState)
  //   }
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (!errorMessage) {
  //     console.log('Submit Form', formState)
  //   }
  // }


  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Contact;