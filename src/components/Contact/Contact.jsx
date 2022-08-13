import "./Contact.css";
import { MdMailOutline } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  // const [data, setData] = useState({
  //   email: "",
  //   name: "",
  //   message: "",
  // });

  const [mail, setMail] = useState();
  const [name, setName] = useState();
  const [mes, setMes] = useState();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5ox6ost",
        "template_n8yzfrr",
        form.current,
        "_-IUDOCLxylMsbZbS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setMail("");
    setMes("");
  };

  const changeN = (e) => {
    setName(e.target.value);
  };
  const changeE = (e) => {
    setMail(e.target.value);
  };
  const changeM = (e) => {
    setMes(e.target.value);
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdMailOutline />
            <h4>Email</h4>
            <h5>nandanipatel1406@gmail.com</h5>
            <a href="mailto:nandanipatel1406@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <BsLinkedin />
            <h4>Linked in</h4>
            <h5>Nandani Patel</h5>
            <a
              href="https://www.linkedin.com/in/nandani-patel-824b0621a/"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            value={name}
            onChange={changeN}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={mail}
            onChange={changeE}
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
            value={mes}
            onChange={changeM}
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
