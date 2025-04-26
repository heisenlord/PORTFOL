import React, { useState } from "react";
import "./holder.css";
import Leetcode from "../../assests/Images/leetcode_logo_port2.png";
import linkedin from "../../assests/Images/linkedin.png";
import Github from "../../assests/Images/github.png";

export const Holder = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
  };

  return (
    <div className="holder" onClick={handleClick}>
      <ul className={`holderbox ${isActive ? "active" : ""}`}>
        <li className="linkedin">
          <a
            className="float"
            href="https://www.linkedin.com/in/nishanth-reddy-a72036215/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="" className="clientImgd" />
          </a>
        </li>
        <li className="github">
          <a
            className="float"
            href="https://github.com/heisenlord"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Github} alt="" className="clientImgd" />
          </a>
        </li>
      </ul>
    </div>
  );
};
