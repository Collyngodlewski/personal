import React from "react";
import { StyledBody } from "./Styling/Styling";
import { useForm, ValidationError } from "@formspree/react";


export default function Contact() {
  const [state, handleSubmit] = useForm("mjvlpwlk");
  if (state.succeeded) {
    return <h1>Thanks for reaching out!</h1>;
  }

  return (
    <StyledBody>
      <div class="contact-container">
          
        <form onSubmit={handleSubmit} id="my-form" >
          <div className="contact-div">
            <label htmlFor="Name">Name</label>
            <input type="text" id="Name" name="Name" />
          </div>

          <div className="contact-div">
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" name="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="contact-div">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <div className="contact-div">
            <button type="submit" disabled={state.submitting}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </StyledBody>
  );
}
