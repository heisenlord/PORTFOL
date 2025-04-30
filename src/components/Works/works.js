import React from "react";
import "./works.css";
import portfolio1 from "../../assests/Images/portfolio1.jpeg";
import portfolio2 from "../../assests/Images/portfolio2.jpeg";
import portfolio3 from "../../assests/Images/portfolio3.jpeg";
import portfolio4 from "../../assests/Images/portfolio4.jpeg";
import portfolio5 from "../../assests/Images/portfolio5.jpeg";
import portfolio6 from "../../assests/Images/portfolio6.jpeg";
import portfolio7 from "../../assests/Images/logo3.png";
import notatwitter from "../../assests/Images/notatwitterlogo.png";
const Works = () => {
  return (
    <section id="works">
      <h2 className="workstitle">My Projects</h2>
      <span className="worksDesc">
        Unwavering computer enthusiast with a relentless drive for learning,
        problem-solving, and innovation. I actively engage in the tech community
        while maintaining a pioneering spirit, seeking to contribute to the
        ever-evolving world of computing
      </span>
      <div className="worksImgs">
        <div
          className="containerImg"
          onClick={() =>
            window.open("https://notatwitter.vercel.app/", "_blank")
          }
        >
          <img src={notatwitter} alt="" className="worksImg" />
          <h1 className="containerImgText">NotATwitter</h1>
          <p>A Socail networking website where virtual persona's of humans will be react and reply to your NotATweet</p>
        </div>
        <div
          className="containerImg"
          onClick={() =>
            window.open("https://github.com/heisenlord/PingApply", "_blank")
          }
        >
          <img src={portfolio7} alt="" className="worksImg" />
          <h1 className="containerImgText">PINGAPPLY</h1>
          <p>Chrome extension</p>
        </div>
        <div
          onClick={() =>
            window.open(
              "https://robinscheduler.vercel.app/home/65608de38d9dd635dcc36e7e",
              "_blank"
            )
          }
          className="containerImg"
        >
          <img src={portfolio4} alt="" className="worksImg" />
          <h1 className="containerImgText">Roundrobin Scheduler</h1>
          <p>React, MongoDB, Express, Node</p>
        </div>{" "}
        <div
          className="containerImg"
          onClick={() =>
            window.open("https://heisenlord.github.io/FActOO/", "_blank")
          }
        >
          <img src={portfolio1} alt="" className="worksImg" />
          <h1 className="containerImgText">FACTOO</h1>
          <p>python, Front-End</p>
        </div>
        <div
          className="containerImg"
          onClick={() =>
            window.open("https://github.com/heisenlord/VoiceYourMail", "_blank")
          }
        >
          <img src={portfolio2} alt="" className="worksImg" />
          <h1 className="containerImgText">Voice Your Inbox</h1>
          <p>python</p>
        </div>
        <div
          className="containerImg"
          onClick={() =>
            window.open("https://github.com/heisenlord/FACEIDCAR", "_blank")
          }
        >
          <img src={portfolio3} alt="" className="worksImg" />
          <h1 className="containerImgText">Car Theft Detection</h1>
          <p>python</p>
        </div>
        <div className="containerImg">
          <img src={portfolio5} alt="" className="worksImg" />
          <h1 className="containerImgText">Working on ML</h1>
          <p>ML based project</p>
        </div>{" "}
        <div className="containerImg">
          <img src={portfolio6} alt="" className="worksImg" />
          <h1 className="containerImgText">IDEATION PHASE</h1>
          <p>Ideation</p>
        </div>
      </div>
    </section>
  );
};

export default Works;
