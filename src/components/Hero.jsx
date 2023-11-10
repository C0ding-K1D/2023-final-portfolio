import { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "../styles/Hero.css";
import video from "../assets/code3.mp4";
import navLogo from "../assets/nav_logo.svg";
import DownloadIcon from "@mui/icons-material/Download";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <div className="container">
      <nav className="nav">
        <div className="logo-container">
          <img className="my-svg" src={navLogo} alt="" />
          <div className="logo-text_container">
            <p className="logo-subtext">MATTHEW ALVAREZ</p>
            <p className="logo-text">
              <span className="color-text">DEVELOP</span>ER
            </p>
          </div>
        </div>
        <div className="nav-links_container">
          <ul className="nav-links">
            <li>About</li>
            <li>Skills</li>
            <li>Blog</li>
            <li>Projects</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </button>
          <nav className={`mobile-menu ${menuOpen ? "open" : ""}`}>
            <ul className="mobile-links">
              <li
                className={activeLink === 0 ? "active" : ""}
                onClick={() => handleLinkClick(0)}
              >
                About
              </li>
              <li
                className={activeLink === 1 ? "active" : ""}
                onClick={() => handleLinkClick(1)}
              >
                Skills
              </li>
              <li
                className={activeLink === 2 ? "active" : ""}
                onClick={() => handleLinkClick(2)}
              >
                Blog
              </li>
              <li
                className={activeLink === 3 ? "active" : ""}
                onClick={() => handleLinkClick(3)}
              >
                Projects
              </li>
              <li
                className={activeLink === 4 ? "active" : ""}
                onClick={() => handleLinkClick(4)}
              >
                Testimonials
              </li>
              <li
                className={activeLink === 5 ? "active" : ""}
                onClick={() => handleLinkClick(5)}
              >
                Contact
              </li>
            </ul>
          </nav>
        </div>
      </nav>
      <div className="bg-design">
        <h1 className="hero-subtext">FULL-STACK</h1>
        <section className="showcase">
          <video src={video} autoPlay loop muted></video>
          <h2 className="title">DEVELOPER</h2>
        </section>
        <p className="subheader">
          Welcome to my world of web development! I've crafted this portfolio to
          showcase my passion for building digital experiences that come to
          life. Take a look around and explore the fusion of design and code,
          where every pixel tells a story.
        </p>
        <Stack mt={5} spacing={2} direction="row" justifyContent="center">
          <Button
            variant="contained btn-cta"
            fontSize="large"
            endIcon={<DownloadIcon />}
          >
            Download Resume
          </Button>
          <Button
            variant="contained btn-contact"
            size="large"
            endIcon={<ChatBubbleOutlineIcon />}
          >
            Let's Talk
          </Button>
        </Stack>
      </div>
    </div>
  );
}

export default Hero;
