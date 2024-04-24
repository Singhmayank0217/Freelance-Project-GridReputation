import React from 'react';
import './form.css'; 

const Form = ({ onClose }) => {
  return (
    <div className="form-container">
      <button className="close-button" onClick={onClose}>X</button>
      <div className='form-data'>
        <p>Fill up this form and we will get back to you asap!</p>
        <form action="https://formsubmit.co/support@gridreputation.com" method="POST">
          <label>
            Your Name:
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              required
            />
          </label>

          <label>
            Your Email:
            <input
              type="email"
              placeholder="Enter your Email"
              name="email"
              required
            />
          </label>

          <label>
            Your Organization:
            <input
              type="text"
              placeholder="Enter your Organization"
              name="organization"
              required
            />
          </label>

          <label>
            Service You want to avail:
            <input
              type="text"
              placeholder="Enter the service"
              name="service"
              required
            />
          </label>

          <label>
            Comments:
            <textarea
              placeholder="Tell us more about your project"
              name="comments"
              required
            ></textarea>
          </label>

          <input type="hidden" name="_subject" value="Grid Reputation Service Submission!" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="https://gridreputation.com/thankyou" />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
