import React from "react";
import "./intro.css";
import btnImg from "../../assests/Images/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="Hello">Hello,</span>
        <span className="Introtext">
          I'm <span className="introName">Nishanth</span> <br />
          Software Developer
        </span>
        <p className="introPara">
          Likes to Talk in <br />
          Js,ReactJs,Java,python,Git....
        </p>
        <Link>
          <button
            className="btn"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/nishanthkunduru/",
                "_blank"
              );
            }}
          >
            <img src={btnImg} alt="" className="btnImg" />
            <h1 className="HireMe">Hire Me</h1>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Intro;
