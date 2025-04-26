import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assests/Images/nishanthlogo.png";
import contactImg from "../../assests/Images/resume1.png";
import menu from "../../assests/Images/menu.png";
// import btnImge from '../../assests/Images/hireme.png';
import { Link } from "react-scroll";

import pdfFile from "../../assests/Images/NishanthKunduru_cv_aprl_p.pdf";
import { Holder } from "../Holder/Holder";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const onDownloadClick = () => {
    // Trigger the download logic here
    // You can use a library like FileSaver.js to handle the download
    // For simplicity, we'll use a simple anchor tag for the download
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = "NishanthKunduru_cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav class="navbar">
      <div className="navbar-logo-container">
        <img className="logo" src={logo} alt="Logo" />
        <span className="logo-text">Nishanth</span>
      </div>

      <div className="navcenter">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="navitems"
        >
          HireMe
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="navitems"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="navitems"
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="contactPage"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="navitems"
        >
          Chat
        </Link>
      </div>

      <img
        className="mobMenu"
        src={menu}
        alt="Menu"
        style={{ width: "5rem" }}
        onClick={() => setShowMenu(!showMenu)}
      />

      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          HireMe
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Portofolio
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
      <div>
        <Holder />
        <button onClick={onDownloadClick} class="navcontact ">
          <img src={contactImg} class="navbarcontactimg" alt="" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
