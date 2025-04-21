import React, { useRef, useState } from "react";
import "./contact.css";
import Twitter from "../../assests/Images/twitter.png";
import linkedin from "../../assests/Images/linkedin.png";
import Github from "../../assests/Images/github.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [k, setK] = useState(0);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aak2saq",
        "template_va6mqyj",
        form.current,
        "p9iC5L2lr77xZ5G2N"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert(error);
        }
      );
  };

  return (
    <div id="contactPage">
      <span className="contactProgress"></span>

      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Lets have a coffee chat <br />
          Then <br />
          Lets Begin...
        </span>

        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <textarea
            name="message"
            rows="5"
            placeholder="Message"
            className="msg"
          ></textarea>
          <div className="buttonSend">
            <button
              type="submit"
              value="send"
              className="submitBtn"
              onClick={() => {
                setK(k + 1);
                document
                  .querySelector(".sendTime")
                  .classList.add("newSendTime");

                document.querySelector(".btnText").innerHTML = "Sent";
                document.querySelector(".submitBtn").classList.add("Thanks");
                setTimeout(() => {
                  document
                    .querySelector(".submitBtn")
                    .classList.remove("Thanks");

                  document.querySelector(".btnText").innerHTML = "Send";
                }, 2000);
              }}
            >
              <p className="btnText">Send</p>
            </button>
            <h1 className="sendTime"></h1>
          </div>

          <div className="links">
            <a
              href="https://github.com/heisenlord"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={Github} alt="" className="clientImg" />
            </a>

            <a
              href="https://www.linkedin.com/in/nishanth-reddy-a72036215/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={linkedin} alt="" className="clientImg" />
            </a>
                <a
              href="https://notatwitter.vercel.app/Nishanth"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
                            <img src={Twitter} alt="" className="clientImg" />

            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
