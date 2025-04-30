import React, { useState, useEffect } from "react";
import "./navbar.css";
import logo from "../../assests/Images/nishanthlogo.png";
import contactImg from "../../assests/Images/resume1.png";
import { Link } from "react-scroll";
import pdfFile from "../../assests/Images/NishanthKunduru_cv_curr.pdf";
import menu from "../../assests/Images/menu.png";
// Import a dummy resume image - you'll need to create or add this to your assets
import resumePreviewImg from "../../assests/Images/resume_dummy.png";
import { Holder } from "../Holder/Holder";

// Helper function for creating confetti effect
const createConfetti = () => {
  const confettiContainer = document.createElement("div");
  confettiContainer.className = "confetti-container";
  document.body.appendChild(confettiContainer);

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confettiContainer.appendChild(confetti);
  }

  setTimeout(() => {
    document.body.removeChild(confettiContainer);
  }, 5000);
};

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [animated, setAnimated] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);
  const [isImageLoading, setIsImageLoading] = useState(true);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle animation on hover for download button
  const startAnimation = () => setAnimated(true);
  const stopAnimation = () => setAnimated(false);

  // Handle CV button click
  const onCVButtonClick = () => {
    setShowResumeModal(true);
    setIsImageLoading(true);
    // Add confetti effect when opening the modal
    createConfetti();
  };

  // Handle download click
  const onDownloadClick = () => {
    // Add confetti effect
    createConfetti();

    // Download the CV
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = "NishanthKunduru_cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Close modal after download
    setShowResumeModal(false);
  };

  // Close modal
  const closeModal = () => {
    setShowResumeModal(false);
  };

  // Handle link click for visual feedback
  const handleLinkClick = (id) => {
    setClickedItem(id);
    setTimeout(() => setClickedItem(null), 500); // Reset after animation completes
  };

  // Handle image load
  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  const navSections = [
    { id: "intro", label: "HireMe" },
    { id: "skills", label: "About" },
    { id: "works", label: "Projects" },
    { id: "contactPage", label: "Chat" },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-logo-container">
          <img className="logo" src={logo} alt="Logo" />
          <span className="logo-text">Nishanth</span>
        </div>

        <div className="navcenter">
          {navSections.map(({ id, label }) => (
            <Link
              key={id}
              activeClass="active"
              to={id}
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
              easing="easeInOutCubic"
              className={`navitems ${clickedItem === id ? "nav-clicked" : ""}`}
              onClick={() => handleLinkClick(id)}
            >
              {label}
            </Link>
          ))}
        </div>
          <Holder />

        <div className="button-container">
          <button
            onClick={onCVButtonClick}
            className={`navcontact ${animated ? "wobble" : ""}`}
            onMouseEnter={startAnimation}
            onMouseLeave={stopAnimation}
          >
            <img src={contactImg} className="navbarcontactimg" alt="View CV" />
          </button>
        </div>

        <button
          className="mobMenu-toggle"
          onClick={() => setShowMenu(!showMenu)}
        >
          <img className="menu-icon" src={menu} alt="" />
        </button>

        {showMenu && (
          <div className="navMenu">
            {navSections.map(({ id, label }) => (
              <Link
                key={id}
                activeClass="active"
                to={id}
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
                easing="easeInOutCubic"
                className={`listItem ${
                  clickedItem === id ? "nav-clicked" : ""
                }`}
                onClick={() => {
                  handleLinkClick(id);
                  setShowMenu(false);
                }}
              >
                {label}
              </Link>
            ))}
            <button onClick={onCVButtonClick} className="mobile-download">
              View CV
            </button>
          </div>
        )}
      </nav>

      {/* Resume Preview Modal with Dummy Image */}
      {showResumeModal && (
        <div className="resume-modal-overlay" onClick={closeModal}>
          <div
            className="resume-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="resume-modal-close" onClick={closeModal}>
              &times;
            </button>
            <h2>Resume Preview</h2>
            <div className="resume-container">
              {isImageLoading && (
                <div className="resume-loading">Loading preview...</div>
              )}
              <div className="resume-image-container">
                <img
                  src={resumePreviewImg}
                  alt="Resume Preview"
                  className="resume-image"
                  onLoad={handleImageLoad}
                  style={{ display: isImageLoading ? "none" : "block" }}
                />
              </div>
            </div>
            <div className="resume-modal-actions">
              <button onClick={onDownloadClick} className="download-button">
                Download CV
              </button>
              <button onClick={closeModal} className="cancel-button">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
