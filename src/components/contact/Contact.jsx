import React, { useRef, useState } from "react";
import "./Contact.css";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setsuccess] = useState(false);
  const inInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("RahulChoudhary", "template_j8x0f3c", formRef.current, {
        publicKey: "Xfv8amkQYEDLcbTHe",
      })
      .then(
        (result) => {
          setsuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>support@gridreputation.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Address Wait!</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>1234567890</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg
            version="1.1"
            id="Icons"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 32 32"
            xmlSpace="preserve"
            width="450px"
            height="450px"
            fill="#2499c0"
            stroke="#2499c0"
            transform="rotate(0)"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke=""
              strokeWidth="0.192"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <style type="text/css">
                {`
        .st0 {
          fill: none;
          stroke: #2499c0;
          strokeWidth: 0.512;
          strokeLinejoin: round;
          strokeMiterlimit: 10;
        }
        .st1 {
          fill: none;
          stroke: #2499c0;
          strokeWidth: 0.512;
          strokeLinecap: round;
          strokeLinejoin: round;
          strokeMiterlimit: 10;
        }
        .st2 {
          fill: none;
          stroke: #2499c0;
          strokeWidth: 0.512;
          strokeMiterlimit: 10;
        }
      `}
              </style>
              <motion.path
                strokeWidth={0.2}
                fill="none"
                initial={{ pathLength: 0 }}
                animate={inInView && { pathLength: 1 }}
                transition={{ duration: 3 }}
                className="st0"
                d="M12.6,21.7c-0.3,0.3-0.6,0.7-0.8,1.1c-1.2-1-2.4-2.1-3.4-3.4c0.4-0.2,0.8-0.5,1.1-0.8c1.4-1.4,0.9-3.2-0.5-4.6 s-3.2-1.9-4.6-0.5s-1.6,4-0.5,5.6c2,3.1,5.1,6.1,8.2,8.2c1.7,1.1,4.2,0.9,5.6-0.5c1.4-1.4,0.9-3.2-0.5-4.6 C15.8,20.8,14.1,20.3,12.6,21.7z
         M22,25.9c4.1-1.9,7-6.1,7-10.9c0-6.6-5.4-12-12-12C12.6,3,8.7,5.4,6.6,9
         M13,11.9l0.4-0.4c0.7-0.7,1.8-0.7,2.5,0l0,0c0.7,0.7,0.7,1.8,0,2.5L13,17h4
         M22,15 19,15 23,11 23,18"
              ></motion.path>
            </g>
          </svg>
        </motion.div>
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <input type="text" placeholder="Name" name="name"/>
          <input type="text" placeholder="Email" name="email"/>
          <textarea rows={8} placeholder="Message" name="message"/>
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
